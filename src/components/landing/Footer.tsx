"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { ContactTrigger } from "./ContactModal";

const sections = [
  {
    title: "Solutions",
    links: [
      { label: "ERP Platforms", href: "#features" },
      { label: "AI Automation", href: "#features" },
      { label: "Integrations", href: "#features" },
      { label: "Analytics", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Implementation", href: "#" },
      { label: "FAQs", href: "#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-gray-500/20 text-gray-500">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" variant="orange" />
              <span className="font-extrabold text-slate-900 text-xl tracking-tight">Zkqy</span>
            </Link>
            <p className="max-w-[410px] mt-6 text-sm text-slate-500 leading-relaxed">
              A software company focused on ERP solutions and AI automation — helping businesses unify data, cut manual work, and scale with confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                <ul className="text-sm space-y-2 text-slate-500">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-[#ff4500] hover:underline transition">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">Company</h3>
              <ul className="text-sm space-y-2 text-slate-500">
                <li>
                  <a href="#" className="hover:text-[#ff4500] hover:underline transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ff4500] hover:underline transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ff4500] hover:underline transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <ContactTrigger className="hover:text-[#ff4500] hover:underline transition cursor-pointer">
                    Contact Us
                  </ContactTrigger>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="py-6 text-center text-sm md:text-base text-gray-500/80">
          Copyright 2026 © <span className="font-semibold text-slate-700">Zkqy</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
