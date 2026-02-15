import { CloseButton } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

export function NavList({ children, ...rest }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2" {...rest}>
      {children}
    </div>
  );
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export function NavListHeading({ children, level = 3 }: React.PropsWithChildren<{ level?: HeadingLevel }>) {
  let Element: `h${HeadingLevel}` = `h${level}`;
  return (
    <Element className="py-2 px-3 font-mono text-sm font-bold tracking-wider text-yaka-accent uppercase dark:text-yaka-accent border-b border-yaka-accent/20 mb-2">
      {children}
    </Element>
  );
}

export function NavListItems({ children, nested = false }: React.PropsWithChildren<{ nested?: boolean }>) {
  return (
    <ul
      className={clsx(
        "flex flex-col gap-0.5 border-l transition-colors",
        nested 
          ? "border-transparent ml-2" 
          : "border-yaka-light/30 dark:border-yaka-darker",
      )}
    >
      {children}
    </ul>
  );
}

export function NavListItem({ children }: React.PropsWithChildren) {
  return <li className="-ml-px flex flex-col items-start gap-0.5">{children}</li>;
}

export function NavListLink({
  href,
  children,
  nested = false,
  ...props
}: React.PropsWithChildren<{ href: string; nested?: boolean }>) {
  return (
    <CloseButton
      as={Link}
      className={clsx(
        "group relative inline-flex items-center gap-2 border-l-2 py-1 text-sm transition-all duration-150 ease-out",
        // Default state
        "border-transparent text-yaka-medium dark:text-yaka-lighter",
        // Hover state
        "hover:border-transparent hover:text-yaka-darkest hover:translate-x-0.5 dark:hover:text-yaka-lightest",
        // Active state
        "aria-[current]:border-transparent aria-[current]:font-semibold aria-[current]:text-yaka-accent-dark",
        "dark:aria-[current]:text-yaka-accent",
        // Padding
        nested ? "pl-6" : "pl-3",
      )}
      href={href}
      {...props}
    >
      {/* Pipe indicator for active state */}
      <span className={clsx(
        "absolute left-0 text-yaka-accent font-bold transition-all duration-150",
        "opacity-0 -translate-x-1",
        "aria-[current]:opacity-100 aria-[current]:translate-x-0"
      )} aria-hidden="true">
        |
      </span>
      
      {/* Hover background effect */}
      <span className={clsx(
        "absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-yaka-accent/10 to-transparent transition-all duration-150",
        "dark:from-yaka-accent/5",
        "group-hover:w-full opacity-0 group-hover:opacity-100",
        "aria-[current]:w-full aria-[current]:opacity-100 aria-[current]:from-yaka-accent/20 dark:aria-[current]:from-yaka-accent/10"
      )} aria-hidden="true" />
      
      <span className="relative z-10">{children}</span>
    </CloseButton>
  );
}
