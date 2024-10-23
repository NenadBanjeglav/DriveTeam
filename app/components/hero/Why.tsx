"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { DollarSign, HelpCircle, Smile, Users } from "lucide-react";
import React, { useRef } from "react";

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: Users,
    title: "Iskusni i strpljivi instruktori",
    description:
      "Naši instruktori imaju bogato iskustvo i strpljenje, pružajući vam podršku tokom celog procesa učenja.",
    ctaClasses: "bg-teal-500",
    routeTo: "#",
  },
  {
    id: 2,
    Icon: DollarSign,
    title: "Konkurentne cene i plaćanje na rate",
    description:
      "Nudimo pristupačne cene sa mogućnostima plaćanja na rate, kako bi obuka bila dostupna svima.",
    ctaClasses: "bg-amber-500",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: HelpCircle,
    title: "Podrška nakon obuke",
    description:
      "Ostanite u kontaktu sa našim instruktorima i dobijajte savete za sigurnu vožnju i održavanje.",
    ctaClasses: "bg-orange-500",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: Smile,
    title: "Pozitivna atmosfera",
    description:
      "Stvaramo prijateljsko okruženje koje pomaže u razvijanju samopouzdanja i ljubavi prema vožnji.",
    ctaClasses: "bg-purple-500",
    routeTo: "#",
  },
];

// @ts-ignore
const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "#00897B" : "#F5F5F5",
        color: isOddCard ? "#F5F5F5" : "#00897B",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold italic md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      {/* <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Saznaj više</span>
        <FiArrowRight />
      </a> */}
    </motion.div>
  );
};

const Why = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((card, i) => (
          <Card
            key={card.id}
            card={card}
            scrollYProgress={scrollYProgress}
            position={i + 1}
          />
        ))}
        <div className="h-screen bg-teal-700" />
      </div>
    </>
  );
};

export default Why;
