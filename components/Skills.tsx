"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/types/Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const sortedSkills = skills
    ?.sort((a, b) => a.progress - b.progress)
    .reverse();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] md:tracking-[20px] md:text-lg text-gray-500">
        Skills
      </h3>

      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3> */}

      <div className="grid grid-cols-4 gap-5">
        {sortedSkills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
