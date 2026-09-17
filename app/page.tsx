import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <MoreProjects />
      <Experience />
      <Skills />
      <Education />
      <Activities />
      <Certifications />
      <Contact />
    </main>
  );
}
