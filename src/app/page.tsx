import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroMockup from "@/components/landing/HeroMockup";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import HeroActions from "@/components/landing/HeroActions";
import { ContactProvider } from "@/components/landing/ContactModal";
import { faqs } from "@/lib/landing-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <ContactProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-zinc-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow"
      >
        Skip to content
      </a>

      <main id="main-content">
        <header className="flex flex-col items-center bg-gradient-to-b from-[#ff4500] to-white px-4 pt-5 md:pt-6 pb-0">
          <Navbar />

          <div className="flex flex-col items-center w-full max-w-[780px] mt-12 sm:mt-16 md:mt-30 px-1">
            <h1 className="text-[34px] leading-[1.12] sm:text-5xl md:text-[62px]/18 text-white text-center font-medium tracking-tighter">
              <span className="block">ERP & AI Automation</span>
              <span className="block mt-1.5 md:mt-0">A Complete Tech Partner</span>
            </h1>

            <p className="text-[13px] leading-relaxed sm:text-sm md:text-base/6.5 text-white/95 text-center max-w-[340px] sm:max-w-[600px] mt-3 md:mt-2 font-normal">
              Unify operations, automate workflows, and scale faster
              <span className="hidden sm:inline"> </span>
              <br className="hidden sm:block" />
              with software built for real businesses.
            </p>

            <HeroActions />
          </div>

          <HeroMockup />
        </header>

        <Features />
        <Testimonials />
        <Faq />
      </main>

      <Footer />
    </ContactProvider>
  );
}
