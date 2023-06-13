'use client';
import { urlFor } from '@/sanity.config';
import { PageInfo } from '@/types/PageInfo';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] md:tracking-[20px] md:text-lg text-gray-500">
        About
      </h3>

      <motion.img
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
        src={urlFor(pageInfo?.profilePic).url()}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover overflow-hidden md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />

      <div className="max-h-[45vh] space-y-5 px-0 md:px-10 scrollbar-thin overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-xl md:text-2xl lg:text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background...
        </h4>
        <p className="text-xs md:base lg:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
export default About;
