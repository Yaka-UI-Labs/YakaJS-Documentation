"use client";

import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconButton } from "./icon-button";
import { SearchButton } from "./search";

function Logo(props: React.ComponentProps<"div">) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <img 
        src="/yaka-icon-only.svg" 
        alt="YakaJS Icon" 
        className="w-8 h-8 flex-shrink-0"
      />
      <span className="text-base font-semibold leading-none flex items-center">YakaJS</span>
    </div>
  );
}

function GitHubLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z" />
    </svg>
  );
}

function YakaJsMark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 34 24" fill="none" {...props}>
      <text x="0" y="18" fill="color(display-p3 .2196 .7412 .9725)" fontSize="20" fontWeight="bold">YakaJS</text>
    </svg>
  );
}

function VersionPicker() {
  return (
    <Menu>
      <MenuButton
        className="flex items-center gap-0.5 rounded-2xl bg-yaka-lightest/10 py-0.5 pr-1.5 pl-2.5 text-xs/5 font-medium text-yaka-lightest tabular-nums hover:bg-yaka-lightest/20 data-active:bg-yaka-lightest/20 dark:bg-yaka-lightest/10 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/15 dark:data-active:bg-yaka-lightest/15"
        aria-label="Select version of library"
      >
        v1.1
        <ChevronDownIcon className="size-4 fill-yaka-lightest" />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="mt-2 w-28 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-yaka-darkest tabular-nums shadow-sm ring ring-yaka-darkest/5 [--anchor-offset:calc(var(--spacing)*-1)] dark:bg-yaka-dark dark:text-yaka-lightest dark:ring-yaka-lightest/10"
      >
        <MenuItem disabled>
          <div className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-yaka-darkest/5 dark:data-active:bg-yaka-lightest/10">
            v1.1
            <CheckIcon className="size-4" />
          </div>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-yaka-darkest/5 dark:data-active:bg-yaka-lightest/10"
          >
            v1.0
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function Header(props: React.PropsWithChildren) {
  let [navIsOpen, setNavIsOpen] = useState(false);
  let router = useRouter();

  return (
    <div className="bg-oatmeal-card/95 backdrop-blur-lg border-b border-oatmeal-olive dark:bg-oatmeal-card/95 dark:backdrop-blur-xl dark:border-oatmeal-olive">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Home"
            onContextMenu={(evt) => {
              evt.preventDefault();
              router.push("/brand");
            }}
          >
            <Logo className="h-5 text-white dark:text-white" />
          </Link>
          <VersionPicker />
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <SearchButton className="inline-flex items-center gap-1 rounded-full bg-oatmeal-white/10 px-2 py-1 inset-ring inset-ring-oatmeal-white/20 dark:bg-oatmeal-white/5 dark:inset-ring-oatmeal-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-yaka-lightest dark:fill-yaka-light"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <kbd className="hidden font-sans text-xs/4 text-yaka-lightest dark:text-yaka-lighter [.os-macos_&]:block">⌘K</kbd>
            <kbd className="hidden font-sans text-xs/4 text-yaka-lightest not-[.os-macos_&]:block dark:text-yaka-lighter">
              Ctrl&nbsp;K
            </kbd>
          </SearchButton>
          <Link href="/docs/yakajs-getting-started" className="text-sm/6 text-yaka-lightest dark:text-yaka-lightest hover:text-yaka-accent">
            Docs
          </Link>
          <Link href="/blog" className="text-sm/6 text-yaka-lightest dark:text-yaka-lightest hover:text-yaka-accent">
            Blog
          </Link>
          <Link href="/showcase" className="text-sm/6 text-yaka-lightest dark:text-yaka-lightest hover:text-yaka-accent">
            Showcase
          </Link>
          <Link href="/sponsor" className="text-sm/6 text-yaka-lightest dark:text-yaka-lightest hover:text-yaka-accent">
            Sponsor
          </Link>
          <a href="/plus?ref=top" className="group relative px-1.5 text-sm/6 text-yaka-accent-dark dark:text-yaka-accent">
            <span className="absolute inset-0 border border-dashed border-yaka-accent/60 bg-yaka-accent/10 group-hover:bg-yaka-accent/15 dark:border-yaka-accent/30" />
            Plus
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] left-[-2px] fill-yaka-accent dark:fill-yaka-accent/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] right-[-2px] fill-yaka-accent dark:fill-yaka-accent/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute bottom-[-2px] left-[-2px] fill-yaka-accent dark:fill-yaka-accent/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute right-[-2px] bottom-[-2px] fill-yaka-accent dark:fill-yaka-accent/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
          </a>

          <Link href="https://github.com/Yaka-UI-Labs/YakaJS" aria-label="GitHub repository">
            <GitHubLogo className="size-5 fill-yaka-lightest/80 dark:fill-yaka-light hover:fill-yaka-accent" />
          </Link>
        </div>
        <div className="flex items-center gap-2.5 md:hidden">
          <SearchButton aria-label="Search" className="inline-grid size-7 place-items-center rounded-md">
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </SearchButton>

          <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(!navIsOpen)}>
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </IconButton>

          <Dialog
            open={navIsOpen}
            onClose={() => setNavIsOpen(false)}
            className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-yaka-dark"
          >
            <DialogPanel className="size-full overflow-y-auto">
              <div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
                <YakaJsMark className="h-6" />
                <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                </IconButton>
              </div>
              <div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
                <Link
                  href="/docs/yakajs-getting-started"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  Docs
                </Link>
                <a
                  href="/plus/?ref=top"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  Plus
                </a>
                <Link
                  href="/blog"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  Blog
                </Link>
                <Link
                  href="/showcase"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  Showcase
                </Link>
                <Link
                  href="/sponsor"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  Sponsor
                </Link>
                <Link
                  href="https://github.com/Yaka-UI-Labs/YakaJS"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-yaka-darkest data-active:bg-yaka-darkest/5 dark:text-yaka-lightest dark:hover:bg-yaka-lightest/10"
                >
                  GitHub
                </Link>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
