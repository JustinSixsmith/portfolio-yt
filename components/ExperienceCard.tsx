"use client";
import att from "@/public/att.jpg";
import codeup from "@/public/codeup.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
                  xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
                  transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
          src={att}
          alt="AT&T Logo"
        />
      </motion.div>

      <div className="px-0 md:px-10 items-start">
        <h4 className="text-4xl font-light">Retail Store Manager</h4>
        <p className="uppercase font-bold text-2xl mt-1">
          Prime Communications
        </p>
        <div className="flex space-x-2 my-2">
          <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
          <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
          <Image className="h-10 w-10 rounded-full" src={att} alt="AT&T Logo" />
        </div>
        <p className="uppercase py-5 text-gray-300">Apr 2009 - Nov 2021</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Conducted comprehensive training for all retail store managers in
            the district, instilling a strong commitment to attention to detail,
            adherence to company policy, and outstanding performance
          </li>
          <li>
            Achieved an average year-over-year increase in store profits of 11%
            through a relentless focus on customer satisfaction and operational
            excellence
          </li>
          <li>
            Earned recognition as a seven-time district quarterly Most Valuable
            Player (MVP) and Presidents Club winner in 2018, placing in the top
            3% of all company store managers based on exceptional performance in
            sales and operations
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
