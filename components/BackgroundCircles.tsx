"use client";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[160px] w-[160px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[240px] w-[240px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[400px] w-[400px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[520px] w-[520px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[640px] w-[640px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
