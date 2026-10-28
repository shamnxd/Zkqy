"use client";

import { ContactTrigger } from "./ContactModal";

export default function HeroActions() {
  return (
    <div className="flex gap-4 mt-8">
      <a
        href="#features"
        className="border border-white hover:bg-orange-200/30 text-white text-sm px-6 py-3 rounded-full tracking-tight transition cursor-pointer font-medium"
      >
        Explore Solutions
      </a>
      <ContactTrigger className="bg-white hover:bg-white/90 text-sm text-zinc-600 px-5 py-3 rounded-full tracking-tight transition cursor-pointer font-medium">
        Talk to Us
      </ContactTrigger>
    </div>
  );
}
