import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { GridContainer } from "../grid-container";
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
    <div className="dark relative px-4 py-8 sm:px-0 bg-oatmeal-black min-h-screen">
      <main className="pt-14 pb-28">
        <GridContainer>
          {/* Back to course link */}
          <div className="mb-8">
            <Link
              href="/build-uis-that-dont-suck"
              className="inline-flex items-center gap-2 text-oatmeal-stone hover:text-oatmeal-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Course
            </Link>
          </div>

          {/* Lesson badge */}
          <div className="mb-6 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-oatmeal-olive/30 text-oatmeal-white">
              <LessonIcon name={metadata.icon} className="w-10 h-10" />
            </div>
            <div>
              <div className="text-sm text-oatmeal-stone">Lesson {metadata.number}</div>
              <div className="text-xs text-oatmeal-stone/70">~{metadata.estimatedTime}</div>
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
          <div className="mt-16 flex items-center justify-between gap-4 pt-8 border-t border-oatmeal-olive">
            <div className="flex-1">
              {prev ? (
                <Link
                  href={`/build-uis-that-dont-suck/${prev.slug}`}
                  className="group inline-flex items-start gap-3 text-left"
                >
                  <div className="flex-none pt-1">
                    <svg className="w-5 h-5 text-oatmeal-stone group-hover:text-oatmeal-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-oatmeal-stone uppercase tracking-wider">Previous Lesson</div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-oatmeal-white group-hover:text-oatmeal-stone transition-colors">
                      <LessonIcon name={prev.icon} className="w-4 h-4" />
                      {prev.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="text-sm text-oatmeal-stone/50">No previous lesson</div>
              )}
            </div>

            <div className="flex-1 text-right">
              {next ? (
                <Link
                  href={`/build-uis-that-dont-suck/${next.slug}`}
                  className="group inline-flex items-start gap-3 text-right"
                >
                  <div>
                    <div className="text-xs text-oatmeal-stone uppercase tracking-wider">Next Lesson</div>
                    <div className="flex items-center gap-2 justify-end text-sm font-semibold text-oatmeal-white group-hover:text-oatmeal-stone transition-colors">
                      {next.title}
                      <LessonIcon name={next.icon} className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-none pt-1">
                    <svg className="w-5 h-5 text-oatmeal-stone group-hover:text-oatmeal-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="text-sm text-oatmeal-stone/50">No next lesson</div>
              )}
            </div>
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
