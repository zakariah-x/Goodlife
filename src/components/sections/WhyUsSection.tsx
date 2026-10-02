"use client";

import { Coins, Truck, Banknote, CheckCircle, XCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const FEATURES = [
  {
    icon: Coins,
    title: "Guaranteed Top UAE Market Rate",
    desc: "We calculate genuine scrap metal value, battery salvage, and reusable spare parts pricing to give you the highest possible payout in UAE Dirhams.",
  },
  {
    icon: Truck,
    title: "100% Free Doorstep Towing",
    desc: "Zero recovery or towing deductions. Our specialized flatbed recovery trucks arrive directly at your location anywhere in UAE at no cost.",
  },
  {
    icon: Banknote,
    title: "Instant Cash Payment on Pickup",
    desc: "Cash is counted and handed directly to you before the car is loaded onto our recovery truck. Fast, honest, and completely secure.",
  },
];

const COMPARISON = [
  {
    feature: "Payout Method",
    us: "Instant Cash on Handover",
    others: "Delayed cheques or bank delays",
  },
  {
    feature: "Towing & Recovery Fee",
    us: "100% Free Doorstep Towing across UAE",
    others: "Deducts 200 – 400 AED towing fee",
  },
  {
    feature: "Official Paperwork",
    us: "Complete RTA / Police cancellation help",
    others: "No assistance; customer left with fines",
  },
  {
    feature: "Pickup Speed",
    us: "Same-day collection (within 30-60 mins)",
    others: "Takes 2 to 4 days or unconfirmed visits",
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
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            The <span className="text-gold">{SITE_CONFIG.shortName}</span> Advantage
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why thousands of car owners across Sharjah, Dubai, Abu Dhabi, and
            Ajman trust us over traditional dealers.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="glass-panel zoom-card p-8 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-slate-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Box */}
        <div className="max-w-4xl mx-auto glass-panel overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
          <div className="p-6 bg-slate-950 text-white flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-heading font-bold">
              How We Compare To Others
            </h3>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
              Verified UAE Standard
            </span>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 items-center gap-3 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="sm:col-span-4 font-bold text-sm text-slate-900 dark:text-white">
                  {row.feature}
                </div>
                <div className="sm:col-span-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>{row.us}</span>
                </div>
                <div className="sm:col-span-4 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 p-2.5">
                  <XCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
