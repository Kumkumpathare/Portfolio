import { ArrowUpRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LINKS, PROJECTS, type Project } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-border bg-muted"
            aria-label={`Enlarge ${p.title} screenshot`}
          >
            <img
              src={p.image.crop}
              alt={p.image.alt}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="eyebrow absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-2.5 py-1 text-[0.62rem] text-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-rose" />
              {p.status}
            </span>
            <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-card/90 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <Expand className="size-3.5" />
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl border-border bg-card p-3 sm:rounded-3xl">
          <DialogTitle className="sr-only">{p.title} screenshot</DialogTitle>
          <img src={p.image.full} alt={p.image.alt} className="w-full rounded-2xl" />
          <p className="eyebrow px-2 pb-1 text-[0.62rem]">{p.image.caption}</p>
        </DialogContent>
      </Dialog>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <p className="eyebrow text-[0.62rem] text-faint">Entry {p.entry}</p>
        <h3 className="-mt-2 text-lg font-bold uppercase tracking-[-0.02em] text-foreground">
          {p.title}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{p.summary}</p>
        <p className="font-serif text-lg leading-snug text-foreground">
          <em className="text-wine">What I learned ~ </em>
          {p.learned}
        </p>
        {p.note && <p className="eyebrow text-[0.6rem] normal-case tracking-normal text-faint">{p.note}</p>}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-5 border-t border-border pt-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="eyebrow inline-flex items-center gap-1 text-foreground transition-colors hover:text-wine"
            >
              {l.label} <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <SectionHeading eyebrow="~ 01 · Proof of work" bold="The build" italic="log." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_0.8fr]">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}

        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener"
          className="group flex flex-col justify-between gap-10 rounded-3xl border border-dashed border-rose/50 bg-rose-soft/40 p-7 transition-colors hover:bg-rose-soft/70"
        >
          <p className="eyebrow text-[0.62rem] text-rose">Entry 03 ~ More</p>
          <div>
            <h3 className="text-2xl font-bold uppercase leading-tight tracking-[-0.03em] text-foreground">
              Smaller experiments,
              <span className="block font-serif text-3xl font-normal normal-case italic tracking-normal text-wine">
                on GitHub.
              </span>
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Notebooks, practice code and things I’m still figuring out live on my GitHub profile.
            </p>
          </div>
          <span className="eyebrow inline-flex items-center gap-1.5 text-foreground">
            See all repositories
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>

    </section>
  );
}
