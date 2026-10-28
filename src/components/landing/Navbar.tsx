"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ContactTrigger } from "./ContactModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#ff6133] border border-white/40 rounded-full pl-4 md:pl-6 pr-3 md:pr-2 py-1.5 w-full max-w-3xl relative z-50">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="w-8 h-8" variant="white" priority />
        <span className="text-white font-semibold text-lg tracking-tight">Zkqy</span>
      </Link>

      <div
        id="menu"
        className={`max-md:absolute max-md:bg-black/50 max-md:h-[100dvh] max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:backdrop-blur flex items-center gap-8 z-50 md:gap-6 md:absolute md:left-1/2 md:-translate-x-1/2 ${
          mobileOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        <a href="/" onClick={() => setMobileOpen(false)} className="text-white hover:text-white text-sm">
          Home
        </a>
        <a href="#features" onClick={() => setMobileOpen(false)} className="text-white/95 hover:text-white text-sm">
          Solutions
        </a>
        <a href="#faq" onClick={() => setMobileOpen(false)} className="text-white/95 hover:text-white text-sm">
          Services
        </a>
        <a href="#faq" onClick={() => setMobileOpen(false)} className="text-white/95 hover:text-white text-sm">
          FAQ
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="md:hidden bg-zinc-950 text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <ContactTrigger className="hidden md:inline-block bg-white hover:bg-white/90 text-zinc-800 px-6 py-3 rounded-full text-sm font-medium transition cursor-pointer">
          Contact Us
        </ContactTrigger>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="md:hidden bg-white text-zinc-800 p-1.5 rounded-md aspect-square font-medium transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
