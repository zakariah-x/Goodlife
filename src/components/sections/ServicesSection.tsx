"use client";

import { Car, ShieldAlert, FileText, Wrench, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SERVICES = [
  {
    icon: Car,
    title: "Junk & Scrap Cars",
    badge: "Highest Metal Value",
    desc: "Completely broken, rusted, or scrap vehicles. We calculate the maximum salvage parts and raw metal recycling price.",
    perks: ["Same-Day Cash", "Free Flatbed Towing", "No Hidden Charges"],
  },
  {
    icon: ShieldAlert,
    title: "Accident & Crashed Cars",
    badge: "Total Loss Accepted",
    desc: "Heavy collision damage, chassis damage, or insurance total loss cars. Avoid expensive garage repair bills.",
    perks: ["Instant On-Site Assessment", "Towing from Police Yard/Home", "Quick Disposal"],
  },
  {
    icon: FileText,
    title: "Expired Mulkiya / Registration",
    badge: "Paperwork Assisted",
    desc: "Vehicles with long-expired registration or failed inspection tests. We assist with legal transfer and cancellation.",
    perks: ["Police/RTA Assistance", "Hassle-Free Transfer", "Clean Paper Trail"],
  },
  {
    icon: Wrench,
    title: "Non-Running Engines & Motors",
    badge: "Mechanical Failures",
    desc: "Seized engines, blown head gaskets, failed transmissions, or dead electrical systems. Any mechanical state accepted.",
    perks: ["Heavy Duty Recovery", "No Need to Repair", "Instant Cash on Pickup"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 scroll-mt-24 bg-slate-100/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Our Comprehensive Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            What We Buy Across the <span className="text-gold">UAE</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Fair, transparent, and guaranteed cash purchases for every vehicle
            type and condition in all Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel zoom-card p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 rounded-2xl relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold mb-2 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  {service.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 pt-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Cash Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
