"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What documents do I need to sell my scrap car in the UAE?",
    a: "You only need your Emirates ID and the original vehicle Mulkiya (Registration Card) or Possession Certificate (Tasfeer / Hiyaza). If the Mulkiya is expired or lost, we will guide and assist you with the necessary Police or RTA paperwork.",
  },
  {
    q: "Is the recovery towing service really 100% free?",
    a: "Yes, absolutely! We provide 100% free flatbed recovery towing across all Emirates — Sharjah, Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah. There are zero deductions or hidden towing fees taken from your cash payout.",
  },
  {
    q: "How and when do I receive payment for my car?",
    a: "We pay you in cash on the spot! Our recovery driver inspects the vehicle at your doorstep, hands over the agreed cash amount directly to you, and only then loads the car onto our recovery truck.",
  },
  {
    q: "Can I sell a vehicle that is completely broken, flooded, or has a dead engine?",
    a: "Yes! We specialize in non-running vehicles, seized engines, broken transmissions, flooded cars, fire-damaged cars, and total loss insurance write-offs. Our hydraulic flatbeds can winch and load cars in any mechanical state.",
  },
  {
    q: "What if my Mulkiya (registration) has been expired for multiple years?",
    a: "No problem. Many of the scrap cars we purchase have expired Mulkiyas. We assist you in canceling the number plates and obtaining the official cancellation certificate so you are legally clear of any future fines or liability.",
  },
  {
    q: "How fast can you come and collect my car?",
    a: "In most areas of Sharjah, Ajman, and Dubai, our recovery truck can arrive within 30 to 60 minutes after you accept our quote. In Abu Dhabi and Northern Emirates, we offer same-day collection at your preferred scheduled time.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-24 bg-slate-100/60 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Everything You Need To Know About Selling Your <span className="text-gradient">Scrap Car</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Clear, transparent answers to common questions about our scrap car buying process in the UAE.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
