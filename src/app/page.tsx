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

      <main>
        <header className="flex flex-col items-center bg-gradient-to-b from-[#ff4500] to-white px-4 pt-6">
          <Navbar />

          <h1 className="text-5xl md:text-[62px]/18 text-white text-center max-w-[780px] mt-24 md:mt-30 leading-tight font-medium tracking-tighter">
            ERP & AI Automation
            <br />
            A Complete Tech Partner
          </h1>

          <p className="text-sm md:text-base/6.5 text-white text-center max-w-[600px] mt-2 font-normal">
            Unify operations, automate workflows, and scale faster{" "}
            <br className="hidden sm:block" /> with software built for real businesses.
          </p>

          <HeroActions />

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
