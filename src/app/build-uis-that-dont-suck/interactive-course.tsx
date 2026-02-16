"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

interface Lesson {
  title: string;
  duration: string;
  link: string;
}

interface Module {
  number: number;
  title: string;
  subtitle: string;
  lessons: Lesson[];
  color: string;
}

const modules: Module[] = [
  {
    number: 1,
    title: "Foundation",
    subtitle: "Master the Basics",
    color: "blue",
    lessons: [
      { title: "Getting Started with YakaJS", duration: "10 min", link: "/docs/yakajs-getting-started" },
      { title: "Selectors & DOM Manipulation", duration: "15 min", link: "/docs/selectors" },
      { title: "Working with Text & HTML Content", duration: "12 min", link: "/docs/text-content" },
      { title: "DOM Manipulation Deep Dive", duration: "20 min", link: "/docs/dom-manipulation" },
    ],
  },
  {
    number: 2,
    title: "Interactivity",
    subtitle: "Events & User Input",
    color: "green",
    lessons: [
      { title: "Event Handling Fundamentals", duration: "15 min", link: "/docs/events" },
      { title: "Forms & Validation", duration: "18 min", link: "/docs/forms" },
      { title: "Real-time Form Feedback", duration: "12 min", link: "/docs/forms#real-time-validation" },
      { title: "Custom Validators & Patterns", duration: "15 min", link: "/docs/forms#custom-validators" },
    ],
  },
  {
    number: 3,
    title: "AJAX & APIs",
    subtitle: "Connect to the Backend",
    color: "purple",
    lessons: [
      { title: "AJAX Requests & HTTP Methods", duration: "16 min", link: "/docs/ajax" },
      { title: "Error Handling & Loading States", duration: "14 min", link: "/docs/ajax#error-handling" },
      { title: "File Uploads with Progress", duration: "18 min", link: "/docs/ajax#file-upload" },
      { title: "Advanced Patterns: Retry & Caching", duration: "20 min", link: "/docs/ajax#advanced-patterns" },
    ],
  },
  {
    number: 4,
    title: "Animations & Effects",
    subtitle: "Bring Your UI to Life",
    color: "pink",
    lessons: [
      { title: "Fade & Slide Animations", duration: "12 min", link: "/docs/yakajs-animations" },
      { title: "Fun Effects: Bounce, Shake, Pulse", duration: "15 min", link: "/docs/yakajs-animations#fun-effects" },
      { title: "3D Animations & Transforms", duration: "18 min", link: "/docs/yakajs-animations#3d-animations" },
      { title: "Animation Performance Tips", duration: "14 min", link: "/docs/yakajs-animations#performance" },
    ],
  },
  {
    number: 5,
    title: "State Management",
    subtitle: "Reactive Data & Signals",
    color: "yellow",
    lessons: [
      { title: "Store Pattern Fundamentals", duration: "16 min", link: "/docs/yakajs-state-management" },
      { title: "Signals & Computed Values", duration: "18 min", link: "/docs/yakajs-state-management#signals" },
      { title: "Effects & Subscriptions", duration: "15 min", link: "/docs/yakajs-state-management#effects" },
      { title: "Time Travel & Undo/Redo", duration: "20 min", link: "/docs/yakajs-state-management#time-travel" },
    ],
  },
  {
    number: 6,
    title: "Routing & Navigation",
    subtitle: "Build Single Page Apps",
    color: "indigo",
    lessons: [
      { title: "Router Setup & Basic Routes", duration: "14 min", link: "/docs/routing" },
      { title: "Dynamic Parameters & Query Strings", duration: "16 min", link: "/docs/routing#parameters" },
      { title: "Route Guards & Authentication", duration: "20 min", link: "/docs/routing#guards" },
      { title: "Nested Routes & Transitions", duration: "18 min", link: "/docs/routing#nested-routes" },
    ],
  },
  {
    number: 7,
    title: "Voice Commands",
    subtitle: "Hands-free Interaction",
    color: "red",
    lessons: [
      { title: "Voice Command Basics", duration: "12 min", link: "/docs/yakajs-voice-commands" },
      { title: "Pattern Matching & Language Support", duration: "15 min", link: "/docs/yakajs-voice-commands#patterns" },
      { title: "Real-world Examples: Navigation & Forms", duration: "18 min", link: "/docs/yakajs-voice-commands#examples" },
      { title: "Voice UX Best Practices", duration: "14 min", link: "/docs/yakajs-voice-commands#ux" },
    ],
  },
  {
    number: 8,
    title: "UI Components",
    subtitle: "Pre-built Interactive Elements",
    color: "teal",
    lessons: [
      { title: "Modals, Dropdowns & Tooltips", duration: "16 min", link: "/docs/components" },
      { title: "Tabs, Accordion & Carousel", duration: "18 min", link: "/docs/components#tabs" },
      { title: "Notifications & Progress Indicators", duration: "14 min", link: "/docs/components#notifications" },
      { title: "Context Menus & Popovers", duration: "15 min", link: "/docs/components#context-menu" },
    ],
  },
  {
    number: 9,
    title: "Security",
    subtitle: "Protect Your Users",
    color: "orange",
    lessons: [
      { title: "XSS Protection & Sanitization", duration: "18 min", link: "/docs/security" },
      { title: "CSRF Tokens & Safe Forms", duration: "16 min", link: "/docs/security#csrf" },
      { title: "Input Validation & Password Strength", duration: "15 min", link: "/docs/security#validation" },
      { title: "Security Best Practices Checklist", duration: "20 min", link: "/docs/security#best-practices" },
    ],
  },
  {
    number: 10,
    title: "Performance",
    subtitle: "Build Fast, Stay Fast",
    color: "cyan",
    lessons: [
      { title: "Selector Caching & Optimization", duration: "14 min", link: "/docs/performance" },
      { title: "Debouncing, Throttling & Event Delegation", duration: "16 min", link: "/docs/performance#debounce" },
      { title: "Virtual Scrolling & Lazy Loading", duration: "20 min", link: "/docs/performance#virtual-scroll" },
      { title: "Memory Management & Request Batching", duration: "18 min", link: "/docs/performance#memory" },
    ],
  },
  {
    number: 11,
    title: "Utilities",
    subtitle: "Helper Functions & Tools",
    color: "lime",
    lessons: [
      { title: "Array & Object Utilities", duration: "14 min", link: "/docs/utilities" },
      { title: "String & Number Helpers", duration: "12 min", link: "/docs/utilities#string" },
      { title: "URL Utilities & Type Checking", duration: "15 min", link: "/docs/utilities#url" },
      { title: "Safe Mode & Best Practices", duration: "16 min", link: "/docs/utilities#safe-mode" },
    ],
  },
  {
    number: 12,
    title: "Real-World Projects",
    subtitle: "Build Complete Applications",
    color: "rose",
    lessons: [
      { title: "Project 1: Task Manager with State", duration: "30 min", link: "/docs/yakajs-getting-started#example" },
      { title: "Project 2: Shopping Cart with AJAX", duration: "35 min", link: "/docs/yakajs-state-management#shopping-cart" },
      { title: "Project 3: Voice-Controlled Media Player", duration: "40 min", link: "/docs/yakajs-voice-commands#media-player" },
      { title: "Project 4: Secure Authentication Flow", duration: "45 min", link: "/docs/security#secure-form" },
    ],
  },
];

