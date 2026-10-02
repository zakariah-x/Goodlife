"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Phone, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
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
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
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
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  Junk & Scrap Cars
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  Accident Damaged
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  Expired Mulkiya
                </Link>
                <Link
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  Non-Running Engines
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
            href="#reviews"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            Reviews
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-slate-800 dark:text-slate-200"
          >
            FAQ
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
            <WhatsAppIcon className="w-4 h-4" />
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
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              Client Reviews
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-1 hover:text-emerald-500"
            >
              FAQ
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
              <WhatsAppIcon className="w-4 h-4" />
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
