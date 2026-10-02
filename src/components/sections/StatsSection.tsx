"use client";

const STATS = [
  { value: "12,500+", label: "UAE Cars Bought" },
  { value: "100%", label: "Free Doorstep Towing" },
  { value: "30 Mins", label: "Fastest Pickup Time" },
  { value: "4.9 ★", label: "UAE Client Rating" },
];

export function StatsSection() {
  return (
    <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel bg-white/95 dark:bg-slate-900/95 border border-emerald-500/20 shadow-2xl">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="text-center py-2 px-1 border-r last:border-r-0 border-slate-200 dark:border-slate-800"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-emerald-600 dark:text-emerald-400">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
