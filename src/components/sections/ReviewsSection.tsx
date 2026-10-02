"use client";

import { Star, CheckCircle, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Mohammed Al-Zaabi",
    location: "Al Barsha, Dubai",
    car: "Nissan Patrol (Accident Damaged)",
    text: "Sold my accident-damaged Patrol after a collision. They gave me a fair quote within 15 minutes on WhatsApp and picked it up from my villa the same afternoon with instant cash. Best car scrap service in UAE!",
    rating: 5,
    date: "Verified Review",
  },
  {
    name: "Tariq Al-Hammadi",
    location: "Industrial Area 4, Sharjah",
    car: "Toyota Camry (Expired Mulkiya)",
    text: "I had an old Camry sitting in my parking with expired registration for over a year. Sharjah Auto Scrap handled the doorstep towing for free and guided me through the traffic police cancellation certificate without stress.",
    rating: 5,
    date: "Verified Review",
  },
  {
    name: "Rajesh Sharma",
    location: "Al Rashidiya, Ajman",
    car: "Honda Accord (Blown Engine)",
    text: "Completely transparent and honest team. Other dealers tried to deduct 300 AED for towing, but these guys paid the exact cash amount agreed on WhatsApp before loading the vehicle onto the flatbed.",
    rating: 5,
    date: "Verified Review",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Trusted By 1,200+ Car Owners in <span className="text-gradient">UAE</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Read real feedback from car owners who sold their scrap, damaged, and non-running cars to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="glass-panel zoom-card p-6 sm:p-7 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 rounded-2xl flex flex-col justify-between relative shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-500/30" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {rev.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    {rev.date}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                  Vehicle: <span className="text-slate-700 dark:text-slate-300">{rev.car}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
