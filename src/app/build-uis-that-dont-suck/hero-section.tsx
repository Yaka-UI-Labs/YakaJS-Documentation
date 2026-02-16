"use client";

import { Logo } from "@/components/logo";
import { GridContainer } from "./grid-container";
import { HeroActions } from "./call-to-action";
import { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  let videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 left-1/5 -z-10 aspect-video opacity-60">
        <video 
          ref={videoRef} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute size-full object-cover object-right"
        >
          <source src="/build-uis-that-dont-suck/YTDown.com_YouTube_SPRING-VIDEO-Free-Stock-Footage-Free-HD-_Media_o5rvZQMcMss_005_240p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 size-full bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent"></div>
        <div className="absolute inset-0 size-full bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
      </div>
      <GridContainer>
        <div className="flex p-2">
          <Link href="/" aria-label="Home" className="inline-flex">
            <Logo className="h-7" />
          </Link>
        </div>
      </GridContainer>
      <div className="mt-24 flex flex-col gap-6 sm:mt-32 pb-16">
        <GridContainer>
          <p className="font-mono text-sm/6 tracking-widest text-blue-400 uppercase font-bold">Interactive Learning Platform</p>
          <h1 className="mt-4 text-6xl tracking-tighter text-balance text-white sm:text-8xl font-bold leading-none">
            Learn by Doing
          </h1>
        </GridContainer>
        <GridContainer>
          <p className="max-w-3xl text-xl/8 font-medium text-gray-300">
            <strong className="font-bold text-white">Write real code, run it instantly, get feedback.</strong> This isn't just reading — it's an interactive coding experience that teaches you{" "}
            <strong className="font-bold text-white">YakaJS from the ground up</strong>.
          </p>
        </GridContainer>
        <GridContainer>
          <HeroActions
            onWatchPreview={() => {
              videoRef.current?.pause();
            }}
            onClosePreview={() => {
              videoRef.current?.play();
            }}
          />
        </GridContainer>
      </div>
    </>
  );
}
