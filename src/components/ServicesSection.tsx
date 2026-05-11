import { Droplets, Flame, Wrench, Check, Star, MessageCircle, ArrowRight, type LucideIcon } from "lucide-react";

const WA_BASE = "https://wa.me/6289667991444";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits: string[];
  cta: string;
  waText: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Droplets,
    title: "Pemasangan Filter Air",
    desc: "Air keruh, bau, atau kuning? Kami pasang filter air yang bikin air lebih jernih, aman dipakai mandi sampai masak.",
    benefits: [
      "Air jernih & tidak bau",
      "Aman untuk keluarga",
      "Cocok untuk air sumur & PAM",
      "Pemasangan cepat & rapi",
    ],
    cta: "Tanya via WhatsApp",
    waText: "Halo Bang, saya mau tanya pemasangan filter air di rumah saya di Bogor",
    featured: true,
  },
  {
    icon: Flame,
    title: "Instalasi Water Heater",
    desc: "Nikmati mandi air hangat setiap hari tanpa ribet. Instalasi aman, rapi, dan langsung bisa dipakai.",
    benefits: ["Instalasi gas & listrik", "Pipa rapi & aman", "Garansi pengerjaan"],
    cta: "Pasang Sekarang",
    waText: "Halo Bang, saya mau pasang water heater di rumah saya",
  },
  {
    icon: Wrench,
    title: "Service & Perbaikan Pompa Air",
    desc: "Pompa lemah, berisik, atau mati total? Kami cek dan perbaiki sampai air kembali normal.",
    benefits: ["Diagnosa cepat", "Sparepart original", "Pengerjaan cepat"],
    cta: "Perbaiki Sekarang",
    waText: "Halo Bang, pompa air di rumah saya bermasalah, mau minta bantuan service",
  },
];

function waUrl(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

export function ServicesSection() {
  return (
    <section id="layanan" className="relative w-full overflow-hidden bg-background py-20 sm:py-28">
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Droplets className="h-3.5 w-3.5" strokeWidth={2.5} />
            Layanan Kami
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Solusi Air Bersih & Plumbing{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Rumah Anda di Bogor
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kami bantu atasi air kotor, pemasangan water heater, sampai perbaikan pompa — cepat, rapi, dan bergaransi.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, desc, benefits, cta, waText, featured }) => (
            <article
              key={title}
              className={
                featured
                  ? "group relative flex flex-col overflow-hidden rounded-3xl border-2 border-primary/30 bg-card p-7 shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-12px_oklch(0.55_0.20_245/0.5)] md:-mt-2 md:scale-[1.04]"
                  : "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              }
            >
              {featured && (
                <>
                  <div
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-warning px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-warning-foreground shadow-md">
                    <Star className="h-3 w-3 fill-current" strokeWidth={2.5} />
                    Paling Banyak Dipilih
                  </div>
                </>
              )}

              <div
                className={
                  featured
                    ? "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    : "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                }
                style={featured ? { background: "var(--gradient-hero)" } : undefined}
              >
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>

              <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {desc}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span
                      className={
                        featured
                          ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                          : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                      }
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Per-card CTA */}
              <div className="mt-6 flex flex-1 items-end pt-2">
                <a
                  href={waUrl(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    featured
                      ? "group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.02] hover:brightness-110 sm:text-base"
                      : "group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-background px-5 py-3 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground sm:text-base"
                  }
                  style={featured ? { boxShadow: "0 16px 36px -12px oklch(0.72 0.18 145 / 0.55)" } : undefined}
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
