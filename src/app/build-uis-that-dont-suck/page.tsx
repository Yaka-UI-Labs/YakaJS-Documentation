import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";
import { InteractiveLesson } from "./interactive-lesson";
import { lesson1Steps, lesson2Steps } from "./lessons-data";
import Link from "next/link";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "YakaJS Interactive Course - Learn by Doing",
  description: "Learn YakaJS through interactive coding lessons. Write code, run it, get instant feedback. Master modern web development from zero to hero.",
  openGraph: {
    type: "website",
    title: "YakaJS Interactive Course - Learn by Doing",
    description: "Interactive coding lessons with live code editor. Learn YakaJS by actually writing and running code.",
    images: card.src,
    url: "https://yakajs.org/build-uis-that-dont-suck",
  },
};

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0 bg-oatmeal-black min-h-screen">
      <header>
        <HeroSection />
      </header>
      <main className="pt-14 pb-28">
        <GridContainer>
          <div className="max-w-4xl space-y-8 text-base/7 text-oatmeal-stone **:[strong]:font-medium **:[strong]:text-oatmeal-white">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-oatmeal-white">Interactive Learning Platform</h2>
              <p>
                This is <strong>not just documentation</strong> — it's an interactive learning experience! Each lesson teaches you concepts step-by-step, then lets you <strong>write and run real code</strong> to practice what you've learned.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-oatmeal-olive bg-oatmeal-card p-4 space-y-2">
                  <div className="text-2xl">📚</div>
                  <h3 className="font-semibold text-oatmeal-white">Learn</h3>
                  <p className="text-sm">Concepts explained clearly with examples</p>
                </div>
                <div className="rounded-lg border border-oatmeal-olive bg-oatmeal-card p-4 space-y-2">
                  <div className="text-2xl">💻</div>
                  <h3 className="font-semibold text-oatmeal-white">Code</h3>
                  <p className="text-sm">Write and edit code in the browser</p>
                </div>
                <div className="rounded-lg border border-oatmeal-olive bg-oatmeal-card p-4 space-y-2">
                  <div className="text-2xl">🚀</div>
                  <h3 className="font-semibold text-oatmeal-white">Run</h3>
                  <p className="text-sm">Execute code and see instant results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson 1 */}
          <div className="mt-16">
            <InteractiveLesson
              title="Lesson 1: Getting Started with YakaJS"
              description="Learn the fundamentals: selecting elements, manipulating text, and method chaining"
              difficulty="beginner"
              steps={lesson1Steps}
            />
          </div>

          {/* Lesson 2 */}
          <div className="mt-16 pt-16 border-t border-oatmeal-olive">
            <InteractiveLesson
              title="Lesson 2: Events and Interactivity"
              description="Make your pages interactive with event handling"
              difficulty="beginner"
              steps={lesson2Steps}
            />
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 space-y-6 rounded-2xl border border-oatmeal-olive bg-oatmeal-card p-8">
            <h3 className="text-2xl font-semibold text-oatmeal-white">More Lessons Coming Soon!</h3>
            <p className="text-oatmeal-stone">
              We're building more interactive lessons covering:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-blue-500/20 p-2">
                    <span className="text-blue-400 text-xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-oatmeal-white">DOM Manipulation</h4>
                </div>
                <p className="text-sm text-oatmeal-stone">
                  Creating, modifying, and removing elements dynamically
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-green-500/20 p-2">
                    <span className="text-green-400 text-xl">📡</span>
                  </div>
                  <h4 className="font-semibold text-oatmeal-white">AJAX & APIs</h4>
                </div>
                <p className="text-sm text-oatmeal-stone">
                  Making HTTP requests and working with external data
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-purple-500/20 p-2">
                    <span className="text-purple-400 text-xl">✨</span>
                  </div>
                  <h4 className="font-semibold text-oatmeal-white">Animations</h4>
                </div>
                <p className="text-sm text-oatmeal-stone">
                  Adding smooth transitions and visual effects
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-yellow-500/20 p-2">
                    <span className="text-yellow-400 text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-oatmeal-white">State Management</h4>
                </div>
                <p className="text-sm text-oatmeal-stone">
                  Managing application state with signals and stores
                </p>
              </div>
            </div>
          </div>

          {/* Documentation Link */}
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-semibold text-oatmeal-white">Need Quick Reference?</h3>
            <p className="text-oatmeal-stone max-w-2xl">
              While this course teaches you interactively, you can always check the <strong className="text-oatmeal-white">full documentation</strong> for detailed API references and advanced features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/docs/yakajs-getting-started"
                className="inline-flex items-center gap-2 rounded-full bg-oatmeal-white px-6 py-3 text-sm font-semibold text-oatmeal-black hover:bg-oatmeal-stone transition-colors"
              >
                View Documentation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/docs/yakajs-api-reference"
                className="inline-flex items-center gap-2 rounded-full border border-oatmeal-olive bg-transparent px-6 py-3 text-sm font-semibold text-oatmeal-white hover:bg-oatmeal-olive/50 transition-colors"
              >
                API Reference
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 rounded-xl border border-oatmeal-olive bg-oatmeal-card p-6">
            <p className="text-sm text-oatmeal-stone">
              Want to be notified when new lessons are added? Subscribe for updates:
            </p>
            <div className="mt-4">
              <SignUpForm />
            </div>
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
