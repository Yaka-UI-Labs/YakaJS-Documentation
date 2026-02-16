import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { InteractiveLesson } from "../interactive-lesson";
import { getLessonBySlug, getAdjacentLessons, lessonsCatalog } from "../lessons-data";
import { LessonIcon } from "../lesson-icon";

export async function generateStaticParams() {
  return lessonsCatalog.map((lesson) => ({
    lesson: lesson.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lesson: string }> }): Promise<Metadata> {
  const { lesson } = await params;
  const lessonData = getLessonBySlug(lesson);
  
  if (!lessonData) {
    return {
      title: "Lesson Not Found - YakaJS",
    };
  }

  return {
    title: `${lessonData.metadata.title} - YakaJS Interactive Course`,
    description: lessonData.metadata.description,
    openGraph: {
      type: "website",
      title: `${lessonData.metadata.title} - YakaJS Interactive Course`,
      description: lessonData.metadata.description,
      url: `https://yakajs.org/build-uis-that-dont-suck/${lesson}`,
    },
  };
}

export default async function LessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params;
  const lessonData = getLessonBySlug(lesson);
  
  if (!lessonData) {
    notFound();
  }

  const { metadata, steps } = lessonData;
  const { prev, next } = getAdjacentLessons(lesson);

  return (
    <div className="relative">
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Back to course link */}
          <div className="mb-8">
            <Link
              href="/build-uis-that-dont-suck"
              className="inline-flex items-center gap-2 dark:text-oatmeal-stone text-gray-600 dark:hover:text-oatmeal-white hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Course
            </Link>
          </div>

          {/* Lesson badge */}
          <div className="mb-6 flex items-center gap-3">
            <div className="p-3 rounded-xl dark:bg-oatmeal-olive/30 bg-gray-100 dark:text-oatmeal-white text-gray-900">
              <LessonIcon name={metadata.icon} className="w-10 h-10" />
            </div>
            <div>
              <div className="text-sm dark:text-oatmeal-stone text-gray-600">Lesson {metadata.number}</div>
              <div className="text-xs dark:text-oatmeal-stone/70 text-gray-500">~{metadata.estimatedTime}</div>
            </div>
          </div>

          {/* Interactive Lesson */}
          <InteractiveLesson
            title={metadata.title}
            description={metadata.description}
            difficulty={metadata.difficulty}
            steps={steps}
          />

          {/* Navigation to prev/next lessons */}
          <div className="mt-16 flex items-center justify-between gap-4 pt-8 border-t dark:border-oatmeal-olive border-gray-200">
            <div className="flex-1">
              {prev ? (
                <Link
                  href={`/build-uis-that-dont-suck/${prev.slug}`}
                  className="group inline-flex items-start gap-3 text-left"
                >
                  <div className="flex-none pt-1">
                    <svg className="w-5 h-5 dark:text-oatmeal-stone text-gray-600 dark:group-hover:text-oatmeal-white group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs dark:text-oatmeal-stone text-gray-500 uppercase tracking-wider">Previous Lesson</div>
                    <div className="flex items-center gap-2 text-sm font-semibold dark:text-oatmeal-white text-gray-900 dark:group-hover:text-oatmeal-stone group-hover:text-gray-600 transition-colors">
                      <LessonIcon name={prev.icon} className="w-4 h-4" />
                      {prev.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="text-sm dark:text-oatmeal-stone/50 text-gray-400">No previous lesson</div>
              )}
            </div>

            <div className="flex-1 text-right">
              {next ? (
                <Link
                  href={`/build-uis-that-dont-suck/${next.slug}`}
                  className="group inline-flex items-start gap-3 text-right"
                >
                  <div>
                    <div className="text-xs dark:text-oatmeal-stone text-gray-500 uppercase tracking-wider">Next Lesson</div>
                    <div className="flex items-center gap-2 justify-end text-sm font-semibold dark:text-oatmeal-white text-gray-900 dark:group-hover:text-oatmeal-stone group-hover:text-gray-600 transition-colors">
                      {next.title}
                      <LessonIcon name={next.icon} className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-none pt-1">
                    <svg className="w-5 h-5 dark:text-oatmeal-stone text-gray-600 dark:group-hover:text-oatmeal-white group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="text-sm dark:text-oatmeal-stone/50 text-gray-400">No next lesson</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
