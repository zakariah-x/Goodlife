"use client";

const SERVICES = [
  {
    icon: "🚘",
    title: "Junk & Scrap Cars",
    desc: "Rusted, dead, or completely scrapped vehicles. Highest metal salvage and parts value paid.",
  },
  {
    icon: "💥",
    title: "Accident Damaged",
    desc: "Total loss cars, crashed bodies, or insurance write-offs. Sell without expensive repairs.",
  },
  {
    icon: "📋",
    title: "Expired Mulkiya",
    desc: "Registration expired or failed RTA/Police inspection? We assist with full vehicle cancellation paperwork.",
  },
  {
    icon: "🔧",
    title: "Non-Running Engines",
    desc: "Dead battery, blown motor, or broken transmission. Free flatbed pickup directly at your doorstep.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 scroll-mt-24 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            What We Buy Across the <span className="text-gold">UAE</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Fair, fast, and guaranteed cash offers for any car condition across
            all UAE Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="glass-panel zoom-card p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
