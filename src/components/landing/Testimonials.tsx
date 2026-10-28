"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/landing-data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3
    );
  };

  const visible = testimonials.slice(
    currentIndex,
    isMobile ? currentIndex + 1 : currentIndex + 3
  );

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center border-t border-slate-200/80">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9">
          <div>
            <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4 tracking-tight text-center md:text-left">
              Results our clients talk about
            </h2>
            <p className="text-sm text-zinc-800 tracking-tight max-w-xl text-center md:text-left mx-auto md:mx-0">
              From faster closes to automated workflows — hear how teams run operations with Zkqy.
            </p>
          </div>

          <div className="hidden md:flex justify-end gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="h-10 w-10 rounded-none bg-white border border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition-all text-neutral-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="h-10 w-10 rounded-none bg-white border border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition-all text-neutral-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border-t border-l border-zinc-200">
          {visible.map((item) => (
            <div
              key={item.id}
              className="relative p-6 md:p-8 flex flex-col justify-between gap-4 border-r border-b border-zinc-200 bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#FFF0EB] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-transparent fill-[#FF8F20]"
                        aria-hidden="true"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-400 font-normal">{item.date}</p>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">{item.text}</p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  alt={`${item.name} avatar`}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium text-zinc-800 leading-snug">{item.name}</h3>
                  <p className="text-xs text-zinc-600">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden max-[768px]:flex items-center justify-center mt-5 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-neutral-800" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
