"use client";
import { useScrollNav } from "@/hooks/useScrollNav";
import { useReveal } from "@/hooks/useReveal";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

const SECTION_IDS = ["top", "about", "experience", "projects", "skills", "education", "contact"];

export function PortfolioApp() {
  const { active } = useScrollNav(SECTION_IDS);
  useReveal();

  return (
    <>
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
