import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site-data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <p className="eyebrow">~ 03 · Start here</p>
      <h2 className="mt-5 text-6xl text-foreground sm:text-7xl">
        <span className="display">Let’s</span>{" "}
        <em className="font-serif font-normal text-muted-foreground">talk.</em>
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Open to internships, collaborations and conversations with people who build things.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Button asChild variant="pill" size="pill" className="pr-6">
          <a href={LINKS.email}>
            Email me <ArrowUpRight />
          </a>
        </Button>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener"
          className="text-muted-foreground underline-offset-4 transition-colors hover:text-wine hover:underline"
        >
          Or say hi on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const social = [
    { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
    { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
    { label: "Email", href: LINKS.email, Icon: Mail },
  ];
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-12 sm:px-10">
      <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} Kumkum Pathare
        </p>
        <div className="flex items-center gap-2">
          {social.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="size-[1.1rem]" />
            </a>
          ))}
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
