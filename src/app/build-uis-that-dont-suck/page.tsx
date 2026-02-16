import { SignUpForm } from "./call-to-action";
import type { Metadata } from "next";
import { HeroSection } from "./hero-section";
import { lessonsCatalog } from "./lessons-data";
import { LessonIcon } from "./lesson-icon";
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
    <div className="relative">
      <header>
        <HeroSection />
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
        {/* Grid line before hero section - spans full width */}
        <div className="col-span-full border-t border-gray-200 dark:border-oatmeal-olive/30" />
        
        <div className="lg:col-start-2 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8 text-base/7 dark:text-oatmeal-stone text-gray-700 **:[strong]:font-medium dark:**:[strong]:text-oatmeal-white **:[strong]:text-gray-900">
            
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold dark:text-oatmeal-white text-gray-900">Interactive Learning Platform</h2>
              <p>
                This is <strong>not just documentation</strong> — it's an interactive learning experience! Each lesson teaches you concepts step-by-step, then lets you <strong>write and run real code</strong> to practice what you've learned.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-4 space-y-2 shadow-sm">
                  <div className="dark:text-oatmeal-white text-gray-900">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="font-semibold dark:text-oatmeal-white text-gray-900">Learn</h3>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">Concepts explained clearly with examples</p>
                </div>
                <div className="rounded-lg border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-4 space-y-2 shadow-sm">
                  <div className="dark:text-oatmeal-white text-gray-900">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h3 className="font-semibold dark:text-oatmeal-white text-gray-900">Code</h3>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">Write and edit code in the browser</p>
                </div>
                <div className="rounded-lg border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-4 space-y-2 shadow-sm">
                  <div className="dark:text-oatmeal-white text-gray-900">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold dark:text-oatmeal-white text-gray-900">Run</h3>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">Execute code and see instant results</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Grid line after hero section - spans full width */}
        <div className="col-span-full my-12 border-t border-gray-200 dark:border-oatmeal-olive/30" />
        
        <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Course Lessons */}
            <div className="mt-16 space-y-6">
              <h2 className="text-3xl font-bold dark:text-oatmeal-white text-gray-900">Start Learning</h2>
              <p className="dark:text-oatmeal-stone text-gray-600">
                Choose a lesson below to begin your YakaJS journey. Each lesson is designed to build on the previous one, taking you from beginner to proficient.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {lessonsCatalog.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/build-uis-that-dont-suck/${lesson.slug}`}
                    className="group relative rounded-xl border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-6 shadow-sm transition-all dark:hover:border-oatmeal-stone hover:border-gray-400 dark:hover:bg-oatmeal-olive/30 hover:shadow-md"
                  >
                    {/* Lesson number badge */}
                    <div className="absolute -top-3 -left-3 flex items-center justify-center w-12 h-12 rounded-full dark:bg-oatmeal-black bg-gray-900 border-2 dark:border-oatmeal-olive border-gray-200 dark:text-oatmeal-white text-white font-bold text-lg dark:group-hover:border-oatmeal-white group-hover:border-gray-400 transition-colors shadow-lg">
                      {lesson.number}
                    </div>

                    {/* Icon and difficulty */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="dark:text-oatmeal-white text-gray-900 p-2 rounded-lg dark:bg-oatmeal-olive/30 bg-gray-100">
                        <LessonIcon name={lesson.icon} className="w-8 h-8" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lesson.difficulty === 'beginner' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : lesson.difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {lesson.difficulty.toUpperCase()}
                      </span>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-semibold dark:text-oatmeal-white text-gray-900 mb-2 dark:group-hover:text-oatmeal-stone group-hover:text-gray-600 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm dark:text-oatmeal-stone text-gray-600 mb-4">
                      {lesson.description}
                    </p>

                    {/* Time estimate and arrow */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="dark:text-oatmeal-stone/70 text-gray-500">~{lesson.estimatedTime}</span>
                      <span className="inline-flex items-center gap-1 dark:text-oatmeal-stone text-gray-600 dark:group-hover:text-oatmeal-white group-hover:text-gray-900 transition-colors">
                        Start Lesson
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        {/* Grid line after lessons - spans full width */}
        <div className="col-span-full my-12 border-t border-gray-200 dark:border-oatmeal-olive/30" />
        
        <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Coming Soon Section */}
            <div className="mt-16 space-y-6 rounded-2xl border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold dark:text-oatmeal-white text-gray-900">More Lessons Coming Soon!</h3>
              <p className="dark:text-oatmeal-stone text-gray-600">
                We're building more interactive lessons covering:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-none rounded-lg bg-blue-500/20 p-2">
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                    </div>
                    <h4 className="font-semibold dark:text-oatmeal-white text-gray-900">DOM Manipulation</h4>
                  </div>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">
                    Creating, modifying, and removing elements dynamically
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-none rounded-lg bg-green-500/20 p-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold dark:text-oatmeal-white text-gray-900">AJAX & APIs</h4>
                  </div>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">
                    Making HTTP requests and working with external data
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-none rounded-lg bg-purple-500/20 p-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold dark:text-oatmeal-white text-gray-900">Animations</h4>
                  </div>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">
                    Adding smooth transitions and visual effects
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-none rounded-lg bg-yellow-500/20 p-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold dark:text-oatmeal-white text-gray-900">State Management</h4>
                  </div>
                  <p className="text-sm dark:text-oatmeal-stone text-gray-600">
                    Managing application state with signals and stores
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Grid line after coming soon - spans full width */}
        <div className="col-span-full my-12 border-t border-gray-200 dark:border-oatmeal-olive/30" />
        
        <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Documentation Link */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-semibold dark:text-oatmeal-white text-gray-900">Need Quick Reference?</h3>
              <p className="dark:text-oatmeal-stone text-gray-600 max-w-2xl">
                While this course teaches you interactively, you can always check the <strong className="dark:text-oatmeal-white text-gray-900">full documentation</strong> for detailed API references and advanced features.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/docs/yakajs-getting-started"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-oatmeal-white px-6 py-3 text-sm font-semibold text-white dark:text-oatmeal-black hover:bg-gray-700 dark:hover:bg-oatmeal-stone transition-colors"
                >
                  View Documentation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/docs/yakajs-api-reference"
                  className="inline-flex items-center gap-2 rounded-full border dark:border-oatmeal-olive border-gray-200 bg-transparent px-6 py-3 text-sm font-semibold dark:text-oatmeal-white text-gray-900 dark:hover:bg-oatmeal-olive/50 hover:bg-gray-100 transition-colors"
                >
                  API Reference
                </Link>
              </div>
            </div>

          </div>
        </div>
        
        {/* Grid line after documentation links - spans full width */}
        <div className="col-span-full my-12 border-t border-gray-200 dark:border-oatmeal-olive/30" />
        
        <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Newsletter */}
            <div className="mt-12 rounded-xl border dark:border-oatmeal-olive border-gray-200 dark:bg-oatmeal-card bg-white p-6 shadow-sm">
              <p className="text-sm dark:text-oatmeal-stone text-gray-600">
                Want to be notified when new lessons are added? Subscribe for updates:
              </p>
              <div className="mt-4">
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
