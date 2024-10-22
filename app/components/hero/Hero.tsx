import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

const HeroSection = () => {
  return (
    <header
      id="home"
      className="relative mt-[-100px] flex h-screen flex-col items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)", // Apply the clip-path here
      }}
    >
      <div className="mt-[100px] flex w-full flex-col items-center justify-center rounded bg-black/50 p-8 py-12 text-center text-white shadow-lg">
        <Link
          href="https://www.google.com/localservices/prolist?g2lbs=AOHF13nlyA7p9IVXg93qISPgV1nvcVbxnWlARESP06Ju1DDw9V2Tb4u8d_-Ksd4AjmYMu66pTXN86VJKB5l89JJnVmCQLwpUsg%3D%3D&hl=en-RS&gl=rs&ssta=1&q=autoskola%20dt%20novi%20sad&oq=autoskola%20dt%20novi%20sad&slp=MgBSAggCYAB64AFDaFZoZFhSdmMydHZiR0VnWkhRZ2JtOTJhU0J6WVdSSWtyZXQ3cVcyZ0lBSVdpRVFBQkFCR0FBaUZXRjFkRzl6YTI5c1lTQmtkQ0J1YjNacElITmhaRElDYzNLU0FRNWtjbWwyYVc1blgzTmphRzl2YktvQlVCQUJLaEFpREdGMWRHOXphMjlzWVNCa2RDZ2RNaDhRQVNJYnYwR1FnMFJZWFJvSEVVR1k4UDJ4Y0E0Xy10d191M04yN1l5Tk1oa1FBaUlWWVhWMGIzTnJiMnhoSUdSMElHNXZkbWtnYzJGa5IBqAIKDS9nLzExcTlneHFxeGwKDS9nLzExeTY0ZzE1bTMKDS9nLzExamdka3kyZ24KDS9nLzExYjZoXzQwbXYKDS9nLzExajd6NTZtbDAKDS9nLzExZm1ncjY5YnEKDS9nLzExZjNuOHpwaHcKDS9nLzExbGtkMzhrZjcKDS9nLzExYzJsOTF0eWgKDC9nLzFwdHdycGczYwoML2cvMXlnNG0xNWdtCg0vZy8xMWhicXZwXzY4Cg0vZy8xMWZsNDY1d3NqCg0vZy8xMWR5ZjF6dnZ2CgwvZy8xcHR4cjd4MHMKDS9nLzExbXcwbjIybXkKDS9nLzExbHEzY250cXIKDS9nLzExdGMxaDlzOTYKDC9nLzExX3RtMTNndAoNL2cvMTFmZDUxbDRqbA%3D%3D&src=2&spp=Cg0vZy8xMXE5Z3hxcXhsOrgBV2lFUUFCQUJHQUFpRldGMWRHOXphMjlzWVNCa2RDQnViM1pwSUhOaFpESUNjM0tTQVE1a2NtbDJhVzVuWDNOamFHOXZiSm9CQUtvQlVCQUJLaEFpREdGMWRHOXphMjlzWVNCa2RDZ2RNaDhRQVNJYnYwR1FnMFJZWFJvSEVVR1k4UDJ4Y0E0Xy10d191M04yN1l5Tk1oa1FBaUlWWVhWMGIzTnJiMnhoSUdSMElHNXZkbWtnYzJGaw%3D%3D&serdesk=1&lrlstt=1728936136788&ved=2ahUKEwjt2vX-1I6JAxXE87sIHdAXH8UQvS56BAhREAE&scp=ChNnY2lkOmRyaXZpbmdfc2Nob29sEjYSEglVNOk9YRBbRxEo_iQ3aH1vCyIITm92aSBTYWQqFA1ZKvQaFRFGyAsdy5UDGyWES-ELMAAaDGF1dG9za29sYSBkdCIVYXV0b3Nrb2xhIGR0IG5vdmkgc2FkKg5Ecml2aW5nIHNjaG9vbA%3D%3D"
          className="flex flex-col items-center justify-center hover:animate-pulse"
        >
          <div>
            <p>5 Stars</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} fill="yellow" strokeWidth={0} />
              ))}
            </div>
            <p>Google Rating</p>
          </div>
        </Link>
        <Image
          src="/logo.svg"
          width={200}
          height={100}
          alt="DriveTeam Logo"
          className="mt-4"
        />
        <AnimatedHeading />
        <p className="text-lg italic text-muted">
          Spremni za putovanje koje će vam promeniti život?
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 space-x-0 md:flex-row md:space-x-4">
          <Button
            asChild
            className="rounded-full bg-teal-600 hover:bg-teal-500"
          >
            <Link href="#about">SAZNAJ VISE</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
