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

const Steps = () => {
  return (
    <section id="steps" className="bg-teal-100/50 p-8">
      <h2 className="my-16 text-center text-4xl font-bold italic text-teal-600">
        Kako do vozačke dozvole?
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
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
            <CardContent className="mt-[-20px] text-center text-muted-foreground">
              <p>{step.description}</p>
            </CardContent>
            <CardFooter className="mt-4">
              <Button
                asChild
                className="rounded-full bg-teal-600 hover:bg-teal-500"
              >
                <Link href={step.href}>Saznaj vise</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Steps;
