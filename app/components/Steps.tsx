import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { processSteps } from "@/lib/data";
import Link from "next/link";
import React from "react";
import DownArrow from "./DownArrow";

const Steps = () => {
  return (
    <section
      id="steps"
      className="flex flex-col items-center justify-center p-8"
    >
      <h2 className="my-16 text-center text-4xl font-bold italic text-teal-600">
        Kako do vozačke dozvole?
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <Card
            key={step.name}
            className="flex flex-col items-center justify-center p-6"
          >
            <CardHeader>
              <CardTitle className="mb-4 flex flex-col items-center justify-center gap-2 text-center text-teal-500">
                <step.icon size={40} />
                {step.name}
              </CardTitle>
              <CardDescription className="text-center text-lg text-teal-500"></CardDescription>
            </CardHeader>
            <CardContent className="mt-[-20px] text-center">
              <p className="italic text-muted-foreground">{step.description}</p>
            </CardContent>
            <CardFooter className="mt-4">
              <Button
                asChild
                className={`rounded-full bg-teal-600 hover:bg-teal-500`}
              >
                {step.name === "Upis" ? (
                  <Link href={step.href}>PRIJAVI SE</Link>
                ) : (
                  <Link href={step.href}>SAZNAJ JOS</Link>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <DownArrow href="#pricing" />
    </section>
  );
};

export default Steps;
