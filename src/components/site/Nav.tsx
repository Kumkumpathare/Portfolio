import { LINKS } from "@/lib/site-data";
import { GithubIcon, LinkedinIcon, Logo } from "./icons";

const items = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6">
      <nav className="flex items-center gap-1 rounded-full border border-border bg-card/85 py-1.5 pl-4 pr-2 shadow-float backdrop-blur-md sm:gap-2 sm:pl-6">
        <a href="#top" className="text-wine" aria-label="Kumkum Pathare, back to top">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>
        <span className="mx-1 h-5 w-px bg-border sm:mx-3" aria-hidden />
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="rounded-full px-2.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground sm:px-3.5"
          >
            {i.label}
          </a>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden />
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
        >
          <GithubIcon className="size-4" />
        </a>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
        >
          <LinkedinIcon className="size-4" />
        </a>
      </nav>
    </header>
  );
}
