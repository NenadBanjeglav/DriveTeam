"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 700;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative  flex min-h-[700px] w-full flex-col items-center gap-12 overflow-hidden bg-gray-100"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      <h3 className="px-8 text-center text-4xl font-semibold italic text-teal-600 md:text-left md:text-6xl">
        Šta kažu naši polaznici?
      </h3>
      <p className="px-8 text-center text-lg leading-relaxed md:text-left md:text-xl">
        Pogledaj šta su rekli naši polaznici i kreni i ti u avanturu koja menja
        život!
      </p>
      <div>
        {testimonials.map((t, idx) => {
          let position = 0;

          if (testimonials.length % 2) {
            position = idx - (testimonials.length + 1) / 2;
          } else {
            position = idx - testimonials.length / 2;
          }

          return (
            <TestimonialCard
              key={t.tempId}
              // @ts-expect-error
              testimonial={t}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-8">
          <button
            onClick={() => handleMove(-1)}
            className="grid size-14 place-content-center text-3xl transition-colors hover:bg-teal-700 hover:text-white"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="grid size-14 place-content-center text-3xl transition-colors hover:bg-teal-700 hover:text-white"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardPorps {
  position: number;
  testimonial: {
    tempId: number;
    testimonial: string;
    by: string;
    imgSrc: string;
  };
  handleMove: (position: number) => void;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialCardPorps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-[60%] cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
        isActive ? "z-10 bg-teal-600" : "z-0 bg-white"
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      {/* <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      /> */}
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        &quot;{testimonial.testimonial}&quot;
      </h3>
      <p
        className={`absolute inset-x-8 bottom-8 mt-2 text-sm italic ${
          isActive ? "text-white" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

const TESTIMONIAL_DATA = [
  {
    tempId: 0,
    testimonial:
      "Sjajna škola! Instruktor Vladan mi je pomogao da se setim korišćenja manuelne transmisije nakon 10 godina. Hvala puno!",
    by: "Nikolai Razguliaev",
  },
  {
    tempId: 1,
    testimonial:
      "Prijateljska auto škola. Instruktori su strpljivi i prilagodili su se mom rasporedu. Topla preporuka!",
    by: "Stevan Grbic",
  },
  {
    tempId: 2,
    testimonial:
      "Profesionalizam i odličan odnos sa kandidatima. Sve pohvale za predavača!",
    by: "Jovan Pekic",
  },
  {
    tempId: 3,
    testimonial:
      "Auto škola koja nadmašuje očekivanja! Instruktor Boris je odličan i pruža sjajnu podršku.",
    by: "Matrix Novi Sad",
  },
  {
    tempId: 4,
    testimonial:
      "Dugo nisam vozila, ali nakon nekoliko časova ponovo sam vozač! Sve najbolje!",
    by: "Zorica Bojovic",
  },
  {
    tempId: 5,
    testimonial:
      "Najbolja auto škola! Instruktori su strpljivi, a atmosfera opuštena. Svaki čas bez kašnjenja.",
    by: "Dario",
  },
  {
    tempId: 6,
    testimonial:
      "Divan tim koji pruža osmeh! Milijana i Boris su odlični i puno pomažu.",
    by: "Una Egelja",
  },
  {
    tempId: 7,
    testimonial:
      "Sve preporuke za Drive Team! Stručni i posvećeni instruktori. Bez stresa i sa razumevanjem.",
    by: "Marijana Marković",
  },
  {
    tempId: 8,
    testimonial: "Posvećen tim koji raste iz dana u dan. Sve pohvale momcima!",
    by: "Nikola Zinic",
  },
  {
    tempId: 9,
    testimonial:
      "Pozitivan prvi utisak. Milijana i Boris su sjajni i pomogli su mi da vozim bez straha!",
    by: "Dajana Kult",
  },
  {
    tempId: 10,
    testimonial:
      "Najbolja auto škola! Brzo do dozvole uz zanimljive časove i odličnu podršku.",
    by: "Stefan Vila",
  },
];
