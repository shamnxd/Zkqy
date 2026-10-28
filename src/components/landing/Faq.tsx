"use client";

import { useState } from "react";
import { faqs } from "@/lib/landing-data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center border-t border-slate-200/80">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm text-zinc-800 tracking-tight max-w-xl">
            Everything you need to know about our ERP platforms, AI automation, and implementation process.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-2 w-full">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div className="border-b border-slate-200 py-4 w-full" key={faq.question}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left cursor-pointer"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <h3 className="text-base font-medium text-slate-900 pr-4">{faq.question}</h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${open ? "rotate-180" : ""} transition-all duration-500 ease-in-out shrink-0`}
                    aria-hidden="true"
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p
                  className={`text-sm text-slate-500 transition-all duration-500 ease-in-out ${
                    open
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
