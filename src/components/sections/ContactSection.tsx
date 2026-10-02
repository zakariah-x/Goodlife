"use client";

import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-24 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Contact & Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            Get In Touch With <span className="text-gradient">{SITE_CONFIG.shortName}</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Based in Sharjah, serving all UAE Emirates. Available 24/7 on Call & WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-800">
            <div className="space-y-6">
              {/* Quick WhatsApp Action Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg">
                <h3 className="text-lg font-heading font-bold mb-1">
                  Sell Your Car Instantly
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mb-3.5">
                  Click to chat directly with our UAE valuation expert.
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-sm shadow transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
                  </svg>
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone & WhatsApp
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">
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
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Our Location — UAE
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">
                      {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Working Hours
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Email Us
                    </h4>
                    <p className="text-base font-semibold">
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

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Follow Our Official Social Media
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={SITE_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:opacity-90 flex items-center gap-1.5"
                >
                  WhatsApp
                </a>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-semibold hover:opacity-90 flex items-center gap-1.5"
                >
                  Instagram
                </a>
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-semibold hover:opacity-90 flex items-center gap-1.5"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Exact GPS Coordinates */}
          <div className="lg:col-span-6 glass-panel overflow-hidden rounded-2xl min-h-[420px] border border-slate-200 dark:border-slate-800">
            <iframe
              src={SITE_CONFIG.googleMapsEmbedUrl}
              title="Sharjah Auto Scrap LLC — Exact GPS Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
