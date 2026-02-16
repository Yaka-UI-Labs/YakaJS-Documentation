import React from "react";
import { FooterMeta, FooterSitemap } from "@/components/footer";
import { Header } from "@/components/header";

export default async function BlogLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10">
        <Header />
      </div>
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:pt-14.25">
        {/* Main content area */}
        <div className="relative row-start-1 overflow-x-hidden">{children}</div>

        <div className="col-span-full row-start-2 h-px bg-gray-950/5 dark:bg-white/10" />
        <div className="row-start-3">
          <FooterSitemap className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
        </div>
        <div className="col-span-full row-start-4 h-px bg-gray-950/5 dark:bg-white/10" />
        <div className="row-start-5">
          <FooterMeta className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
        </div>
      </div>
    </div>
  );
}
