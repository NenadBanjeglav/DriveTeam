"use client";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { DollarSign, HelpCircle, LucideIcon, Smile, Users } from "lucide-react";
import React, { useRef } from "react";

const CARD_HEIGHT = 600;

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

interface CardProps {
  position: number;
  card: {
    id: number;
    Icon: LucideIcon;
    title: string;
    description: string;
    ctaClasses?: string;
    routeTo: string;
  };
  scrollYProgress: MotionValue<number>; // Scroll progress value from Framer Motion
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.article
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "#00897B" : "#F5F5F5",
        color: isOddCard ? "#F5F5F5" : "#00897B",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
      aria-labelledby={`card-title-${card.id}`}
    >
      <card.Icon className="mb-4 size-12" />
      <h2 className="mb-6 text-center text-4xl font-semibold italic md:text-6xl">
        {card.title}
      </h2>
      <p className="mb-8 max-w-lg text-center text-lg md:text-xl">
        {card.description}
      </p>
    </motion.article>
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
      <section id="about" ref={ref} className="relative">
        {CARDS.map((card, i) => (
          <Card
            key={card.id}
            card={card}
            scrollYProgress={scrollYProgress}
            position={i + 1}
          />
        ))}
      </section>
    </>
  );
};

export default Why;
