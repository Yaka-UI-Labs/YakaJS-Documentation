import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";
import Link from "next/link";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "YakaJS Course - Zero to Hero",
  description: "A comprehensive interactive course covering YakaJS from fundamentals to advanced techniques. Learn modern web development with state management, routing, voice commands, and more.",
  openGraph: {
    type: "website",
    title: "YakaJS Course - Zero to Hero",
    description: "Master YakaJS with our comprehensive interactive course - from basics to advanced features.",
    images: card.src,
    url: "https://yakajs.org/build-uis-that-dont-suck",
  },
};

const modules = [
  {
    number: 1,
    title: "Foundation",
    subtitle: "Master the Basics",
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
    lessons: [
      { title: "Project 1: Task Manager with State", duration: "30 min", link: "/docs/yakajs-getting-started#example" },
      { title: "Project 2: Shopping Cart with AJAX", duration: "35 min", link: "/docs/yakajs-state-management#shopping-cart" },
      { title: "Project 3: Voice-Controlled Media Player", duration: "40 min", link: "/docs/yakajs-voice-commands#media-player" },
      { title: "Project 4: Secure Authentication Flow", duration: "45 min", link: "/docs/security#secure-form" },
    ],
  },
];

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <header>
        <HeroSection />
      </header>
      <main className="pt-14 pb-28">
        <GridContainer>
          <div className="max-w-4xl space-y-8 text-base/7 text-gray-400 marker:text-white/60 **:[li]:pl-2 **:[strong]:font-medium **:[strong]:text-white **:[ul]:list-[square] **:[ul]:space-y-4 **:[ul]:pl-8">
            <p>
              Master <strong>YakaJS from zero to hero</strong> with this comprehensive interactive course. Learn everything from basic DOM manipulation to advanced features like <strong>reactive state management</strong>, <strong>voice commands</strong>, and <strong>security best practices</strong>.
            </p>
            <ul>
              <li>
                <strong>12 comprehensive modules</strong> covering every aspect of YakaJS
              </li>
              <li>
                <strong>48+ hands-on lessons</strong> with interactive code examples
              </li>
              <li>
                Build <strong>4 complete real-world projects</strong> from scratch
              </li>
              <li>
                Learn <strong>unique features</strong> like voice commands and reactive signals
              </li>
              <li>
                Master <strong>security, performance, and best practices</strong>
              </li>
              <li>
                <strong>Free forever</strong> - all lessons and examples included
              </li>
            </ul>
            <p>
              Whether you're new to JavaScript or migrating from jQuery, this course provides a <strong>structured path</strong> to becoming proficient with YakaJS. Each module builds on the previous one, with practical examples and real-world projects throughout.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Course Modules</h2>
            
            {modules.map((module) => (
              <div key={module.number} className="border-l-2 border-gray-700 pl-6 space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="flex-none rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300">
                    Module {module.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{module.title}</h3>
                    <p className="text-sm text-gray-400">{module.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 pl-2">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx} className="group">
                      <Link 
                        href={lesson.link}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex-none text-xs text-gray-500 font-mono">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                          <svg 
                            className="w-5 h-5 text-gray-600 group-hover:text-gray-300 transition-colors" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-6 rounded-2xl border border-gray-700 bg-gray-800/30 p-8">
            <h3 className="text-2xl font-semibold text-white">What You'll Build</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-blue-500/20 p-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Task Manager</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Build a complete task management app with state management, local storage, and real-time updates.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-green-500/20 p-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Shopping Cart</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Create an e-commerce cart with AJAX requests, item management, and checkout flow.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-purple-500/20 p-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Voice Media Player</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Build a media player controlled entirely with voice commands for hands-free operation.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-none rounded-lg bg-red-500/20 p-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Secure Auth System</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Implement a secure authentication system with CSRF protection, input validation, and password security.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-semibold text-white">Start Learning Today</h3>
            <p className="text-gray-400 max-w-2xl">
              Jump right in and start with <strong className="text-white">Module 1: Foundation</strong>, or explore any topic that interests you. All lessons are free and available immediately. No sign-up required to access the documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/docs/yakajs-getting-started"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 hover:bg-gray-100 transition-colors"
              >
                Start with Module 1
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/docs/yakajs-api-reference"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800/50 transition-colors"
              >
                View API Reference
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-gray-700 bg-gray-800/20 p-6">
            <p className="text-sm text-gray-400">
              Want to stay updated? Subscribe to get notified when new modules and features are added:
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
