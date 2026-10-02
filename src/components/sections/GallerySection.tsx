"use client";

import Image from "next/image";

const GALLERY_ITEMS = [
  {
    image: "/images/real/scrap_1.jpg",
    title: "Car Dismantling in Progress",
    badge: "Scrap Yard — UAE",
    alt: "Car Dismantling and Scrap Yard UAE",
  },
  {
    image: "/images/real/scrap_2.jpg",
    title: "Parts Recovery & Recycling",
    badge: "Eco Recycling — UAE",
    alt: "Scrap Car Yard Parts Recovery UAE",
  },
  {
    image: "/images/real/scrap_3.jpg",
    title: "End-of-Life Vehicle Scrapping",
    badge: "Purchased in UAE",
    alt: "End of Life Cars Scrapped UAE",
  },
  {
    image: "/images/real/car_10.jpg",
    title: "Accident & Scrap Vehicles",
    badge: "Purchased in UAE",
    alt: "Accident & Scrap Vehicles UAE",
  },
  {
    image: "/images/real/car_1.jpg",
    title: "Engine Breakdown Cars",
    badge: "Instant Cash Paid",
    alt: "Engine Breakdown Cars UAE",
  },
  {
    image: "/images/real/car_2.jpg",
    title: "Expired Mulkiya Vehicles",
    badge: "Paperwork Assisted",
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
            Real Scrap Cars We Buy
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            Recent Vehicles Bought Across the{" "}
            <span className="text-gradient">UAE</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Real photos of vehicles, scrap cars, and dismantling operations by
            Sharjah Auto Scrap LLC across all Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="glass-panel zoom-card overflow-hidden group border border-slate-200 dark:border-slate-800"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                  {item.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
