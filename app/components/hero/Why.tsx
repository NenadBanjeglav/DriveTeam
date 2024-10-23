"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import {
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  HelpCircle,
  Laptop,
  Smile,
  Target,
  Users,
} from "lucide-react";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: Users,
    title: "Iskusni i strpljivi instruktori",
    description:
      "Naši instruktori imaju bogato iskustvo i strpljenje, pružajući vam podršku tokom celog procesa učenja.",
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 2,
    Icon: Laptop,
    title: "Pristup lekcijama online",
    description:
      "Uživajte u fleksibilnosti online lekcija koje možete pratiti iz udobnosti svog doma, kada god vam odgovara.",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: Car,
    title: "Obuka na modernim vozilima",
    description:
      "Vozite moderna, sigurna vozila koja su prilagođena najnovijim standardima.",
    ctaClasses: "bg-red-300",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: DollarSign,
    title: "Konkurentne cene i plaćanje na rate",
    description:
      "Nudimo pristupačne cene sa mogućnostima plaćanja na rate, kako bi obuka bila dostupna svima.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 5,
    Icon: Target,
    title: "Individualizovani pristup učenju",
    description:
      "Svaki učenik je jedinstven; prilagođavamo nastavu vašim potrebama i tempu.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 6,
    Icon: Clock,
    title: "Fleksibilni rasporedi",
    description:
      "Rasporedite lekcije prema svojim obavezama, bilo da ste student, zaposlen ili imate druge prioritete.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 7,
    Icon: HelpCircle,
    title: "Podrška nakon obuke",
    description:
      "Ostanite u kontaktu sa našim instruktorima i dobijajte savete za sigurnu vožnju i održavanje.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 8,
    Icon: CheckCircle,
    title: "Visoka prolaznost ispita",
    description:
      "Naš pristup i kvalitetna obuka dovode do visoke prolaznosti ispita za vozačku dozvolu.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 9,
    Icon: Smile,
    title: "Pozitivna atmosfera",
    description:
      "Stvaramo prijateljsko okruženje koje pomaže u razvijanju samopouzdanja i ljubavi prema vožnji.",
    ctaClasses: "bg-amber-300",
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
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <FiArrowRight />
      </a>
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

// <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-28">
//   <div className="basis-2/4">
//     <Image
//       src="/about.jpg"
//       width={600}
//       height={600}
//       alt="Zena uci da vozi"
//       className="rounded-full object-cover shadow-2xl"
//     />
//   </div>
//   <div className="mb-6 max-w-lg basis-2/4 md:mb-0">
//     <h3 className="mb-12  text-center text-4xl font-bold italic text-teal-600 md:text-left">
//       Zašto DriveTeam?
//     </h3>
//     <div className="flex flex-col items-start">
//       <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
//         <Check size={24} className="text-teal-500" /> Iskusni i strpljivi
//         instruktori
//       </p>
//       <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
//         <Check size={24} className="text-teal-500" /> Pristup lekcijama
//         online
//       </p>
//       <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
//         <Check size={24} className="text-teal-500" /> Obuka na modernim
//         vozilima
//       </p>
//       <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
//         <Check size={24} className="text-teal-500" /> Konkurentne cene i
//         plaćanje na rate
//       </p>
//       <div className="mt-12 flex w-full items-center justify-start gap-4">
//         <Button className="rounded-full bg-teal-600 hover:bg-teal-500">
//           PRIJAVI SE ONLINE
//         </Button>

//         <Link
//           href="tel:0213824417"
//           className="flex items-center justify-center gap-2 rounded-full border border-teal-500 bg-teal-100 p-2 text-teal-500 transition ease-in-out hover:border-teal-600 hover:text-teal-600"
//         >
//           <Phone size={20} />
//           021 3824 417
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
