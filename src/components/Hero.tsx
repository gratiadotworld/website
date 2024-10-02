import Image from "next/image";
import React from "react";
import Signup from "./Signup";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 py-44">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">
        WTF is Gratia.World?
      </h1>
      <Image
        src="/images/concerts.jpg"
        alt="Grateful experience"
        height={450}
        width={800}
        className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out shadow-md object-cover"
      />
      <p className="text-2xl text-white/40 text-center max-w-sm">
        Gratia.World is an events ticketing platform designed as an experience
        platform serving creators.
      </p>
      <Signup>
        <Button className="shadow-md">Get started</Button>
      </Signup>
    </div>
  );
};

// https://app.deform.cc/form/d46ccff4-2f95-49b0-a7d4-5b18d5956f24/?page_number=0

export default Hero;
