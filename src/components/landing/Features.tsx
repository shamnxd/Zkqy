import { features } from "@/lib/landing-data";
import { FeatureIcon } from "./FeatureIcons";

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center border-t border-slate-200/80"
    >
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full mb-9">
        <h2 id="features-heading" className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4 tracking-tight">
          Built for ERP & intelligent automation
        </h2>
        <p className="text-sm text-zinc-800 tracking-tight max-w-xl">
          From core business systems to AI-driven workflows, Zkqy helps teams run faster with fewer manual handoffs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border-t border-l border-zinc-200">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`relative p-6 md:p-8 flex flex-col gap-4 border-r border-b border-zinc-200 transition-all duration-300 ${
              index === 0
                ? "bg-gradient-to-b from-white to-[#FFF0EB]"
                : "bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#FFF0EB]"
            }`}
          >
            {feature.hasAccent && (
              <div className="absolute left-0 top-12 bottom-12 md:top-17 md:bottom-17 w-1.5 bg-[#ff4500] rounded-r" />
            )}

            <div className="flex items-center gap-2.5 mb-1">
              <FeatureIcon name={feature.icon} />
              <h3 className="text-sm font-medium text-zinc-800 leading-snug">{feature.title}</h3>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed mb-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
