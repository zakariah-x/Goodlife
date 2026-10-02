"use client";

import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

const GALLERY_ITEMS = [
  {
    image: "/images/real/scrap_1.jpg",
    title: "Ford Edge — Dismantling in Progress",
    badge: "Eco Salvage Yard",
    location: "Industrial Area, Sharjah",
    status: "Instant Cash Handover",
    alt: "Car Dismantling and Scrap Yard UAE",
  },
  {
    image: "/images/real/scrap_2.jpg",
    title: "Mitsubishi Lancer & Nissan Sunny",
    badge: "Parts & Metal Recycling",
    location: "Al Quoz, Dubai",
    status: "Purchased on Spot",
    alt: "Scrap Car Yard Parts Recovery UAE",
  },
  {
    image: "/images/real/scrap_3.jpg",
    title: "Lexus LS400 & Chevrolet Impala",
    badge: "End-of-Life Vehicles",
    location: "Mussafah, Abu Dhabi",
    status: "RTA Cancellation Done",
    alt: "End of Life Cars Scrapped UAE",
  },
  {
    image: "/images/real/car_10.jpg",
    title: "Accident Damaged Sedans",
    badge: "Total Loss Recovery",
    location: "Al Jurf, Ajman",
    status: "Free Flatbed Towing",
    alt: "Accident & Scrap Vehicles UAE",
  },
  {
    image: "/images/real/car_1.jpg",
    title: "Engine Breakdown Vehicles",
    badge: "Mechanical Failure",
    location: "Al Sajaa, Sharjah",
    status: "Cash Paid on Pickup",
    alt: "Engine Breakdown Cars UAE",
  },
  {
    image: "/images/real/car_2.jpg",
    title: "Expired Mulkiya Fleet Cars",
    badge: "Registration Expired",
    location: "Ras Al Khaimah",
    status: "Paperwork Assisted",
    alt: "Expired Mulkiya Vehicles UAE",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Verified Recent Purchases
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Recent Scrap & Salvage Cars Bought Across the{" "}
            <span className="text-gradient">UAE</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Real photos from our daily recovery, vehicle collection, and scrap
            yard operations in all Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="glass-panel zoom-card overflow-hidden group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                  {item.badge}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
