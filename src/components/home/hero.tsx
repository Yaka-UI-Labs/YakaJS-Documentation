"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import GridContainer from "../grid-container";
import { SearchButton } from "../search";
import { Editor } from "./editor";
import LinkButton from "./link-button";

const SYMBOL = { color: "var(--color-slate-400)" };
const FUNCTION = { color: "#e78a4e" }; // YakaJS function/method calls
const KEYWORD = { color: "#d8a657" }; // JavaScript keywords
const STRING = { color: "#a9b665" }; // String literals
const NUMBER = { color: "#d3869b" }; // Numbers
const COMMENT = { color: "#665c54" }; // Comments

const Hero: React.FC = () => {
  let [step, setStep] = useState(0);
  let [isTyping, setIsTyping] = useState(false);

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
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">_('#id')</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.addClass()</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.on('click')</span> and{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.fadeIn()</span> that makes
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
                        <span style={COMMENT}>// Interactive counter with animations</span>
                      </span>
                      <span className="line">
                        <span style={KEYWORD}>let</span>
                        <span style={{ color: "var(--color-slate-50)" }}> count </span>
                        <span style={SYMBOL}>= </span>
                        <span style={NUMBER}>0</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line"></span>
                      <span className="line">
                        <span style={FUNCTION}>_</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>
                          '&lt;button&gt;
                          <TypeWord
                            isTyping={isTyping}
                            word="Click me!"
                            step={0}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          &lt;/button&gt;'
                        </span>
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          addClass
                          <TypeWord
                            isTyping={isTyping}
                            word="('btn')"
                            step={1}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          on
                          <TypeWord
                            isTyping={isTyping}
                            word="('click', () => {"
                            step={2}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={{ color: "var(--color-slate-50)" }}>
                          count
                          <TypeWord
                            isTyping={isTyping}
                            word="++"
                            step={3}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={FUNCTION}>
                          _
                          <TypeWord
                            isTyping={isTyping}
                            word="('#counter')"
                            step={4}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          text
                          <TypeWord
                            isTyping={isTyping}
                            word="(count)"
                            step={5}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          fadeOut
                          <TypeWord
                            isTyping={isTyping}
                            word="(200)"
                            step={6}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          fadeIn
                          <TypeWord
                            isTyping={isTyping}
                            word="(200)"
                            step={7}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={KEYWORD}>
                          if
                          <TypeWord
                            isTyping={isTyping}
                            word=" (count === 5)"
                            step={8}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}> {"{"}</span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={FUNCTION}>
                          _
                          <TypeWord
                            isTyping={isTyping}
                            word="('#message')"
                            step={9}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"        "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          text
                          <TypeWord
                            isTyping={isTyping}
                            word="('🎉 Amazing!')"
                            step={10}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"        "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          slideDown
                          <TypeWord
                            isTyping={isTyping}
                            word="()"
                            step={11}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>{"}"}</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>
                          {"}"}
                          <TypeWord
                            isTyping={isTyping}
                            word=")"
                            step={12}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>appendTo</span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>'#app'</span>
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
  const [clickCount, setClickCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleButtonClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setShowCounter(true);
    
    if (newCount === 5) {
      setShowCelebration(true);
    }
  };

  return (
    <motion.div
      layout={true}
      transition={TRANSITION}
      className={clsx(
        "@container rounded-3xl bg-black/5 p-2 outline outline-white/15 backdrop-blur-md dark:bg-white/10",
        "w-[340px] xl:ml-[3rem]",
      )}
    >
      <motion.div
        className="relative flex w-full flex-col items-center gap-6 rounded-2xl bg-white p-7 outline outline-black/5 dark:bg-gray-950"
        layout={true}
        transition={TRANSITION}
      >
        <motion.button
          onClick={handleButtonClick}
          layout="position"
          transition={TRANSITION}
          className="rounded-4xl bg-gradient-to-r from-yaka-accent to-yaka-accent-dark px-8 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Click me!
        </motion.button>

        {showCounter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            layout="position"
            transition={TRANSITION}
            className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 ring-1 ring-gray-950/10 dark:from-gray-900 dark:to-gray-800 dark:ring-white/10"
          >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Counter</span>
            <motion.span
              key={clickCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-yaka-accent dark:text-yaka-accent"
            >
              {clickCount}
            </motion.span>
          </motion.div>
        )}

        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            layout="position"
            transition={TRANSITION}
            className="rounded-xl bg-gradient-to-r from-yaka-accent/10 to-yaka-accent-dark/10 px-6 py-4 text-center ring-1 ring-yaka-accent/20 dark:ring-yaka-accent/30"
          >
            <span className="text-xl font-semibold text-yaka-accent dark:text-yaka-accent">
              🎉 Amazing!
            </span>
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

  // Determine coloring based on content
  const getCharColor = (char: string, index: number, fullWord: string) => {
    // For function names like addClass, on, fadeOut, etc.
    if (fullWord.startsWith("('") && index < 2) return SYMBOL.color; // opening ('
    if (fullWord.includes("'") && fullWord.includes(")")) {
      // Inside string parameters like ('btn') or ('click', () => {
      if (char === "(" || char === ")") return SYMBOL.color;
      if (char === "'") return STRING.color;
      if (fullWord.charAt(index - 1) === "'" || (index > 0 && fullWord.substring(0, index).includes("'") && !fullWord.substring(0, index).includes(")"))) {
        // Inside string
        return STRING.color;
      }
    }
    if (fullWord.startsWith("('#") || fullWord.startsWith("('&lt;") || fullWord.startsWith("('Click")) {
      // YakaJS selector or HTML string
      if (char === "(" || char === ")") return SYMBOL.color;
      return STRING.color;
    }
    if (fullWord === "++" || fullWord === "(count)") return undefined; // Use default/white
    if (fullWord.startsWith("(200)") || fullWord.startsWith("()")) return SYMBOL.color;
    if (fullWord.includes(" === ") || fullWord.startsWith(" (count")) {
      if (char === "(" || char === ")" || char === "=" || char === " ") return SYMBOL.color;
      return NUMBER.color;
    }
    if (fullWord.includes("'🎉")) {
      if (char === "(" || char === ")") return SYMBOL.color;
      return STRING.color;
    }
    if (char === ")") return SYMBOL.color;
    
    return undefined; // default color
  };

  return (
    <>
      <motion.span
        initial="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.075, delayChildren: 1.4 } } }}
        onAnimationComplete={onNextStep}
        {...(autostart ? { whileInView: "visible", viewport: { once: true } } : { animate: "visible" })}
      >
        {word.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { display: "none" },
              visible: { display: "inline" },
            }}
            style={{
              color: getCharColor(letter, i, word),
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      {cursor}
    </>
  );
}
