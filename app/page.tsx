import { Navbar } from "././components/layout/navbar"
;
import { Footer } from "././components/layout/footer";
import { Hero } from "././components/home/hero";
import { SelectedWork } from "././components/projects/selected-work";
import { About } from  "././components/about/about";
import { Skills } from  "././components/skills/skills";
import { Journey } from "./components/experience/Journey";
import { Contact } from "./components/contact/contect";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  );
}