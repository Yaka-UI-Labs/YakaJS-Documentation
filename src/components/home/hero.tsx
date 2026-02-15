"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import GridContainer from "../grid-container";
import { SearchButton } from "../search";
import cover from "./cover.png";
import { Editor } from "./editor";
import LinkButton from "./link-button";

const SYMBOL = { color: "var(--color-slate-400)" };
const ELEMENT = { color: "var(--color-pink-400)" };
const KEYWORD = { color: "var(--color-slate-300)" };
const STRING = { color: "var(--color-sky-300)" };
const FUNCTION = { color: "var(--color-amber-300)" };
const COMMENT = { color: "var(--color-slate-500)" };

const Hero: React.FC = () => {
  let [step, setStep] = useState(0);
  let [isTyping, setIsTyping] = useState(false);

  // Very small screens should never try to drag the editor into a wider view.
  let showResponsiveDemo = "window" in globalThis ? window.matchMedia("(min-width: 40rem)").matches : false;

  // We can not rely on starting animations when elements go into view on these
  // screens since the code might overflow and not be visible.
  let shouldAutostartTypingAnimations =
    "window" in globalThis ? window.matchMedia("(min-width: 48rem)").matches : false;

  function nextStep() {
    setStep((step) => step + 1);
    setIsTyping(false);
    setTimeout(() => setIsTyping(true), TRANSITION.duration * 1000);
  }

  useEffect(() => {
    function start() {
      setIsTyping(true);
    }
    let timeout = setTimeout(start, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Widen or shrink screen
  useEffect(() => {
    if ((step !== 7 && step !== 11 && step !== 12) || !showResponsiveDemo) return;
    let timeout = setTimeout(() => setStep(step + 1), step === 11 ? 1200 : 800);
    return () => clearTimeout(timeout);
  });

  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
      >
        <span className="hidden max-sm:inline">text-4xl </span>
        <span className="hidden sm:max-md:inline">text-5xl </span>
        <span className="hidden lg:max-xl:inline">text-6xl </span>
        <span className="hidden xl:inline">text-8xl </span>
        <span className="inline dark:hidden">text-gray-950 </span>
        <span className="hidden dark:inline">text-white </span>tracking-tighter{" "}
        <span className="max-sm:hidden">text-balance</span>
      </div>
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Next-Gen JavaScript Library - More powerful than jQuery, simpler to write.
        </h1>
      </GridContainer>
      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-lg <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> font-medium
      </div>
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          A powerful JavaScript library with intuitive syntax like{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">@('#id')</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.addClass()</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.on('click')</span> and{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.animate()</span> that makes
          DOM manipulation and event handling simple and elegant.
        </p>
      </GridContainer>
      <GridContainer className="mt-10 px-4 sm:hidden">
        <LinkButton href="docs/yakajs-getting-started" className="z-1 w-full text-center">
          Get started
        </LinkButton>
      </GridContainer>
      <GridContainer className="mt-4 sm:mt-10 sm:px-2">
        <div className="flex gap-4 max-sm:px-4">
          <LinkButton href="docs/yakajs-getting-started" className="z-1 max-sm:hidden">
            Get started
          </LinkButton>
          <SearchButton className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            Quick search
            <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
              <span className="opacity-60">⌘</span>K
            </kbd>
            <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              <span className="opacity-60">Ctrl</span>&nbsp;K
            </kbd>
          </SearchButton>
        </div>
      </GridContainer>
      <GridContainer className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-gray-950/5 p-2 lg:col-span-2 lg:-mx-px dark:bg-white/10">
            <Editor>
              <div
                className={clsx(
                  "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5!",
                  "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
                  "*:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5",
                )}
              >
                <pre tabIndex={0}>
                  <code>
                    <code>
                      <span className="line">
                        <span style={COMMENT}>// Interactive counter with YakaJS</span>
                      </span>
                      <span className="line">
                        <span style={KEYWORD}>let</span>
                        <span style={SYMBOL}> </span>
                        <span style={{ color: "var(--color-slate-50)" }}>count</span>
                        <span style={SYMBOL}> = </span>
                        <span style={{ color: "var(--color-amber-300)" }}>0</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>&nbsp;</span>
                      </span>
                      <span className="line">
                        <span style={FUNCTION}>_</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>'&lt;button&gt;'</span>
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"  "}.</span>
                        <span style={FUNCTION}>text</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>'Click Me!'</span>
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"  "}.</span>
                        <span style={FUNCTION}>on</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>
                          'click'
                          <TypeWord
                            isTyping={isTyping}
                            word=", () => {"
                            step={0}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={{ color: "var(--color-slate-50)" }}>count</span>
                        <span style={SYMBOL}>++</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="_('#counter')"
                          step={1}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                      </span>
                      <span className="line">
                        <span>{"      "}.</span>
                        <span style={FUNCTION}>text</span>
                        <span style={SYMBOL}>(</span>
                        <TypeWord
                          isTyping={isTyping}
                          word={"`Clicked ${count} times`"}
                          step={2}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"      "}.</span>
                        <span style={FUNCTION}>fadeOut</span>
                        <span style={SYMBOL}>(</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="100"
                          step={3}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"      "}.</span>
                        <span style={FUNCTION}>fadeIn</span>
                        <span style={SYMBOL}>(</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="200"
                          step={4}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>)</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>&nbsp;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="if (count === 5) {"
                          step={5}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="_('#message')"
                          step={6}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                      </span>
                      <span className="line">
                        <span>{"        "}.</span>
                        <span style={FUNCTION}>html</span>
                        <span style={SYMBOL}>(</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="'🎉 Five clicks!'"
                          step={7}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"        "}.</span>
                        <span style={FUNCTION}>slideDown</span>
                        <span style={SYMBOL}>(</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="300"
                          step={8}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>)</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <TypeWord
                          isTyping={isTyping}
                          word="}"
                          step={9}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>{"}"}</span>
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"  "}.</span>
                        <span style={FUNCTION}>appendTo</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>'body'</span>
                        <span style={SYMBOL}>);</span>
                      </span>
                    </code>
                  </code>
                </pre>
              </div>
            </Editor>
          </div>
          <div className="relative border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10">
            <div className="absolute right-1/2 max-lg:bottom-8 max-md:translate-x-1/2 md:right-16 lg:top-1/2 lg:-translate-y-1/2 2xl:right-1/2 2xl:translate-x-[calc(50%-3rem)]">
              <Example step={step} />
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};

