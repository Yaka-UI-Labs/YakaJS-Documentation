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
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
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
    <div className="rounded-xl border border-oatmeal-olive bg-oatmeal-card p-6 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-oatmeal-white">{title}</h3>
        <p className="text-sm text-oatmeal-stone">{description}</p>
      </div>

      {/* Code Editor */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-oatmeal-stone uppercase tracking-wider">
            Your Code
          </label>
          <div className="flex gap-2">
            {hint && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-oatmeal-stone hover:text-oatmeal-white transition-colors"
              >
                {showHint ? '👁️ Hide Hint' : '💡 Show Hint'}
              </button>
            )}
            <button
              onClick={resetCode}
              className="text-xs text-oatmeal-stone hover:text-oatmeal-white transition-colors"
            >
              🔄 Reset
            </button>
          </div>
        </div>
        
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-48 px-4 py-3 rounded-lg bg-oatmeal-black border border-oatmeal-olive text-oatmeal-white font-mono text-sm focus:outline-none focus:border-oatmeal-stone resize-none"
          spellCheck={false}
        />

        {/* Hint */}
        <AnimatePresence>
          {showHint && hint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg bg-oatmeal-olive/50 border border-oatmeal-olive p-3"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">💡</span>
                <p className="text-sm text-oatmeal-stone">{hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Run Button */}
      <button
        onClick={runCode}
        disabled={isRunning || !code.trim()}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all ${
          isRunning
            ? 'bg-oatmeal-olive text-oatmeal-stone cursor-wait'
            : !code.trim()
            ? 'bg-oatmeal-olive/50 text-oatmeal-stone/50 cursor-not-allowed'
            : 'bg-oatmeal-white text-oatmeal-black hover:bg-oatmeal-stone'
        }`}
      >
        {isRunning ? '⚡ Running...' : '▶️ Run Code'}
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
              <label className="text-xs font-medium text-oatmeal-stone uppercase tracking-wider">
                {error ? '❌ Error' : isSuccess ? '✅ Output (Success!)' : '📄 Output'}
              </label>
              {isSuccess && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400 text-sm font-semibold"
                >
                  🎉 Perfect!
                </motion.span>
              )}
            </div>
            
            <div className={`rounded-lg p-4 font-mono text-sm ${
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
