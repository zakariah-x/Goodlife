"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
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
                  LLC • UAE-Wide Scrap Buying
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              UAE&apos;s trusted vehicle salvage & scrap buyer. 100% free doorstep
              flatbed towing and instant cash payout across Dubai, Sharjah, Abu
              Dhabi, Ajman, Ras Al Khaimah, Umm Al Quwain & Fujairah.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified UAE Auto Recycling & Scrap Disposal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
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
                  Recent Purchases
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
                <Link href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Official Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {SITE_CONFIG.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.emailMailto}
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
            </ul>

            {/* Official Social Media Icons */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-3">
                {/* Official Facebook Icon */}
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official Facebook Page"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* Official Instagram Icon */}
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official Instagram Page"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* Official WhatsApp Icon */}
                <a
                  href={SITE_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official WhatsApp Support"
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
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
