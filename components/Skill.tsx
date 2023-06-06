"use client";
import { urlFor } from "@/sanity.config";
import { Skill } from "@/types/Skill";
import { motion } from "framer-motion";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -80 : 80,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-11 md:h-11 xl:w-12 xl:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs font-bold text-black opacity-100 p-2">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
