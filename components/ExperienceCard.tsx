"use client";
import { urlFor } from "@/sanity.config";
import { Experience } from "@/types/Experience";
import { motion } from "framer-motion";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[250px] md:w-[300px]
                  xl:w-[450px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer
                  transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-top"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />

      <div className="px-0 md:px-5 items-start">
        <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
        <p className="uppercase font-bold mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2 wr">
          {experience?.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-5 w-5 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300 text-xs">
          {new Date(experience?.dateStarted).toLocaleDateString("default", {
            year: "numeric",
            month: "short",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleDateString("default", {
                year: "numeric",
                month: "short",
              })}
        </p>

        <ul className="list-disc space-y-2 text-xs h-60 px-4 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[@F7AB0A]/80">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
