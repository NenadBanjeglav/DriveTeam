"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const Stats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <h3 className="mb-12 text-center text-4xl font-bold italic text-teal-600 ">
        Ponosni smo na svaki korak koji smo zajedno napravili!
      </h3>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat num={5} suffix="" subheading="Godina postojanja Drive Team-a" />

        <div className="h-px w-12 bg-indigo-200 sm:h-12 sm:w-px" />
        <Stat num={200} suffix="+" subheading="Zadovoljnih polaznika!" />

        <div className="h-px w-12 bg-indigo-200 sm:h-12 sm:w-px" />
        <Stat
          num={95}
          suffix="%"
          subheading="Polozenih vozackih ispita iz prvog pokusaja!"
        />
      </div>
    </div>
  );
};

export default Stats;

interface StatProps {
  num: number;
  suffix?: string;
  subheading: string;
  decimals?: number;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        // @ts-ignore
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold text-teal-600 sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center">{subheading}</p>
    </div>
  );
};
