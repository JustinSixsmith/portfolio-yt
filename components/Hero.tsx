"use client";
import scrollToSection from "@/functions/scrollToSection";
import { urlFor } from "@/sanity.config";
import { PageInfo } from "@/types/PageInfo";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}!`,
      "<CodingAficionado />",
      "with a penchant for semicolons;",
      "Debugger-by-day.tsx",
      "Java(script) brewer by night.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        width={32}
        alt={pageInfo?.name}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-xs md:text-base lg:text-lg uppercase text-gray-500 pb-2 tracking-[6px] md:tracking-[12px] lg:tracking-[18px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-lg md:text-3xl lg:text-5xl font-semibold px-5">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <button
            className="heroButton"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="heroButton"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className="heroButton"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="heroButton"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
