"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CodePlayground } from "./code-playground";

interface LessonStep {
  title: string;
  content: string;
  codeExample?: {
    initialCode: string;
    expectedOutput?: string;
    hint?: string;
  };
  keyPoints?: string[];
}

interface InteractiveLessonProps {
  title: string;
  description: string;
  steps: LessonStep[];
  difficulty: "beginner" | "intermediate" | "advanced";
}

export function InteractiveLesson({
  title,
  description,
  steps,
  difficulty,
}: InteractiveLessonProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const markStepComplete = (stepIndex: number) => {
    setCompletedSteps((prev) => new Set([...prev, stepIndex]));
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const nextStep = () => {
    markStepComplete(currentStep);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((completedSteps.size / steps.length) * 100).toFixed(0);
  const difficultyColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h2 className="text-3xl font-bold text-oatmeal-white">{title}</h2>
            <p className="text-oatmeal-stone">{description}</p>
          </div>
          <div className={`px-3 py-1 rounded-full border text-xs font-semibold ${difficultyColors[difficulty]}`}>
            {difficulty.toUpperCase()}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-oatmeal-stone">Progress</span>
            <span className="text-oatmeal-white font-semibold">{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-oatmeal-olive overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-oatmeal-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Step Navigator */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                index === currentStep
                  ? 'bg-oatmeal-white text-oatmeal-black shadow-lg'
                  : completedSteps.has(index)
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-oatmeal-olive text-oatmeal-stone hover:bg-oatmeal-olive/70'
              }`}
            >
              <div className="flex items-center gap-2">
                {completedSteps.has(index) && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <span>Step {index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-6"
        >
          {/* Step Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-oatmeal-white to-oatmeal-stone text-oatmeal-black font-bold text-lg shadow-lg">
                {currentStep + 1}
              </span>
              <h3 className="text-2xl font-semibold text-oatmeal-white">
                {steps[currentStep].title}
              </h3>
            </div>
          </div>

          {/* Step Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-oatmeal-stone leading-relaxed whitespace-pre-wrap text-base">
              {steps[currentStep].content}
            </div>
          </div>

          {/* Key Points */}
          {steps[currentStep].keyPoints && (
            <div className="rounded-xl border border-oatmeal-olive bg-gradient-to-br from-oatmeal-olive/30 to-oatmeal-card p-5 space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-oatmeal-white font-semibold">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <span>Key Points</span>
              </div>
              <ul className="space-y-2">
                {steps[currentStep].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-oatmeal-stone">
                    <svg className="w-5 h-5 text-oatmeal-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Playground */}
          {steps[currentStep].codeExample && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-oatmeal-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <h4 className="text-lg font-semibold text-oatmeal-white">
                  Try It Yourself
                </h4>
              </div>
              <CodePlayground
                title="Practice Exercise"
                description="Modify the code below and run it to see the results."
                initialCode={steps[currentStep].codeExample!.initialCode}
                expectedOutput={steps[currentStep].codeExample!.expectedOutput}
                hint={steps[currentStep].codeExample!.hint}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-oatmeal-olive">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 0
                  ? 'bg-oatmeal-olive/50 text-oatmeal-stone/50 cursor-not-allowed'
                  : 'bg-oatmeal-olive text-oatmeal-white hover:bg-oatmeal-stone hover:shadow-lg'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="text-sm text-oatmeal-stone font-medium">
              Step {currentStep + 1} of {steps.length}
            </div>

            <button
              onClick={nextStep}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                  : 'bg-oatmeal-white text-oatmeal-black hover:bg-oatmeal-stone hover:shadow-lg'
              }`}
            >
              {currentStep === steps.length - 1 ? (
                <>
                  Complete
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                <>
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
