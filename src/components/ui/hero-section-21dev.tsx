import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "./animated-group";
import { DiasporaClientsTooltip } from "@/components/ui/diaspora-clients-tooltip";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection21Dev() {
  return (
    <>
      <Header />
      <main className="overflow-hidden overflow-x-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Beautiful residential homes background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full object-cover opacity-30"
                width="2340"
                height="1560"
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-xs sm:text-sm">
                      61% of diaspora fear fraud when building in Kenya
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </a>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-3xl sm:text-4xl md:text-5xl lg:mt-16 lg:text-6xl xl:text-7xl font-bold leading-tight">
                    Build Your Kenyan Home{" "}
                    <span className="text-orange-500">Safely</span> – We Oversee
                    Every Shilling You Send
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-balance text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    When Kenyans abroad try to build at home, 6 in 10 fear being
                    cheated. We understand – that's why Eris Engineering makes
                    the process secure and transparent.
                  </p>
                </AnimatedGroup>

                {/* WARNING Hook - Sabri Suby Style */}
                <AnimatedGroup variants={transitionVariants}>
                  <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-red-500/10 border-2 border-red-500/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-lg shadow-red-500/10">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl sm:text-3xl shrink-0 animate-pulse">
                          ⚠️
                        </span>
                        <div>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-red-600 dark:text-red-400 leading-tight uppercase">
                            WARNING: Do Not Break Ground Until You Read This.
                          </p>
                          <p className="text-xs sm:text-sm md:text-base text-foreground/90 mt-2 leading-relaxed">
                            Contractors rely on your ignorance.{" "}
                            <span className="font-bold text-red-600 dark:text-red-400">
                              Our AI Engine reveals the true market rates in
                              seconds.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4"
                >
                  {/* Primary CTA - AI Calculator */}
                  <div
                    key={1}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[16px] p-1 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 scale-100 hover:scale-105"
                  >
                    <Button
                      size="lg"
                      onClick={() => (window.location.href = "/calculator")}
                      className="rounded-xl px-6 sm:px-8 py-6 sm:py-8 text-base sm:text-lg md:text-xl font-black bg-orange-500 hover:bg-orange-600 h-auto uppercase tracking-wide"
                    >
                      <span className="text-wrap text-center">
                        REVEAL MY TRUE CONSTRUCTION COST{" "}
                        <br className="sm:hidden" />
                        <span className="text-sm sm:text-base font-normal opacity-90 normal-case block sm:inline sm:ml-2">
                          (Worth KES 50,000 - Free Today)
                        </span>
                      </span>
                    </Button>
                  </div>

                  {/* Secondary CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                      <Button
                        size="lg"
                        className="rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-foreground hover:bg-foreground/90"
                      >
                        <span className="text-nowrap">
                          Get Free Consultation
                        </span>
                        <span className="text-xs sm:text-sm ml-2 opacity-90">
                          (Worth KES 5,000)
                        </span>
                      </Button>
                    </div>
                  </div>
                </AnimatedGroup>

                {/* Urgency text */}
                <AnimatedGroup variants={transitionVariants}>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4 sm:mt-6">
                    ⏰ Limited: Only 5 homes per month qualify for our guarantee
                  </p>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Beautiful modern home construction in Kenya"
                    width="2340"
                    height="1560"
                  />
                  <img
                    className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Beautiful modern home construction in Kenya"
                    width="2340"
                    height="1560"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="relative m-auto max-w-5xl px-6">
            <div className="mx-auto mt-12">
              <DiasporaClientsTooltip />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
