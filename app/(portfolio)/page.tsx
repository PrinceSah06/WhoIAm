import { Navbar } from "./../components/layout/navbar";
import { Hero } from "./../components/home/hero";
import { SelectedWork } from "./../components/projects/selected-work";
import { About } from "../components/about/about";
import { Skills } from "../components/skills/skills";
import { Journey } from "../components/experience/Journey";
import { Contact } from "../components/contact/contect";
import { Footer } from "../components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <SelectedWork />
      <About/>

      <Skills/>

      <Journey/>

      <Contact/>

      <Footer/>
    </main>
  );
}