import clsx from "clsx";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer className="bg-oatmeal-card text-sm/loose text-oatmeal-stone dark:bg-oatmeal-card dark:text-oatmeal-stone">
      <div className={clsx("flex gap-4 p-4 md:hidden", className)}>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <YakaJS />
          </div>
          <div>
            <Resources />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <Community />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mx-auto hidden w-full grid-cols-3 justify-between gap-y-0 md:grid md:gap-6 md:gap-x-4 lg:gap-8",
          className,
        )}
      >
        <div className="border-x border-b border-oatmeal-olive py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-oatmeal-olive">
          <YakaJS />
        </div>
        <div className="border-x border-b border-oatmeal-olive py-10 pl-2 not-md:border-0 sm:border-b-0 dark:border-oatmeal-olive">
          <Resources />
        </div>
        <div className="border-x border-oatmeal-olive py-10 pl-2 not-md:border-0 dark:border-oatmeal-olive">
          <Community />
        </div>
      </div>
    </footer>
  );
}

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={clsx(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <ThemeToggle />
        <div className="flex flex-col gap-4 text-sm/6 text-oatmeal-stone sm:flex-row sm:gap-2 sm:pr-4 dark:text-oatmeal-white/80">
          <span>Copyright ©&nbsp;{new Date().getFullYear()}&nbsp;Yaka UI Labs</span>
          <span className="max-sm:hidden">&middot;</span>
          <Link href="/brand" className="hover:underline hover:text-oatmeal-white">
            Trademark Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

function YakaJS() {
  return (
    <>
      <h3 className="font-semibold">YakaJS</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="/docs" className="hover:underline">
            Documentation
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/showcase" className="hover:underline">
            Showcase
          </Link>
        </li>
        <li>
          <Link href="/sponsor" className="hover:underline">
            Sponsor
          </Link>
        </li>
      </ul>
    </>
  );
}


function Resources() {
  return (
    <>
      <h3 className="font-semibold">Resources</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="https://github.com/Yaka-UI-Labs/YakaJS-Documentation" className="hover:underline">
            Documentation Source
          </Link>
        </li>
      </ul>
    </>
  );
}

function Community() {
  return (
    <>
      <h3 className="font-semibold">Community</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="https://github.com/Yaka-UI-Labs/YakaJS-Documentation" className="hover:underline">
            GitHub
          </Link>
        </li>
      </ul>
    </>
  );
}