const colorClasses = {
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  red: "bg-red-500/20 text-red-400 border-red-500/30",
  teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  lime: "bg-lime-500/20 text-lime-400 border-lime-500/30",
  rose: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

export function InteractiveCourse() {
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([1]));
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [hoveredLesson, setHoveredLesson] = useState<string | null>(null);

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem("yakajs-course-progress");
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)));
    }
  }, []);

  const toggleModule = (moduleNumber: number) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleNumber)) {
        next.delete(moduleNumber);
      } else {
        next.add(moduleNumber);
      }
      return next;
    });
  };

  const toggleLessonComplete = (link: string) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(link)) {
        next.delete(link);
      } else {
        next.add(link);
      }
      localStorage.setItem("yakajs-course-progress", JSON.stringify([...next]));
      return next;
    });
  };

  const getModuleProgress = (module: Module) => {
    const completed = module.lessons.filter((l) => completedLessons.has(l.link)).length;
    return Math.round((completed / module.lessons.length) * 100);
  };

  const totalProgress = Math.round(
    (completedLessons.size / modules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overall Progress */}
      <div className="rounded-2xl border border-gray-700 bg-gray-800/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Your Progress</h3>
            <p className="text-sm text-gray-400">
              {completedLessons.size} of {modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons completed
            </p>
          </div>
          <div className="text-3xl font-bold text-white">{totalProgress}%</div>
        </div>
        <div className="relative h-3 rounded-full bg-gray-700 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((module, idx) => {
          const isExpanded = expandedModules.has(module.number);
          const progress = getModuleProgress(module);
          const colorClass = colorClasses[module.color as keyof typeof colorClasses];

          return (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-gray-700 bg-gray-800/20 overflow-hidden hover:border-gray-600 transition-colors"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.number)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`flex-none rounded-lg p-3 border ${colorClass}`}>
                    <span className="text-lg font-bold">{String(module.number).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <p className="text-sm text-gray-400">{module.subtitle}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1 max-w-xs h-1.5 rounded-full bg-gray-700 overflow-hidden">
                        <motion.div
                          className={`h-full ${colorClass.split(" ")[0]}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{progress}%</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-none"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Lessons */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-4 space-y-2">
                      {module.lessons.map((lesson, lessonIdx) => {
                        const isCompleted = completedLessons.has(lesson.link);
                        const isHovered = hoveredLesson === lesson.link;

                        return (
                          <motion.div
                            key={lessonIdx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: lessonIdx * 0.05 }}
                            onMouseEnter={() => setHoveredLesson(lesson.link)}
                            onMouseLeave={() => setHoveredLesson(null)}
                            className="group"
                          >
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleLessonComplete(lesson.link);
                                }}
                                className="flex-none"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    isCompleted
                                      ? "bg-green-500 border-green-500"
                                      : "border-gray-600 hover:border-gray-400"
                                  }`}
                                >
                                  {isCompleted && (
                                    <motion.svg
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-4 h-4 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                  )}
                                </motion.div>
                              </button>
                              <span className="flex-none text-xs text-gray-500 font-mono">
                                {String(lessonIdx + 1).padStart(2, "0")}
                              </span>
                              <Link href={lesson.link} className="flex-1 flex items-center justify-between group">
                                <span
                                  className={`transition-colors ${
                                    isCompleted ? "text-gray-500 line-through" : "text-gray-300 group-hover:text-white"
                                  }`}
                                >
                                  {lesson.title}
                                </span>
                                <div className="flex items-center gap-3">
                                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                                  <motion.svg
                                    animate={{ x: isHovered ? 5 : 0 }}
                                    className="w-5 h-5 text-gray-600 group-hover:text-gray-300 transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </motion.svg>
                                </div>
                              </Link>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
