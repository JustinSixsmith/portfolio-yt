"use client";
import React from "react";
import bgDisco from "@/public/bg-disco.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];

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
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.div
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
            >
              <Image src={bgDisco} alt="Disco Image" />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Board Game Discovery
              </h4>

              <p className="text-lg text-center md:text-left">
                Board Game Discovery is a dynamic, user-friendly platform for
                board game enthusiasts, meticulously crafted as a personal
                project by a dedicated frontend React developer. It showcases an
                extensive database of games, complete with detailed
                descriptions, ratings, and user reviews. The platform features a
                personalized recommendation system, designed to help users
                discover new games based on their preferences. Whether you are a
                seasoned player, a newcomer to the board game scene, or a
                potential employer exploring innovative frontend designs, Board
                Game Discovery offers a seamless, engaging, and insightful
                journey into the world of board games.
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
