import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";

const Hero = () => {
    const skil =[`digital products`,`UI/UX Design`,`Brand Strategy`,`Web Development`]
    const [skillIndex,setskilIndex]= useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setskilIndex((prevalue)=>(prevalue+1)%(skil.length))
        }, 2000);
        return () => clearInterval(timer)
    }, []);

  return (
    <section className="flex flex-col-reverse items-center justify-between gap-10 px-6 py-16 font-mono bg-[#F5FCFF] dark:bg-black md:flex-row md:px-20 rounded-2xl shadow-sm md:justify-center md:items-center md:min-h-screen">
      
      {/* ---- Left Content ---- */}
      <div className="flex flex-col space-y-6 text-center md:text-left md:w-1/2">
        <h2 className="text-lg italic font-semibold text-[#282938] dark:text-gray-300">
          👋 Hey, I am <span className="text-[#5E3BEE]">John</span>
        </h2>

        <h1 className="text-3xl font-extrabold leading-snug text-[#282938] dark:text-white md:text-5xl">
          I design <span className="text-[#5E3BEE]">{skil[skillIndex]}</span> and
          build meaningful brand experiences.
        </h1>

        <p className="text-gray-600 dark:text-gray-400 md:w-4/5 mx-auto md:mx-0">
          I’m a product designer focused on creating engaging, user-friendly
          interfaces that solve real problems and drive growth.
        </p>

        <div className="flex justify-center md:justify-start">
          <Button
            className="px-6 py-3 font-semibold bg-[#5E3BEE] text-white hover:bg-[#4730c9] transition-all duration-300"
            color="primary"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* ---- Right Image ---- */}
      <div className="flex justify-center items-center md:w-1/2">
        <img
          src="/image/heroimage.png"
          alt="Hero illustration"
          className="w-[80%] max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
