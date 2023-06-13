'use client';

import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import scrollToSection from '@/functions/scrollToSection';
import { Experience } from '@/types/Experience';
import { PageInfo } from '@/types/PageInfo';
import { Project } from '@/types/Project';
import { Skill } from '@/types/Skill';
import { Social } from '@/types/Social';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import pic from '../public/pic.jpg';
import { sanityClient } from './api/sanityClient';
import { LoadingPage } from '@/components/loading';

export default function Home() {
  const [socials, setSocials] = useState<Social[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(groq`*[_type == "social"]`),
      sanityClient.fetch(groq`*[_type == "pageInfo"][0]`),
      sanityClient.fetch(
        groq`*[_type == "experience"] {..., technologies[]->, }`
      ),
      sanityClient.fetch(groq`*[_type == "skill"]`),
      sanityClient.fetch(groq`*[_type == "project"] {..., technologies[]-> }`),
    ])
      .then(
        ([
          socialsData,
          pageInfoData,
          experienceData,
          skillsData,
          projectsData,
        ]) => {
          setSocials(socialsData);
          setPageInfo(pageInfoData);
          setExperience(experienceData);
          setSkills(skillsData);
          setProjects(projectsData);
          setIsLoading(false);
        }
      )
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <main className="main-div bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 smooth-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        {pageInfo && <Hero pageInfo={pageInfo} />}
      </section>

      <section id="about" className="snap-center">
        {pageInfo && <About pageInfo={pageInfo} />}
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer
        onClick={() => scrollToSection('hero')}
        className="sticky bottom-5 w-full cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <Image
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
            src={pic}
            alt="A picture of me"
          />
        </div>
      </footer>
    </main>
  );
}
