"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
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
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.on()</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.animate()</span> and{" "}
          <span className="font-mono text-[1.0625rem] text-yaka-accent dark:text-yaka-accent">.fadeIn()</span> that makes
          DOM manipulation, dynamic content, and animations effortless.
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
                        <span style={COMMENT}>// Dynamic card creation with animations</span>
                      </span>
                      <span className="line">
                        <span style={KEYWORD}>let</span>
                        <span style={{ color: "var(--color-slate-50)" }}> cardId </span>
                        <span style={SYMBOL}>= </span>
                        <span style={NUMBER}>
                          0
                          <TypeWord
                            isTyping={isTyping}
                            word=";"
                            step={0}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line"></span>
                      <span className="line">
                        <span style={FUNCTION}>
                          _
                          <TypeWord
                            isTyping={isTyping}
                            word="('#add-btn')"
                            step={1}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
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
                        <span>{"  "}</span>
                        <span style={KEYWORD}>const</span>
                        <span style={{ color: "var(--color-slate-50)" }}>
                          {" card "}
                          <TypeWord
                            isTyping={isTyping}
                            word="= _"
                            step={3}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>(</span>
                        <span style={STRING}>'&lt;div&gt;'</span>
                        <span style={SYMBOL}>)</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          addClass
                          <TypeWord
                            isTyping={isTyping}
                            word="('card')"
                            step={4}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          html
                          <TypeWord
                            isTyping={isTyping}
                            word="(`Card ${++cardId}`)"
                            step={5}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          css
                          <TypeWord
                            isTyping={isTyping}
                            word="({ opacity: 0, transform: 'scale(0.8)' })"
                            step={6}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          appendTo
                          <TypeWord
                            isTyping={isTyping}
                            word="('#cards')"
                            step={7}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          animate
                          <TypeWord
                            isTyping={isTyping}
                            word="({ opacity: 1, transform: 'scale(1)' }, 300)"
                            step={8}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line"></span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={FUNCTION}>
                          _
                          <TypeWord
                            isTyping={isTyping}
                            word="(card)"
                            step={9}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                        <span style={SYMBOL}>.</span>
                        <span style={FUNCTION}>
                          on
                          <TypeWord
                            isTyping={isTyping}
                            word="('click', () => {"
                            step={10}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={FUNCTION}>
                          _
                          <TypeWord
                            isTyping={isTyping}
                            word="(card).fadeOut(300).remove();"
                            step={11}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                        </span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>{"}"})</span>
                        <span style={SYMBOL}>;</span>
                      </span>
                      <span className="line">
                        <span style={SYMBOL}>{"}"});</span>
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

// Oatmeal color palette
const OATMEAL_COLORS = {
  white: '#E7E5E4',
  stone: '#A8A29E',
  olive: '#2B2922',
  card: '#141311',
  black: '#0B0A08',
};

interface Card {
  id: number;
  color: string;
}

function Example({ step }: { step: number }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [nextId, setNextId] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const colors = [OATMEAL_COLORS.white, OATMEAL_COLORS.stone, OATMEAL_COLORS.olive];

  const addCard = () => {
    const newCard: Card = {
      id: nextId,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setCards([...cards, newCard]);
    setNextId(nextId + 1);
  };

  const removeCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <motion.div
      layout={true}
      transition={TRANSITION}
      className={clsx(
        "@container rounded-3xl p-2 outline outline-white/15 backdrop-blur-md",
        "w-[400px] xl:ml-[3rem]",
        "bg-oatmeal-black/80"
      )}
    >
      <motion.div
        className="relative flex w-full flex-col items-center gap-4 rounded-2xl p-6"
        style={{ backgroundColor: OATMEAL_COLORS.card }}
        layout={true}
        transition={TRANSITION}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="text-center w-full">
          <h3 className="text-sm font-semibold mb-1" style={{ color: OATMEAL_COLORS.white }}>
            Dynamic Card Creation
          </h3>
          <p className="text-xs mb-3" style={{ color: OATMEAL_COLORS.stone }}>
            {isHovering ? 'Click Add • Click cards to remove' : 'Hover to interact'}
          </p>
        </div>

        <motion.button
          onClick={addCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl"
          style={{
            backgroundColor: OATMEAL_COLORS.white,
            color: OATMEAL_COLORS.black,
          }}
        >
          + Add Card
        </motion.button>

        <div
          className="w-full min-h-[180px] max-h-[180px] overflow-y-auto rounded-xl p-3 flex flex-col gap-2"
          style={{
            backgroundColor: OATMEAL_COLORS.black,
            boxShadow: `0 0 0 1px ${OATMEAL_COLORS.olive} inset, 0 4px 12px rgba(11, 10, 8, 0.5)`,
          }}
        >
          {cards.length === 0 ? (
            <div
              className="flex items-center justify-center h-full text-xs"
              style={{ color: OATMEAL_COLORS.stone }}
            >
              No cards yet. Click "Add Card" to start!
            </div>
          ) : (
            cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 100 }}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => removeCard(card.id)}
                className="px-4 py-3 rounded-lg cursor-pointer transition-all font-medium text-sm flex items-center justify-between"
                style={{
                  backgroundColor: card.color,
                  color: OATMEAL_COLORS.black,
                  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
                }}
                layout
              >
                <span>Card {card.id}</span>
                <span className="text-xs opacity-60">Click to remove</span>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex gap-2 text-xs flex-wrap justify-center" style={{ color: OATMEAL_COLORS.stone }}>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: OATMEAL_COLORS.white }}
            />
            <span>White</span>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: OATMEAL_COLORS.stone }}
            />
            <span>Stone</span>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: OATMEAL_COLORS.olive }}
            />
            <span>Olive</span>
          </div>
        </div>
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
    // For function names like attr, css, on, etc.
    if (fullWord.startsWith("({ ") || fullWord.includes(": ")) return undefined;
    if (fullWord.startsWith("('") && index < 2) return SYMBOL.color;
    if (fullWord.includes("'") && fullWord.includes(")")) {
      if (char === "(" || char === ")") return SYMBOL.color;
      if (char === "'") return STRING.color;
      if (fullWord.charAt(index - 1) === "'" || (index > 0 && fullWord.substring(0, index).includes("'") && !fullWord.substring(0, index).includes(")"))) {
        return STRING.color;
      }
    }
    if (fullWord.startsWith("('#") || fullWord.startsWith("('&lt;") || fullWord.startsWith("(canvas")) {
      if (char === "(" || char === ")") return SYMBOL.color;
      return STRING.color;
    }
    if (fullWord.includes("[") || fullWord === "]") return SYMBOL.color;
    if (fullWord === ".push({" || fullWord === ");" || fullWord === ");") return SYMBOL.color;
    if (fullWord.includes(": e.offset") || fullWord.includes(": colors[")) {
      return undefined;
    }
    if (char === ")") return SYMBOL.color;
    
    return undefined;
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
