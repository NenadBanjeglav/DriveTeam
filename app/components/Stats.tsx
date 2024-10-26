"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const Stats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <h3 className="mb-12 text-center text-4xl font-semibold italic text-teal-600 md:text-6xl ">
        Ponosni smo!
      </h3>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat num={2} suffix="" subheading="Godina postojanja Drive Team-a" />

        <div className="h-px w-12 bg-indigo-200 sm:h-12 sm:w-px" />
        <Stat num={200} suffix="+" subheading="Zadovoljnih polaznika!" />

        <div className="h-px w-12 bg-indigo-200 sm:h-12 sm:w-px" />
        <Stat
          num={90}
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
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
      onComplete: () => setHasAnimated(true),
    });
  }, [num, decimals, isInView, hasAnimated]);

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
