"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const headline =
    "Nauči da voziš sa DriveTeam i započni svoju vozačku avanturu!".split(" ");

  return (
    <header
      className="flex h-[calc(100vh-100px)] items-center justify-center bg-teal-50 bg-[url('/hero.jpg')] bg-cover bg-center"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 91%)" }}
    >
      <div className="w-full rounded bg-black/50 p-6 text-center text-white shadow-lg">
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
          {headline.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 5,
              }}
              key={i}
              className={el === "DriveTeam" ? "text-teal-500" : ""}
            >
              {el}
              {i === 5 ? <br /> : " "}
            </motion.span>
          ))}
        </h1>
        <p className="mb-6 text-lg italic">
          Spremni za putovanje koje će vam promeniti život?
        </p>

        <div className="flex flex-col justify-center space-x-0 md:flex-row md:space-x-4">
          <Button className="mb-2 rounded-full border border-gray-300 bg-transparent text-white hover:bg-gray-100 hover:text-black md:mb-0">
            Saznaj više
          </Button>
          <Button className="rounded-full bg-teal-600 hover:bg-teal-500">
            Prijavi se odmah
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
