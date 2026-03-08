import { About } from "@/components/sections/About/About";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Technologies } from "@/components/sections/Technologies/Technologies";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <Technologies />
      <Projects />
    </main>
  );
}
