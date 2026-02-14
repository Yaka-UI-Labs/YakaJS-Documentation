import GridContainer from "../grid-container";
import { BentoBody, BentoDescription, BentoHeader, BentoIcon, BentoItem, BentoTitle } from "./bento";
import CategoryHeader from "./category-header";

export default function WhyYakaJsSection() {
  return (
    <div className="relative max-w-full">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-pink-500 dark:text-pink-400">Why YakaJS?</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Built for modern JavaScript development.
        </h2>
      </GridContainer>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          YakaJS is a modern JavaScript library that combines simplicity with powerful features.
          From voice commands to reactive state management, YakaJS gives you everything you need to build amazing web applications.
        </p>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="grid w-full grid-flow-dense grid-cols-1 gap-4 bg-gray-950/5 p-4 md:grid-cols-2 lg:grid-cols-3 dark:bg-white/10">
          
          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>Voice Commands</BentoTitle>
                <BentoDescription>
                  The ONLY JavaScript library with built-in voice control. Control your app by speaking commands.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>Lightning Fast</BentoTitle>
                <BentoDescription>
                  Batched DOM operations and smart caching prevent layout thrashing for smooth performance.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>Rich Animations</BentoTitle>
                <BentoDescription>
                  15+ smooth animations including bounce, swing, flip3D, and more. Chain them for stunning effects.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>State Management</BentoTitle>
                <BentoDescription>
                  Vuex-style store with mutations, actions, and time-travel debugging. Reactive signals and effects.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>Secure by Default</BentoTitle>
                <BentoDescription>
                  Built-in XSS protection, CSRF tokens, and input sanitization keep your users safe.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

          <BentoItem>
            <BentoHeader>
              <BentoIcon>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </BentoIcon>
              <div>
                <BentoTitle>150+ Features</BentoTitle>
                <BentoDescription>
                  Everything you need: routing, AJAX, WebSockets, command palette, virtual scroll, and much more.
                </BentoDescription>
              </div>
            </BentoHeader>
          </BentoItem>

        </div>
      </GridContainer>
    </div>
  );
}
