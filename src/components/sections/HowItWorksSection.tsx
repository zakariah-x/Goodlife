"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

const STEPS = [
  {
    number: "1",
    image: "/images/step_quote.jpg",
    title: "1. Get Instant Quote",
    desc: `Call or WhatsApp ${SITE_CONFIG.phone} with your car details & photos to receive our top cash offer instantly.`,
    alt: "Step 1 Get Instant Quote & Valuation",
  },
  {
    number: "2",
    image: "/images/free_pickup.jpg",
    title: "2. Free Doorstep Towing",
    desc: "Our professional recovery tow truck arrives anywhere in the UAE at your preferred time for 100% free pickup.",
    alt: "Step 2 Free Flatbed Tow Truck Pickup UAE",
  },
  {
    number: "3",
    image: "/images/step_cash.jpg",
    title: "3. Instant Cash Payment",
    desc: "We hand over your full cash payment on the spot and assist with all necessary cancellation paperwork.",
    alt: "Step 3 Instant Cash Dirham Handover Payout",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            3 Easy Steps
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            How To Sell Your Car <span className="text-gradient">Today</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Get top cash for your scrap or junk car anywhere in the UAE in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="glass-panel zoom-card overflow-hidden relative border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              {/* Step Badge */}
              <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-emerald-600 text-white font-heading font-bold text-base flex items-center justify-center shadow-lg">
                {step.number}
              </div>

              {/* Step Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
