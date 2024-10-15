"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedHeading = () => {
  const headline = "Nauči da voziš i započni avanturu!".split(" ");
  return (
    <h1 className=" py-8 text-3xl font-bold leading-tight md:text-5xl">
      {headline.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 5,
          }}
          key={i}
          className={el === "DriveTeam" ? "italic text-teal-500" : ""}
        >
          {el}
          {i === 5 ? <br /> : " "}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
