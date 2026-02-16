import { SignUpForm } from "./call-to-action";
import type { Metadata } from "next";
import { HeroSection } from "./hero-section";
import { lessonsCatalog } from "./lessons-data";
import { LessonIcon } from "./lesson-icon";
import Link from "next/link";
import card from "./card.jpg";
import GridContainer from "@/components/grid-container";

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
      <main className="relative mx-auto mt-16 max-lg:max-w-2xl">
        
        <GridContainer className="py-12">
          <div className="mx-2 text-base/7 dark:text-gray-300 text-gray-700">
            
            {/* Introduction */}
            <div className="space-y-8">
              <h2 className="text-5xl tracking-tighter text-balance font-semibold dark:text-oatmeal-white text-gray-900 sm:text-6xl">Interactive Learning Platform</h2>
              <p className="text-lg max-w-3xl leading-8">
                This is <strong className="font-semibold dark:text-oatmeal-white text-gray-900">not just documentation</strong> — it's an interactive learning experience! Each lesson teaches you concepts step-by-step, then lets you <strong className="font-semibold dark:text-oatmeal-white text-gray-900">write and run real code</strong> to practice what you've learned.
              </p>
              <div className="grid gap-6 md:grid-cols-3 mt-12">
                <div className="group relative rounded-xl border dark:border-oatmeal-olive/20 border-gray-200 dark:bg-oatmeal-card/50 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-oatmeal-card">
                  <div className="dark:text-oatmeal-white text-gray-900 mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold dark:text-oatmeal-white text-gray-900 mb-2">Learn</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">Concepts explained clearly with examples</p>
                </div>
                <div className="group relative rounded-xl border dark:border-oatmeal-olive/20 border-gray-200 dark:bg-oatmeal-card/50 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-oatmeal-card">
                  <div className="dark:text-oatmeal-white text-gray-900 mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold dark:text-oatmeal-white text-gray-900 mb-2">Code</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">Write and edit code in the browser</p>
                </div>
                <div className="group relative rounded-xl border dark:border-oatmeal-olive/20 border-gray-200 dark:bg-oatmeal-card/50 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-oatmeal-card">
                  <div className="dark:text-oatmeal-white text-gray-900 mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold dark:text-oatmeal-white text-gray-900 mb-2">Run</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">Execute code and see instant results</p>
                </div>
              </div>
            </div>

          </div>
        </GridContainer>
        
        <GridContainer className="mt-20">
          <div className="mx-2">
            {/* Course Lessons */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl tracking-tighter font-semibold dark:text-oatmeal-white text-gray-900 sm:text-5xl">Start Learning</h2>
                <p className="text-lg dark:text-gray-400 text-gray-600 max-w-3xl leading-8">
                  Choose a lesson below to begin your YakaJS journey. Each lesson is designed to build on the previous one, taking you from beginner to proficient.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {lessonsCatalog.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/build-uis-that-dont-suck/${lesson.slug}`}
                    className="group relative rounded-2xl border dark:border-oatmeal-olive/30 border-gray-200 dark:bg-oatmeal-card/50 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] dark:hover:border-oatmeal-stone/50 hover:border-gray-300 dark:hover:bg-oatmeal-card"
                  >
                    {/* Lesson number badge */}
                    <div className="absolute -top-4 -left-4 flex items-center justify-center w-14 h-14 rounded-full dark:bg-gradient-to-br dark:from-oatmeal-white dark:to-oatmeal-stone bg-gradient-to-br from-gray-900 to-gray-700 border-4 dark:border-oatmeal-black border-white dark:text-oatmeal-black text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {lesson.number}
                    </div>

                    {/* Icon and difficulty */}
                    <div className="flex items-start justify-between mb-6 mt-4">
                      <div className="dark:text-oatmeal-white text-gray-900 p-3 rounded-xl dark:bg-oatmeal-olive/40 bg-gray-100 group-hover:scale-110 transition-transform">
                        <LessonIcon name={lesson.icon} className="w-9 h-9" />
                      </div>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        lesson.difficulty === 'beginner' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/40 dark:bg-green-500/10'
                          : lesson.difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 dark:bg-yellow-500/10'
                          : 'bg-red-500/20 text-red-400 border border-red-500/40 dark:bg-red-500/10'
                      }`}>
                        {lesson.difficulty}
                      </span>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold dark:text-oatmeal-white text-gray-900 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {lesson.title}
                    </h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 mb-6 leading-relaxed">
                      {lesson.description}
                    </p>

                    {/* Time estimate and arrow */}
                    <div className="flex items-center justify-between text-sm pt-4 border-t dark:border-oatmeal-olive/30 border-gray-200">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 dark:text-gray-500 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="dark:text-gray-400 text-gray-500 font-medium">{lesson.estimatedTime}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 dark:text-blue-400 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        Start
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </GridContainer>
        
        <GridContainer className="mt-24">
          <div className="mx-2">
            {/* Coming Soon Section */}
            <div className="space-y-8 rounded-3xl border dark:border-oatmeal-olive/30 border-gray-200 dark:bg-gradient-to-br dark:from-oatmeal-card dark:to-oatmeal-black/50 bg-gradient-to-br from-white to-gray-50 p-10 shadow-lg">
              <div className="space-y-3">
                <h3 className="text-3xl tracking-tight font-bold dark:text-oatmeal-white text-gray-900">More Lessons Coming Soon!</h3>
                <p className="text-lg dark:text-gray-400 text-gray-600">
                  We're building more interactive lessons covering:
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-none rounded-xl bg-blue-500/20 p-3 ring-1 ring-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                    </div>
                    <h4 className="font-bold dark:text-oatmeal-white text-gray-900 text-lg">DOM Manipulation</h4>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                    Creating, modifying, and removing elements dynamically
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-none rounded-xl bg-green-500/20 p-3 ring-1 ring-green-500/30">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold dark:text-oatmeal-white text-gray-900 text-lg">AJAX & APIs</h4>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                    Making HTTP requests and working with external data
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-none rounded-xl bg-purple-500/20 p-3 ring-1 ring-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <h4 className="font-bold dark:text-oatmeal-white text-gray-900 text-lg">Animations</h4>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                    Adding smooth transitions and visual effects
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-none rounded-xl bg-yellow-500/20 p-3 ring-1 ring-yellow-500/30">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h4 className="font-bold dark:text-oatmeal-white text-gray-900 text-lg">State Management</h4>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                    Managing application state with signals and stores
                  </p>
                </div>
              </div>
            </div>

          </div>
        </GridContainer>
        
        <GridContainer className="mt-20">
          <div className="mx-2">
            {/* Documentation Link */}
            <div className="space-y-6">
              <h3 className="text-3xl tracking-tight font-bold dark:text-oatmeal-white text-gray-900">Need Quick Reference?</h3>
              <p className="text-lg dark:text-gray-400 text-gray-600 max-w-3xl leading-8">
                While this course teaches you interactively, you can always check the <strong className="font-semibold dark:text-oatmeal-white text-gray-900">full documentation</strong> for detailed API references and advanced features.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  href="/docs/yakajs-getting-started"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Documentation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/docs/yakajs-api-reference"
                  className="inline-flex items-center gap-2 rounded-xl border-2 dark:border-oatmeal-stone/30 border-gray-300 bg-transparent px-8 py-4 text-base font-bold dark:text-oatmeal-white text-gray-900 dark:hover:bg-oatmeal-olive/30 hover:bg-gray-100 dark:hover:border-oatmeal-white hover:border-gray-400 transition-all hover:scale-105 shadow-md hover:shadow-lg"
                >
                  API Reference
                </Link>
              </div>
            </div>

          </div>
        </GridContainer>
        
        <GridContainer className="mt-20 mb-24">
          <div className="mx-2">
            {/* Newsletter */}
            <div className="rounded-2xl border dark:border-oatmeal-olive/30 border-gray-200 dark:bg-gradient-to-br dark:from-oatmeal-card dark:to-oatmeal-black/50 bg-gradient-to-br from-white to-gray-50 p-10 shadow-lg">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold dark:text-oatmeal-white text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-base dark:text-gray-400 text-gray-600 mb-6">
                  Want to be notified when new lessons are added? Subscribe for updates and get the latest YakaJS learning content delivered to you.
                </p>
                <div className="mt-6">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
