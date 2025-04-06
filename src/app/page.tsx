import { Header } from "@/app/pages/header";
import { Hero } from "@/app/pages/hero";
import {About} from "@/app/pages/about";
import {Experiences} from "@/app/pages/experiences";
import {Projects} from "@/app/pages/projects";
import "@/app/globals.css";

export default function Home() {
  return (
    
    <div className="graph-paper">
      <Header />
      <main className="flex flex-col items-center z-10">
        <Hero />
        <About />
        <Experiences />
        <Projects />        
      </main>
    </div>
  );
}

