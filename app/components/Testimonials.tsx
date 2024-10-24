import React from "react";
import { InfiniteMovingCards } from "@/components/ui/IniniteMovingCards";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center overflow-x-hidden p-8 lg:py-12"
    >
      <h3 className="mb-10 text-center text-4xl font-semibold italic text-teal-600 md:mb-20 md:text-6xl">
        Šta kažu naši polaznici?
      </h3>
      {/* <div className="max-w-2xl">
        <Image
          src="/testimonials.jpg"
          width={400}
          height={400}
          alt="Slika direktora"
          className="rounded-full object-cover shadow-2xl"
        />
      </div> */}
      <div className="mx-auto mb-16 flex max-w-7xl flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-28">
        <div className="my-8 flex basis-2/4 flex-col items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