export default Hero;

const TRANSITION = { duration: 0.35 };

function Example({ step }: { step: number }) {
  const [clickCount, setClickCount] = React.useState(0);
  const [showCounter, setShowCounter] = React.useState(false);
  const [showCelebration, setShowCelebration] = React.useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Show counter after first click
    if (!showCounter) {
      setShowCounter(true);
    }
    
    // Show celebration at 5 clicks
    if (newCount === 5 && !showCelebration) {
      setShowCelebration(true);
    }
  };
  
  return (
    <motion.div
      layout={true}
      transition={TRANSITION}
      className="@container isolate flex flex-col gap-3 overflow-hidden bg-oatmeal-card p-3 border border-oatmeal-olive/30 w-[340px] shadow-xl dark:bg-oatmeal-card dark:border-oatmeal-olive/20"
    >
      <motion.div
        className="relative flex w-full flex-col gap-4 bg-oatmeal-black p-6 after:pointer-events-none after:absolute after:inset-0 after:border after:border-oatmeal-olive/20 dark:bg-oatmeal-black dark:after:border-oatmeal-olive/10"
        layout={true}
        transition={TRANSITION}
      >
        <motion.button
          layout="position"
          transition={TRANSITION}
          onClick={handleClick}
          className="inline-block bg-oatmeal-white px-8 py-4 text-sm/6 font-semibold text-oatmeal-black hover:bg-oatmeal-stone transition-colors cursor-pointer dark:bg-oatmeal-white dark:hover:bg-oatmeal-stone dark:text-oatmeal-black"
        >
          Click Me!
        </motion.button>
        
        {showCounter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={TRANSITION}
            layout="position"
            className="text-center"
          >
            <motion.div
              key={clickCount}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={TRANSITION}
              className="bg-oatmeal-card p-5 border border-oatmeal-olive/30 dark:bg-oatmeal-card dark:border-oatmeal-olive/20"
              id="counter"
            >
              <div className="text-xs/6 font-semibold uppercase tracking-widest text-oatmeal-stone dark:text-oatmeal-stone">
                Counter
              </div>
              <div className="mt-2 text-4xl font-bold text-white dark:text-white">
                {clickCount}
              </div>
              <div className="mt-1 text-sm/6 font-medium text-oatmeal-stone dark:text-oatmeal-stone">
                {clickCount === 1 ? 'click' : 'clicks'}
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {showCelebration && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={TRANSITION}
            layout="position"
            className="overflow-hidden"
          >
            <div 
              className="bg-oatmeal-card p-6 text-center border border-oatmeal-olive/30 dark:bg-oatmeal-card dark:border-oatmeal-olive/20" 
              id="message"
            >
              <div className="text-4xl mb-3 animate-bounce">🎉</div>
              <div className="text-xl/7 font-semibold text-white dark:text-white">
                Five clicks!
              </div>
              <div className="mt-2 text-sm/6 font-medium text-oatmeal-stone dark:text-oatmeal-stone">
                You're doing great!
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

function TypeWord({
  word,
  step,
  currentStep,
  isTyping,
  onNextStep,
  autostart,
}: {
  word: string;
  step: number;
  currentStep: number;
  isTyping: boolean;
  onNextStep: () => void;
  autostart: boolean;
}) {
  if (currentStep < step) return null;

  let cursor =
    (step === currentStep && isTyping) || (step + 1 === currentStep && !isTyping) ? (
      <span className="after:animate-typing after:absolute after:mt-1.5 after:inline-block after:h-[1.2em] after:w-px after:border-r-2 after:border-sky-400 after:bg-transparent after:content-['']" />
    ) : null;

  if (!isTyping && currentStep === step) return cursor;

  return (
    <>
      <motion.span
        initial="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.075, delayChildren: 1.4 } } }}
        onAnimationComplete={onNextStep}
        {...(autostart ? { whileInView: "visible", viewport: { once: true } } : { animate: "visible" })}
      >
        {word.split("").map((letter, i) => {
          let letterColor = undefined;
          
          // Determine color based on context
          if (word.startsWith("@(")) {
            // @('#selector') pattern
            if (letter === "@") letterColor = FUNCTION.color;
            else if (letter === "(" || letter === ")") letterColor = SYMBOL.color;
            else if (letter === "'" || letter === '"') letterColor = STRING.color;
            else if (i > 0 && (word[i-1] === "'" || word[i-1] === '"')) letterColor = STRING.color;
            else if (i > 0 && i < word.length - 1 && word.indexOf("'") !== -1 && word.lastIndexOf("'") !== -1) {
              if (i > word.indexOf("'") && i < word.lastIndexOf("'")) letterColor = STRING.color;
            }
          } else if (word.match(/^`.*`$/)) {
            // Template literal
            if (letter === "`") letterColor = STRING.color;
            else if (letter === "$" || letter === "{" || letter === "}") letterColor = SYMBOL.color;
            else letterColor = STRING.color;
          } else if (word.match(/^['"].*['"]$/)) {
            // Regular string
            letterColor = STRING.color;
          } else if (word.match(/^\d+$/)) {
            // Number
            letterColor = "var(--color-amber-300)";
          } else if (word.startsWith(", () => {")) {
            // Arrow function
            if (letter === "," || letter === "(" || letter === ")" || letter === "{" || letter === "}" || letter === "=") {
              letterColor = SYMBOL.color;
            } else if (letter === ">") {
              letterColor = SYMBOL.color;
            }
          } else if (word === "if (count === 5) {" || word === "}") {
            // Keyword or brace
            if (word.startsWith("if ")) {
              if (i < 2) letterColor = KEYWORD.color;
              else if (letter === "(" || letter === ")" || letter === "{" || letter === "=" ) letterColor = SYMBOL.color;
            } else if (letter === "{" || letter === "}") {
              letterColor = SYMBOL.color;
            }
          }
          
          return (
            <motion.span
              key={i}
              variants={{
                hidden: { display: "none" },
                visible: { display: "inline" },
              }}
              style={{ color: letterColor }}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.span>
      {cursor}
    </>
  );
}
