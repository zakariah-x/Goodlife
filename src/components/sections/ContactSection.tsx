"use client";

import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            24/7 Fast Contact & Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Get In Touch With <span className="text-gradient">{SITE_CONFIG.shortName}</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Main yard in Sharjah Industrial Area, recovery fleet operating across all UAE Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
            <div className="space-y-6">
              {/* Quick WhatsApp Action Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold mb-1">
                    Sell Your Car Instantly
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mb-4">
                    Send car pictures on WhatsApp for a fast evaluation in 15 minutes.
                  </p>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                    <span>Start WhatsApp Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone & WhatsApp
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">
                      <a href={SITE_CONFIG.phoneTel} className="hover:text-emerald-500">
                        {SITE_CONFIG.phone}
                      </a>{" "}
                      /{" "}
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        {SITE_CONFIG.phoneFormatted}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Main Yard & Workshop
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">
                      {SITE_CONFIG.location}
                    </p>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      Doorstep recovery available in Dubai, Abu Dhabi, Ajman & all Emirates
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Operating Hours
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Official Email
                    </h4>
                    <p className="text-base font-semibold mt-0.5">
                      <a
                        href={SITE_CONFIG.emailMailto}
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Media with Clean SVG Icons */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Follow Our Official Social Media
              </h4>
              <div className="flex flex-wrap gap-3">
                {/* Official Facebook with clean brand SVG */}
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105"
                  aria-label="Official Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>

                {/* Official Instagram with clean gradient SVG */}
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105"
                  aria-label="Official Instagram Page"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                {/* Official WhatsApp */}
                <a
                  href={SITE_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105"
                  aria-label="Official WhatsApp Support"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Exact GPS Coordinates */}
          <div className="lg:col-span-6 glass-panel overflow-hidden rounded-2xl min-h-[440px] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col">
            <div className="p-3.5 bg-slate-900 text-white text-xs font-semibold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Verified GPS: 25°17&apos;36.6&quot;N 55°25&apos;02.0&quot;E
              </span>
              <span className="text-emerald-400">Open in Maps</span>
            </div>
            <iframe
              src={SITE_CONFIG.googleMapsEmbedUrl}
              title="Sharjah Auto Scrap LLC — Exact GPS Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow min-h-[390px] border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
