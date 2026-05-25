import { About } from "@/components/sections/About/About";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
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
      <ContactSection />
    </main>
  );
}
