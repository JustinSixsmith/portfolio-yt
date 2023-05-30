"use client";
import att from "@/public/att.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-full xl:w-full snap-start bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={att}
          alt="Justin and his wife"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Store Manager</h4>
        <p className="uppercase font-bold text-2xl mt-1">
          Prime Communications
        </p>
      </div>
      <div className="flex space-x-2 my-2">
        <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
        <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
        <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
      </div>
      <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
