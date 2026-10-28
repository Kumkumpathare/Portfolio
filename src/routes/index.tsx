import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Kumkum Pathare · Learning × Building";
const description =
  "IT student at Jabalpur Engineering College building with Python, C++ and machine learning. Projects: MammoCare and PaperLens.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
