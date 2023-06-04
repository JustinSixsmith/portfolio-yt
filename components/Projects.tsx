"use client";

import { urlFor } from "@/sanity.config";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const sortedProjects = projects?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-madatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {sortedProjects?.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project._id}
          >
            <a
              href={project?.linkToBuild}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
              />
            </a>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {sortedProjects.length}:
                </span>{" "}
                {project.title} -{" "}
                <SocialIcon
                  url="https://github.com/JustinSixsmith/board-game-discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#F7AB0A"
                  fgColor="#292929"
                  className="inline-block opacity-80 hover:opacity-100"
                  style={{ height: 35, width: 35 }}
                />
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
