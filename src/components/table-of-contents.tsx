"use client";

import { useEffect, useState, useRef } from "react";
import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

export type TOCEntry = {
  level: number;
  text: string;
  slug: string;
  children: TOCEntry[];
};

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const tocRef = useRef(tableOfContents);
  
  // Update ref when tableOfContents changes
  useEffect(() => {
    tocRef.current = tableOfContents;
  }, [tableOfContents]);
  
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
      // Get the first TOC entry slug for top-of-page handling from ref
      const firstTOCSlug = tocRef.current.length > 0 ? tocRef.current[0].slug : null;
      
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
  }, []); // Empty dependency array - run once on mount

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
