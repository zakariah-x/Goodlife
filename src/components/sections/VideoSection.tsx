"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function VideoSection() {
  return (
    <section
      id="video"
      className="py-20 scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d1f12] to-slate-950 text-white"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Watch Us In Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            See How We Handle <span className="text-gradient">Your Scrap Car</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Watch a real pickup and car scrapping operation by Sharjah Auto Scrap LLC across the UAE.
          </p>
        </div>

        {/* Video Frame Card */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[380px] bg-white/5 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 sm:p-5 shadow-2xl">
            {/* Live Demo Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold tracking-wider shadow-lg">
              ▶ LIVE DEMO
            </div>

            {/* YouTube Shorts Vertical 9:16 Aspect Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${SITE_CONFIG.youtubeShortsId}?rel=0&modestbranding=1&playsinline=1`}
                title="Sharjah Auto Scrap LLC — Real Car Pickup & Scrapping UAE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Sub-caption & CTA */}
            <div className="mt-4 text-center">
              <p className="text-xs sm:text-sm text-slate-300 mb-3">
                🚛 Free doorstep pickup & instant cash across all UAE Emirates
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl btn-primary-emerald text-white font-bold text-sm"
              >
                <span>Get My Free Quote Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
