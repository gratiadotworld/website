import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 py-44">
      <h1 className="text-6xl font-semibold">WTF is Gratia.World?</h1>
      <Image
        src="/images/concerts.jpg"
        alt="Grateful experience"
        height={450}
        width={800}
        className="rounded-2xl overflow-hidden blur-[1px] hover:blur-none transition-all ease-in-out shadow-md object-cover"
      />
      <p className="text-2xl text-white/40 text-center max-w-sm">
        Gratia.World is an events ticketing platform designed as an experience
        platform serving creators.
      </p>
      <Button className="shadow-md">Get started</Button>
    </div>
  );
};

export default Hero;
