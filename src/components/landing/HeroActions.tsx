"use client";

import { ContactTrigger } from "./ContactModal";

export default function HeroActions() {
  return (
    <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 mt-6 md:mt-8 w-full">
      <a
        href="#features"
        className="border border-white hover:bg-orange-200/30 text-white text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full tracking-tight transition cursor-pointer font-medium whitespace-nowrap"
      >
        Explore Solutions
      </a>
      <ContactTrigger className="bg-white hover:bg-white/90 text-xs sm:text-sm text-zinc-800 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full tracking-tight transition cursor-pointer font-medium whitespace-nowrap">
        Talk to Us
      </ContactTrigger>
    </div>
  );
}
