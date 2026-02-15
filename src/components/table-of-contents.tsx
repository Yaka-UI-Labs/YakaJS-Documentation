"use client";

import { useEffect, useState, useMemo } from "react";
import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

export type TOCEntry = {
  level: number;
  text: string;
  slug: string;
  children: TOCEntry[];
};

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
  let [activeSection, setActiveSection] = useState<string | null>(null);
  
  // Memoize the first TOC slug so it doesn't change on every render
  const firstTOCSlug = useMemo(() => 
    tableOfContents.length > 0 ? tableOfContents[0].slug : null,
    [tableOfContents]
  );
  
  useEffect(() => {
    const root = document.querySelector('[data-content="true"]');
    if (!root) return;

    // Collect all headings (H1, H2 and H3) directly
    const headings = Array.from(root.querySelectorAll('h1[id], h2[id], h3[id]')) as HTMLElement[];
    if (headings.length === 0) return;

    const headingIds = new Map<HTMLElement, string>();
    headings.forEach(heading => {
      if (heading.id) {
        headingIds.set(heading, `#${heading.id}`);
      }
    });

    const updateActiveSection = () => {
      // Get scroll position with offset to trigger slightly before reaching the top
      const scrollPosition = window.scrollY + 150;
      
      // Find which section we're currently in by checking the scroll position
      // relative to heading positions
      let currentHeading: HTMLElement | null = null;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        // If the heading is above or at the scroll position, this is our active section
        if (heading.offsetTop <= scrollPosition) {
          currentHeading = heading;
          break;
        }
      }
      
      // Update the active section if we found a heading
      if (currentHeading) {
        const headingId = headingIds.get(currentHeading);
        if (headingId) {
          setActiveSection(headingId);
        }
      } else if (firstTOCSlug) {
        // If we're at the very top (above all tracked headings), use the first TOC entry
        setActiveSection(firstTOCSlug);
      }
    };

    // Use scroll event with throttling for better performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(updateActiveSection, 100);
    };

    // Initial update
    updateActiveSection();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [firstTOCSlug]);

  return (
    <NavList>
      <NavListHeading>On this page</NavListHeading>
      <NavListItems data-toc="true">
        {tableOfContents.map(({ text, slug, children }, i) => (
          <NavListItem key={i}>
            <NavListLink aria-current={activeSection === slug ? "location" : undefined} href={slug}>
              {text}
            </NavListLink>
            {children.length > 0 && (
              <NavListItems nested>
                {children.map(({ text, slug }, i) => (
                  <NavListItem key={i}>
                    <NavListLink nested aria-current={activeSection === slug ? "location" : undefined} href={slug}>
                      {text}
                    </NavListLink>
                  </NavListItem>
                ))}
              </NavListItems>
            )}
          </NavListItem>
        ))}
      </NavListItems>
    </NavList>
  );
}
