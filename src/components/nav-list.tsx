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
    <Element className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm py-1.5 font-mono text-xs font-semibold tracking-widest text-gray-700 uppercase dark:bg-gray-950/95 dark:text-gray-300">
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
          : "border-gray-200 dark:border-gray-800",
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
        "border-transparent text-gray-600 dark:text-gray-400",
        // Hover state
        "hover:border-blue-500/50 hover:text-gray-900 hover:translate-x-0.5 dark:hover:text-white dark:hover:border-blue-400/50",
        // Active state
        "aria-[current]:border-blue-600 aria-[current]:font-semibold aria-[current]:text-blue-600",
        "dark:aria-[current]:border-blue-400 dark:aria-[current]:text-blue-400",
        // Padding
        nested ? "pl-6" : "pl-3",
      )}
      href={href}
      {...props}
    >
      {/* Active indicator dot */}
      <span className={clsx(
        "absolute left-0 w-1 h-1 rounded-full transition-all duration-150",
        "opacity-0 -translate-x-1 bg-blue-600 dark:bg-blue-400",
        "aria-[current]:opacity-100 aria-[current]:translate-x-0",
        "group-hover:opacity-50 group-hover:translate-x-0"
      )} aria-hidden="true" />
      
      {/* Hover background effect */}
      <span className={clsx(
        "absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-blue-50 to-transparent transition-all duration-150",
        "dark:from-blue-950/20",
        "group-hover:w-full opacity-0 group-hover:opacity-100",
        "aria-[current]:w-full aria-[current]:opacity-100 aria-[current]:from-blue-100/50 dark:aria-[current]:from-blue-900/20"
      )} aria-hidden="true" />
      
      <span className="relative z-10">{children}</span>
    </CloseButton>
  );
}
