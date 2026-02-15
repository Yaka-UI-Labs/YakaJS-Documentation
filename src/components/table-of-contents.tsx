"use client";

import { useEffect, useState } from "react";
import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

export type TOCEntry = {
  level: number;
  text: string;
  slug: string;
  children: TOCEntry[];
};

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
  let [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    const root = document.querySelector('[data-content="true"]');
    if (!root) return;

    // Collect all headings (H2 and H3) directly
    const headings = Array.from(root.querySelectorAll('h2[id], h3[id]')) as HTMLElement[];
    if (headings.length === 0) return;

    const headingIds = new Map<HTMLElement, string>();
    headings.forEach(heading => {
      if (heading.id) {
        headingIds.set(heading, `#${heading.id}`);
      }
    });

    let visibleHeadings = new Set<HTMLElement>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      for (let entry of entries) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          visibleHeadings.add(target);
        } else {
          visibleHeadings.delete(target);
        }
      }

      // Find the first visible heading or the one closest to the top
      if (visibleHeadings.size > 0) {
        const sortedHeadings = Array.from(visibleHeadings).sort((a, b) => {
          return a.offsetTop - b.offsetTop;
        });
        const topHeading = sortedHeadings[0];
        const headingId = headingIds.get(topHeading);
        if (headingId) {
          setActiveSection(headingId);
        }
      } else {
        // If no headings are visible, find the last heading above the viewport
        const scrollPosition = window.scrollY;
        let lastHeadingAbove: HTMLElement | null = null;
        
        for (const heading of headings) {
          if (heading.offsetTop <= scrollPosition + 100) {
            lastHeadingAbove = heading;
          } else {
            break;
          }
        }
        
        if (lastHeadingAbove) {
          const headingId = headingIds.get(lastHeadingAbove);
          if (headingId) {
            setActiveSection(headingId);
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

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
