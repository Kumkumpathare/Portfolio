import { GraduationCap, School } from "lucide-react";
import { SKILLS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 sm:px-10 sm:py-28">
      <SectionHeading eyebrow="~ 02 · About" bold="Right now" italic="& what I use." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Skills */}
        <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          <p className="eyebrow text-[0.62rem] text-faint">Toolkit</p>
          <h3 className="mt-2 text-2xl font-bold uppercase tracking-[-0.03em] text-foreground">
            Skills
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-rose hover:text-wine"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-rose-soft/60 p-6">
            <p className="eyebrow text-[0.62rem] text-rose">Still learning</p>
            <p className="mt-2 font-serif text-2xl leading-snug text-foreground">
              <em>Machine learning</em> is the one I’m wrapping my head around right now, and I’m
              getting there by building.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          <p className="eyebrow text-[0.62rem] text-faint">Education</p>
          <h3 className="mt-2 text-2xl font-bold uppercase tracking-[-0.03em] text-foreground">
            Where I study
          </h3>
          <ol className="relative mt-8 space-y-8 border-l border-border pl-7">
            <li className="relative">
              <span className="absolute -left-[2.35rem] flex size-6 items-center justify-center rounded-full border border-rose/50 bg-rose-soft text-rose">
                <GraduationCap className="size-3.5" />
              </span>
              <p className="eyebrow text-[0.62rem] text-rose">Now · Batch of 2029</p>
              <p className="mt-1.5 font-semibold text-foreground">B.Tech, Information Technology</p>
              <p className="text-muted-foreground">Jabalpur Engineering College</p>
              <p className="mt-1 font-serif text-lg italic text-muted-foreground">Second year</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[2.35rem] flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                <School className="size-3.5" />
              </span>
              <p className="eyebrow text-[0.62rem] text-faint">Before</p>
              <p className="mt-1.5 font-semibold text-foreground">Schooling</p>
              <p className="text-muted-foreground">Jai Gurudev International School, Chhindwara</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
