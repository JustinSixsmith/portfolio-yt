"use client";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import scrollToSection from "@/functions/scrollToSection";
import Image from "next/image";
import pic from "../public/pic.jpg";

export default function Home() {
  return (
    <main className="main-div bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 smooth-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer
        onClick={() => scrollToSection("hero")}
        className="sticky bottom-5 w-full cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <Image
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            src={pic}
            alt="A picture of me"
          />
        </div>
      </footer>
    </main>
  );
}
