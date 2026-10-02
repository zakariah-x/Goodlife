"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading font-black text-xl text-white">
                  {SITE_CONFIG.shortName}
                </span>
                <span className="block text-xs font-semibold text-emerald-400">
                  LLC • UAE
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              UAE&apos;s trusted scrap car buyer. Free doorstep towing and same-day
              cash payment across Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al
              Khaimah, Umm Al Quwain & Fujairah.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#valuation" className="hover:text-emerald-400 transition-colors">
                  Instant Valuation
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-emerald-400 transition-colors">
                  Recent Scrap Cars
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#video" className="hover:text-emerald-400 transition-colors">
                  Live Action Video
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-emerald-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
                  </svg>
                  <span>WhatsApp: {SITE_CONFIG.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.emailMailto}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <span>📸 Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <span>👍 Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {SITE_CONFIG.name}. All Rights Reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href={SITE_CONFIG.credits.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              {SITE_CONFIG.credits.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
