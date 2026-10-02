"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Phone, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-emerald-500/20 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11">
            <Image
              src="/images/logo.png"
              alt={SITE_CONFIG.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="block font-heading font-black text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors leading-tight">
              {SITE_CONFIG.shortName}
            </span>
            <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Scrap Cars • UAE-Wide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="#hero"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-60 py-2 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50">
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  🚘 Junk & Scrap Cars
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  💥 Accident Damaged
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  📋 Expired Mulkiya
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  🔧 Non-Running Engines
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#valuation"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Valuation
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Gallery
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Steps
          </Link>
          <Link
            href="#video"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Video
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          {/* WhatsApp Header Button */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 dark:text-slate-100 hover:text-emerald-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-2xl space-y-4">
          <div className="flex flex-col gap-3">
            <Link
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Services
            </Link>
            <Link
              href="#valuation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Free Valuation
            </Link>
            <Link
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Recent Scrap Cars
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              3 Simple Steps
            </Link>
            <Link
              href="#video"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Watch Video
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Why Choose Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="text-xs text-center text-slate-500 dark:text-slate-400 pt-1">
            📍 Serving All UAE Emirates • ⚡ 24/7 Doorstep Pickup
          </div>
        </div>
      )}
    </header>
  );
}
