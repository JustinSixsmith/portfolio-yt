"use client";
import pic from "@/public/pic.jpg";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero(props: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's Justin.",
      "guy-who-loves-board-games.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    const container = document.querySelector(".main-div");
    if (element && container) {
      container.scrollTop = element.offsetTop;
    }
  }

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={pic}
        alt="Picture of Justin Sixsmith"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
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