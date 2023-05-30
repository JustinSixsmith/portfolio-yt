"use client";
import hawaii from "@/public/hawaii.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover overflow-hidden md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]"
      >
        <Image src={hawaii} alt="Justin and his wife" />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background...
        </h4>
        <p className="text-base">
          Hello! My name is Justin Sixsmith, a software developer who
          transitioned from a successful career in sales management. I thrive in
          the realm of technology, harnessing my passion for problem-solving,
          leadership, and effective communication to create impactful software
          solutions. My expertise spans across a variety of programming
          languages, including HTML, CSS, JavaScript, TypeScript, React, Python,
          and Java SE/EE. I hold an AWS Certified Solutions Architect
          certification and have contributed to diverse development projects,
          reflecting my commitment to continual learning and innovation. I love
          the creative and technical challenges that software development
          presents and look forward to sharing this journey with you.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
