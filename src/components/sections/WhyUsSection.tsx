"use client";

import { SITE_CONFIG } from "@/lib/constants";

const FEATURES = [
  {
    icon: "💰",
    title: "Top UAE Market Rate",
    desc: "Guaranteed top-dollar evaluation based on actual salvage, metal, and usable parts value.",
  },
  {
    icon: "🚛",
    title: "Free UAE-Wide Pickup",
    desc: "Zero towing fees across Sharjah, Dubai, Abu Dhabi, Ajman, RAK, UAQ & Fujairah.",
  },
  {
    icon: "💵",
    title: "Instant Cash Payment",
    desc: "Cash handed directly to you before loading the car, with transparent paperwork assistance.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            The <span className="text-gold">{SITE_CONFIG.shortName}</span> Promise
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Fast, honest, and reliable scrap car buying across all Emirates of the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => (
            <div
              key={index}
              className="glass-panel zoom-card p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
