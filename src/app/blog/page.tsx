import { Keyboard } from "@/components/blog/keyboard";
import GridContainer from "@/components/grid-container";
import { NewsletterForm } from "@/components/newsletter-form";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { formatDate, getBlogPostBySlug, getBlogPostSlugs, nonNullable } from "./api";

export const metadata: Metadata = {
  title: "Blog",
  description: "All the latest YakaJS news, straight from the team.",
  openGraph: {
    type: "article",
    title: "Latest updates - Blog",
    description: "All the latest YakaJS news, straight from the team.",
    url: "https://yakajs.org/blog",
  },
};

export default async function Blog() {
  let slugs = await getBlogPostSlugs();
  let posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(nonNullable)
    .filter((post) => !post.meta.private);

  return (
    <div className="relative mx-auto mt-24 max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 left-[200px] isolate z-0 not-xl:hidden xl:left-[300px]">
        <Keyboard />
      </div>
      <GridContainer>
        <h1 className="mx-2 text-6xl tracking-tighter text-balance sm:text-7xl lg:text-8xl text-gray-950 dark:text-white">
          Latest Updates
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="mx-2 text-lg text-gray-700 dark:text-gray-300">
          All the latest YakaJS news, straight from the team.
        </p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="mx-2 max-w-2xl">
          <NewsletterForm action="https://app.convertkit.com/forms/yakajs/subscriptions" />
        </div>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 lg:grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
        {posts.map(({ meta, slug }, index) => (
          <Fragment key={slug}>
            <GridContainer className="col-span-3 grid grid-cols-subgrid divide-x divide-gray-950/5 dark:divide-white/10">
              <div className="px-2 text-left font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase max-lg:hidden">
                {formatDate(meta.date)}
              </div>
              <div className="max-lg:hidden" />
              <div className="text-md px-2 text-left">
                <div className="max-w-(--container-2xl)">
                  <div className="mb-4 text-left font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase lg:hidden">
                    {formatDate(meta.date)}
                  </div>

                  <Link
                    href={`/blog/${slug}`}
                    className="font-semibold text-gray-950 dark:text-white hover:text-yaka-accent dark:hover:text-yaka-accent"
                  >
                    {meta.title}
                  </Link>
                  <div className="prose prose-blog mt-4 line-clamp-3 leading-7 text-gray-700 dark:text-gray-300">
                    {meta.excerpt}
                  </div>
                  <Link
                    href={`/blog/${slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-yaka-accent hover:text-yaka-accent-dark"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </GridContainer>
            {index !== posts.length - 1 && (
              <div className="contents divide-x divide-gray-950/5 dark:divide-white/10">
                <div className="h-16 max-lg:hidden" />
                <div className="h-16 max-lg:hidden" />
                <div className="h-16" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
