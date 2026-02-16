import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";
import { InteractiveCourse } from "./interactive-course";
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

          <div className="mt-16 space-y-8">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Interactive Course Modules</h2>
            <p className="text-gray-400 max-w-2xl">
              <strong className="text-white">Track your progress</strong> as you learn! Click modules to expand, check off completed lessons, and watch your overall progress grow.
            </p>
            
            <InteractiveCourse />
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
