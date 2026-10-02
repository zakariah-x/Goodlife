"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  User,
  MapPin,
  Car,
  FileCheck2,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
} from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
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
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-900/80" />

      {/* Ambient Particle Canvas */}
      <ParticleCanvas />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Trust Badges, CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Top Rating & Service Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Serving All 7 UAE Emirates 24/7</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>4.9 / 5 Rating</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.12]">
            Sell Your Scrap, Junk & Accidental Car for{" "}
            <span className="text-gradient">Instant Cash</span> in UAE
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            We purchase all types of vehicles across Sharjah, Dubai, Abu Dhabi,
            Ajman & all Emirates. Guaranteed highest payout, 100% free doorstep
            recovery towing, and complete paperwork assistance.
          </p>

          {/* Value Guarantee Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Top Cash Offer</span>
                <span className="block text-[11px] text-slate-400">Guaranteed Valuation</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Free Doorstep Towing</span>
                <span className="block text-[11px] text-slate-400">Zero Pickup Fees</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Instant Payment</span>
                <span className="block text-[11px] text-slate-400">Cash on Handover</span>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-whatsapp-brand text-white font-bold text-sm sm:text-base shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Get Free Cash Offer</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Car Valuation Widget */}
        <div id="valuation" className="lg:col-span-5 scroll-mt-28">
          <div className="glass-panel p-6 sm:p-7 bg-slate-900/90 border border-emerald-500/30 text-white shadow-2xl rounded-2xl relative">
            {/* Header Badge */}
            <div className="mb-5 text-center pb-4 border-b border-slate-800">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                ⚡ 15-Minute Cash Estimate
              </span>
              <h2 className="text-2xl font-heading font-black text-white">
                Instant Car Valuation
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your car details to get an immediate cash quote on WhatsApp
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone + UAE Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp Phone <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="058 890 0019"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    UAE Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm text-white outline-none transition-all"
                    >
                      {UAE_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc} className="bg-slate-900 text-white">
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Car Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Car Make, Model & Year
                </label>
                <div className="relative">
                  <Car className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="e.g. Toyota Prado 2014, Honda Civic"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Vehicle Condition
                </label>
                <div className="relative">
                  <CheckCircle2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm text-white outline-none transition-all"
                  >
                    {CAR_CONDITIONS.map((cond) => (
                      <option key={cond} value={cond} className="bg-slate-900 text-white">
                        {cond}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl btn-primary-emerald font-bold text-sm sm:text-base flex items-center justify-center gap-2 mt-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Get WhatsApp Cash Quote</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> No Obligation
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Free
                </span>
                <span>•</span>
                <span>🔒 Privacy Protected</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
