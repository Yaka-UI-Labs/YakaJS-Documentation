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
              className="h-full bg-oatmeal-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
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
                  ? 'bg-oatmeal-white text-oatmeal-black'
                  : completedSteps.has(index)
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-oatmeal-olive text-oatmeal-stone hover:bg-oatmeal-olive/70'
              }`}
            >
              <div className="flex items-center gap-2">
                {completedSteps.has(index) && <span>✓</span>}
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Step Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-oatmeal-white text-oatmeal-black font-bold text-sm">
                {currentStep + 1}
              </span>
              <h3 className="text-2xl font-semibold text-oatmeal-white">
                {steps[currentStep].title}
              </h3>
            </div>
          </div>

          {/* Step Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-oatmeal-stone leading-relaxed whitespace-pre-wrap">
              {steps[currentStep].content}
            </div>
          </div>

          {/* Key Points */}
          {steps[currentStep].keyPoints && (
            <div className="rounded-lg border border-oatmeal-olive bg-oatmeal-olive/30 p-4 space-y-2">
              <div className="flex items-center gap-2 text-oatmeal-white font-semibold">
                <span>🎯</span>
                <span>Key Points</span>
              </div>
              <ul className="space-y-2">
                {steps[currentStep].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-oatmeal-stone">
                    <span className="text-oatmeal-white mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Playground */}
          {steps[currentStep].codeExample && (
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-oatmeal-white flex items-center gap-2">
                <span>👨‍💻</span>
                <span>Try It Yourself</span>
              </h4>
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
          <div className="flex items-center justify-between pt-4 border-t border-oatmeal-olive">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 0
                  ? 'bg-oatmeal-olive/50 text-oatmeal-stone/50 cursor-not-allowed'
                  : 'bg-oatmeal-olive text-oatmeal-white hover:bg-oatmeal-stone'
              }`}
            >
              ← Previous
            </button>

            <div className="text-sm text-oatmeal-stone">
              Step {currentStep + 1} of {steps.length}
            </div>

            <button
              onClick={nextStep}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                  : 'bg-oatmeal-white text-oatmeal-black hover:bg-oatmeal-stone'
              }`}
            >
              {currentStep === steps.length - 1 ? '✓ Complete Lesson' : 'Next →'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
