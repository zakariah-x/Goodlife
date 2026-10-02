"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { SITE_CONFIG, UAE_LOCATIONS, CAR_CONDITIONS } from "@/lib/constants";

const SLIDES = [
  "/images/hero_bg.jpg",
  "/images/real/car_1.jpg",
  "/images/real/car_2.jpg",
  "/images/real/car_3.jpg",
  "/images/real/car_4.jpg",
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Sharjah");
  const [carModel, setCarModel] = useState("");
  const [condition, setCondition] = useState("Junk / Scrap Car");

  // Auto transition slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${SITE_CONFIG.name},%0A%0A*Car Valuation Request*%0A• Name: ${encodeURIComponent(
      name
    )}%0A• WhatsApp: ${encodeURIComponent(phone)}%0A• Location: ${encodeURIComponent(
      location
    )}%0A• Car: ${encodeURIComponent(
      carModel || "N/A"
    )}%0A• Condition: ${encodeURIComponent(
      condition
    )}%0A%0APlease provide your best cash offer!`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } transform transition-transform duration-7000`}
          >
            <Image
              src={src}
              alt="Sharjah Auto Scrap Recovery"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark Modern Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-900/80" />

      {/* Ambient Particle Canvas */}
      <ParticleCanvas />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Badges, CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* UAE Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <span>📍</span>
            <span>Serving All Emirates Across the UAE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.15]">
            Instant Cash for{" "}
            <span className="text-gradient">Scrap & Junk Cars</span> Across the UAE
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            We buy <strong>Junk, Damaged, Accident Cars</strong> &{" "}
            <strong>Expired Mulkiya / Non-Running Vehicles</strong> across all UAE
            Emirates. Free doorstep towing & instant cash payment on pickup.
          </p>

          {/* Quick Value Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10">
              ⚡ <span>Top Cash Offer</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10">
              🚛 <span>Free UAE Towing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10">
              💵 <span>Same-Day Cash</span>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-whatsapp-brand text-white font-bold text-sm sm:text-base shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
              </svg>
              <span>Get Free Cash Offer</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Instant Valuation Form Card */}
        <div id="valuation" className="lg:col-span-5 scroll-mt-28">
          <div className="glass-panel p-6 sm:p-8 bg-slate-900/85 dark:bg-slate-900/90 border border-emerald-500/30 text-white shadow-2xl rounded-2xl">
            <div className="mb-5 text-center">
              <h2 className="text-2xl font-heading font-bold text-white">
                Free Car Valuation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Get an instant cash offer on WhatsApp in 2 minutes
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-400 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp Number <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0588900019"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your UAE Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white outline-none transition-all"
                  >
                    {UAE_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc} className="bg-slate-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Car Make, Model & Year
                </label>
                <input
                  type="text"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="e.g. Toyota Camry 2012 / Nissan Sunny"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-400 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Car Condition
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white outline-none transition-all"
                >
                  {CAR_CONDITIONS.map((cond) => (
                    <option key={cond} value={cond} className="bg-slate-900 text-white">
                      {cond}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl btn-primary-emerald font-bold text-sm sm:text-base flex items-center justify-center gap-2 mt-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
                </svg>
                <span>Get WhatsApp Cash Offer</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
