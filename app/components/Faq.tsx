"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Faq = () => {
  return (
    <section id="faq" className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold text-teal-600">
          Najčešća pitanja kandidata:
        </h3>
        <Question title="Šta je potrebno za upis u auto školu?" defaultOpen>
          Za upis u auto školu, kandidat mora da ima navršenih minimum 16 godina
          i važeću ličnu kartu, a za polaganje praktičnog ispita minimum 17
          godina.
        </Question>
        <Question title="Koliko traje obuka?">
          Obuka traje 3 meseca ukoliko kandidat redovno dolazi na časove
          teorije, iz prve položi teorijski ispit, redovno ima časove vožnje i
          iz prve položi praktični ispit.
        </Question>
        <Question title="Koji su načini plaćanja?">
          Plaćanje može biti u celosti (tada se ostvaruje popust), na rate dok
          traje obuka, čekovima ili putem administrativne zabrane.
        </Question>
        <Question title="Šta je uključeno u ukupnu cenu?">
          U ukupnu cenu uključeno je 40 časova teorijske obuke, 40 časova
          praktične obuke, teorijski ispit, praktični ispit, takse za MUP,
          lekarsko uverenje i prva pomoć.
        </Question>
        <Question title="Koliko često imamo časove teorije?">
          Teorijska obuka se održava svaki radni dan, 3 časa dnevno, tako da sve
          ukupno traje 13 radnih dana.
        </Question>
        <Question title="Koliko često imamo časove vožnje?">
          Časove vožnje kandidat obično ima 3 puta nedeljno, dnevno 2 časa.
        </Question>
        <Question title="Koliko često se organizuje nova grupa polaznika?">
          Grupe organizujemo uglavnom jednom mesečno.
        </Question>
        <Question title="Da li postoji više termina predavanja ili samo jedan termin?">
          Teorijska obuka se najčešće održava u dva termina, u prepodnevnom i
          poslepodnevnom terminu, pa kandidat dolazi kada mu odgovara.
        </Question>
      </div>
    </section>
  );
};

interface QuestionProps {
  title: string;
  children: any;
  defaultOpen?: boolean;
}

const Question = ({ title, children, defaultOpen = false }: QuestionProps) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "#009688",
            },
            closed: {
              color: "#009688",
            },
          }}
          className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "#009688",
            },
            closed: {
              rotate: "0deg",
              color: "#009688",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
