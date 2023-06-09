'use client';
import { Experience } from '@/types/Experience';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  const sortOrder = [
    'Prime Communications',
    'Codeup',
    'Code with Mosh',
    'Wes Bos',
    'Udemy',
  ];

  const sortedExperience = experience?.sort((a, b) => {
    return sortOrder.indexOf(a.company) - sortOrder.indexOf(b.company);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] md:tracking-[20px] md:text-lg text-gray-500">
        Experience
      </h3>

      <div className="w-full space-x-5 overflow-x-scroll pt-[100px] p-3 snap-x snap-mandatory flex flex-row scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {sortedExperience.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
