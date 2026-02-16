"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CodePlaygroundProps {
  initialCode?: string;
  expectedOutput?: string;
  hint?: string;
  title: string;
  description: string;
}

export function CodePlayground({
  initialCode = "",
  expectedOutput = "",
  hint = "",
  title,
  description,
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setError("");
    setOutput("");
    setIsSuccess(false);

    try {
      // Create a sandboxed console
      const logs: string[] = [];
      const sandboxConsole = {
        log: (...args: any[]) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' && arg !== null ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        },
        error: (...args: any[]) => {
          logs.push('ERROR: ' + args.join(' '));
        },
        warn: (...args: any[]) => {
          logs.push('WARNING: ' + args.join(' '));
        }
      };

      // Create a safe execution environment
      const executeCode = new Function('console', `
        'use strict';
        ${code}
      `);

      executeCode(sandboxConsole);
      
      const result = logs.join('\n') || '(no output)';
      setOutput(result);

      // Check if output matches expected (if provided)
      if (expectedOutput && result.trim() === expectedOutput.trim()) {
        setIsSuccess(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setTimeout(() => setIsRunning(false), 300);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setError("");
    setIsSuccess(false);
    setShowHint(false);
  };

  return (
    <div className="rounded-xl border border-oatmeal-olive bg-gradient-to-br from-oatmeal-card to-oatmeal-black p-6 space-y-4 shadow-xl">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-oatmeal-white">{title}</h3>
        <p className="text-sm text-oatmeal-stone">{description}</p>
      </div>

      {/* Code Editor */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-oatmeal-stone uppercase tracking-wider flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            Your Code
          </label>
          <div className="flex gap-2">
            {hint && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1 text-xs text-oatmeal-stone hover:text-oatmeal-white transition-colors"
              >
                {showHint ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    Hide Hint
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    Show Hint
                  </>
                )}
              </button>
            )}
            <button
              onClick={resetCode}
              className="flex items-center gap-1 text-xs text-oatmeal-stone hover:text-oatmeal-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reset
            </button>
          </div>
        </div>
        
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-48 px-4 py-3 rounded-lg bg-oatmeal-black border border-oatmeal-olive text-oatmeal-white font-mono text-sm focus:outline-none focus:border-oatmeal-white focus:ring-2 focus:ring-oatmeal-white/20 resize-none transition-all"
          spellCheck={false}
        />

        {/* Hint */}
        <AnimatePresence>
          {showHint && hint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 p-3"
            >
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <p className="text-sm text-blue-300">{hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Run Button */}
      <button
        onClick={runCode}
        disabled={isRunning || !code.trim()}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
          isRunning
            ? 'bg-oatmeal-olive text-oatmeal-stone cursor-wait'
            : !code.trim()
            ? 'bg-oatmeal-olive/50 text-oatmeal-stone/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-oatmeal-white to-oatmeal-stone text-oatmeal-black hover:shadow-lg hover:scale-105'
        }`}
      >
        {isRunning ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Running...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            Run Code
          </>
        )}
      </button>

      {/* Output/Error Display */}
      <AnimatePresence mode="wait">
        {(output || error) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-oatmeal-stone uppercase tracking-wider flex items-center gap-2">
                {error ? (
                  <>
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    Error
                  </>
                ) : isSuccess ? (
                  <>
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Output (Success!)
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Output
                  </>
                )}
              </label>
              {isSuccess && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-green-400 text-sm font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  Perfect!
                </motion.span>
              )}
            </div>
            
            <div className={`rounded-lg p-4 font-mono text-sm shadow-inner ${
              error
                ? 'bg-red-900/20 border border-red-500/30 text-red-300'
                : isSuccess
                ? 'bg-green-900/20 border border-green-500/30 text-green-300'
                : 'bg-oatmeal-black border border-oatmeal-olive text-oatmeal-white'
            }`}>
              <pre className="whitespace-pre-wrap break-words">
                {error || output}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
