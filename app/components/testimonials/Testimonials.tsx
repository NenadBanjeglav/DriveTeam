import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import DownArrow from "../DownArrow";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex h-1/2 w-full flex-col items-center justify-center p-8"
    >
      <h2 className="my-16 text-center text-4xl font-bold italic text-teal-600">
        Šta kažu naši učenici?
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-3xl font-semibold text-teal-500">
                      {testimonial.name}
                    </span>
                    <span className="text-yellow-500">
                      {"⭐".repeat(testimonial.rating)}
                    </span>

                    <blockquote className="hover:no-scrollbar relative my-2 h-96 cursor-pointer overflow-hidden text-ellipsis p-4 text-lg italic text-muted-foreground hover:overflow-auto">
                      <Quote
                        size={50}
                        className="absolute left-0 top-0 text-teal-500/20"
                      />
                      {testimonial.review}
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <DownArrow href="#steps" />
    </section>
  );
};

export default Testimonials;
