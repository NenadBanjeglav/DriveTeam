"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Faq = () => {
  return (
    <section
      id="faq"
      className="mb-20 mt-8 flex flex-col items-center justify-center px-4"
      aria-labelledby="faq-heading" // Accessibility: add an aria label for the FAQ section
    >
      <h3
        id="faq-heading"
        className="mb-8 text-4xl font-semibold italic text-teal-600 md:mb-24 md:text-left md:text-6xl"
      >
        Najčešća pitanja:
      </h3>
      <div className="mx-auto max-w-7xl">
        {/* Adding a list of questions for better structure */}
        <Question title="Šta je potrebno za upis u auto školu?">
          Za upis u auto školu, kandidat mora da ima navršenih minimum 16 godina
          i važeću ličnu kartu. Kada napuniš 17 godina, možeš se pripremiti za
          uzbudljiv praktični ispit i zakoračiti u svet vožnje!
        </Question>
        <Question title="Koliko traje obuka?">
          Obuka traje 3 meseca, ali samo ako si redovan na časovima teorije,
          lako položiš teorijski ispit, i uzbuđeno se upustiš u časove vožnje da
          bi iz prve prošao praktični ispit. Tvoj put do vozačke dozvole traje
          samo 3 meseca avanture!
        </Question>
        <Question title="Koji su načini plaćanja?">
          Plaćanje može biti u celosti (i tada te čeka popust), ili na rate dok
          traje tvoja vozačka avantura. Možeš koristiti čekove ili
          administrativnu zabranu – odaberi način koji ti najviše odgovara kako
          bi zakoračio u svet slobode!
        </Question>
        <Question title="Šta je uključeno u ukupnu cenu?">
          U ukupnu cenu uključeno je 40 časova teorijske obuke i 40 časova
          praktične obuke, kao i teorijski i praktični ispit. Takođe, tu su
          takse za MUP, lekarsko uverenje i obuka prve pomoći. Sve što ti treba
          da postaneš pravi vozač!
        </Question>
        <Question title="Koliko često imamo časove teorije?">
          Teorijska obuka se održava svaki radni dan, sa 3 uzbudljiva časa
          dnevno, što ukupno traje 13 radnih dana. Pripremi se da osvojiš znanje
          koje će te odvesti do tvoje vozačke dozvole!
        </Question>
        <Question title="Koliko često imamo časove vožnje?">
          Časove vožnje obično imaš 3 puta nedeljno, sa 2 uzbudljiva časa svaki
          dan. Oseti adrenalin dok savladaš vožnju i stičeš veštine koje će ti
          omogućiti slobodu na putu!
        </Question>
        <Question title="Koliko često se organizuje nova grupa polaznika?">
          Grupe organizujemo uglavnom jednom mesečno, tako da se pripremi na
          vreme i zakorači u ovu avanturu zajedno sa drugim budućim vozačima!
        </Question>
        <Question title="Da li postoji više termina predavanja ili samo jedan termin?">
          Teorijska obuka se najčešće održava u dva termina – prepodnevnom i
          poslepodnevnom. Odaberi onaj koji ti najviše odgovara i uživaj u
          učenju koje će te odvesti do slobode za volanom!
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
      {/* Accessibility: add aria-expanded and aria-controls to the button */}
      <button
        onClick={() => setOpen((pv) => !pv)}
        aria-expanded={open} // Indicates whether the content is expanded
        aria-controls={`answer-${title}`} // Links the button to the answer content
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: { color: "#009688" },
            closed: { color: "#009688" },
          }}
          className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-left text-lg font-medium"
        >
          {/* Wrapping title in h4 for semantic structure */}
          <h4 className="text-lg leading-relaxed md:text-left md:text-xl">
            {title}
          </h4>
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg", color: "#009688" },
            closed: { rotate: "0deg", color: "#009688" },
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
        className="overflow-hidden text-muted-foreground"
        id={`answer-${title}`} // Accessibility: adds id to answer content
      >
        <p
          className="text-lg leading-relaxed md:text-left md:text-xl"
          ref={ref}
        >
          {children}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
