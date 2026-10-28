import { useCallback, useRef, useState } from "react";
import { ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NOW } from "@/lib/site-data";
import { Character } from "./Character";

export function Hero() {
  const areaRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState("At ease");
  const onStatus = useCallback((s: string) => setStatus(s), []);

  return (
    <section
      id="top"
      ref={areaRef}
      className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-32 sm:px-10 lg:min-h-screen lg:grid-cols-[1fr_1.1fr_0.75fr] lg:gap-6 lg:pb-0 lg:pt-24"
    >
      {/* Intro */}
      <div className="animate-rise relative z-10">
        <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-rose/40 bg-rose-soft/60 px-3.5 py-1.5 text-rose">
          <Sparkles className="size-3" />
          Learning × Building
        </span>
        <h1 className="mt-6 font-script text-[3.4rem] leading-[1.15] text-foreground sm:text-6xl">
          Hi, I’m <span className="text-rose">Kumkum</span>.
        </h1>
        <p className="mt-4 font-serif text-[2rem] leading-[1.15] text-foreground sm:text-[2.4rem]">
          <em>Curious about code,</em>
          <br />
          and <span className="font-sans font-semibold tracking-[-0.04em]">building</span> as I learn.
        </p>
        <p className="mt-5 max-w-md font-serif text-xl leading-snug text-muted-foreground">
          Still a student. Python and C++ are my tools, and machine learning is what I’m exploring
          next.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <Button asChild variant="pill" size="pill">
            <a href="#projects">
              See my work
              <span className="ml-3 flex size-8 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </Button>
          <a
            href="#contact"
            className="eyebrow inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-wine"
          >
            Say hello <ArrowRight className="size-3" />
          </a>
        </div>
      </div>

      {/* Character */}
      <div className="relative mx-auto w-full max-w-[520px] self-end">
        <div className="bg-glow pointer-events-none absolute inset-[-10%]" aria-hidden />
        <Character areaRef={areaRef} onStatus={onStatus} className="relative cursor-pointer" />
      </div>

      {/* Building right now */}
      <aside className="animate-rise relative z-10 flex flex-col gap-6 [animation-delay:200ms] lg:items-end lg:text-right">
        <p className="eyebrow text-faint">~ Building right now ~</p>
        <ul className="flex flex-col gap-4">
          {NOW.map((n) => {
            const inner = (
              <>
                <span>
                  <span className="block text-[0.95rem] font-medium text-foreground">{n.title}</span>
                  <span className="eyebrow block text-[0.62rem] text-faint">{n.sub}</span>
                </span>
                <span className="animate-pulse-dot size-2 shrink-0 rounded-full bg-live" />
              </>
            );
            return (
              <li key={n.title}>
                {n.href ? (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-4 transition-opacity hover:opacity-70 lg:flex-row"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex flex-col gap-1.5 lg:items-end">
          <p className="eyebrow inline-flex items-center gap-2 whitespace-nowrap text-[0.62rem]">
            <MousePointer2 className="size-3 text-rose" />
            <span className="pointer-coarse:hidden">Move your cursor to say hi</span>
            <span className="hidden pointer-coarse:inline">Tap her to say hi</span>
          </p>
          <p className="eyebrow inline-flex items-center gap-1.5 text-[0.6rem] text-faint" aria-live="polite">
            <span className="size-1.5 rounded-full bg-rose" />
            {status}
          </p>
        </div>
      </aside>
    </section>
  );
}
