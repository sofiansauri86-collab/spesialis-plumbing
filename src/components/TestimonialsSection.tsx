import { Star, Quote, MessageCircle, ArrowRight, Users } from "lucide-react";

const WA_URL =
  "https://wa.me/6289667991444?text=" +
  encodeURIComponent("Halo Bang, saya mau konsultasi gratis soal filter air di rumah saya");

type Testimonial = {
  name: string;
  location: string;
  initial: string;
  review: string;
  rating: number;
  accent: "primary" | "accent" | "warning";
};

const testimonials: Testimonial[] = [
  {
    name: "Bapak Andi",
    location: "Bogor Utara",
    initial: "A",
    review:
      "Sebelumnya air di rumah kuning dan bau. Setelah pasang filter dari Spesialis Plumbing, air jadi jernih dan nggak bau lagi. Pengerjaan cepat dan rapi.",
    rating: 5,
    accent: "primary",
  },
  {
    name: "Ibu Rina",
    location: "Cibinong",
    initial: "R",
    review:
      "Teknisi datang tepat waktu, dijelasin dulu sebelum pasang. Sekarang air lebih bersih dan nyaman dipakai sehari-hari.",
    rating: 5,
    accent: "accent",
  },
  {
    name: "Pak Dedi",
    location: "Dramaga",
    initial: "D",
    review:
      "Pompa air sempat bermasalah dan sekalian pasang filter. Sekarang air lancar dan lebih bersih. Recommended banget.",
    rating: 5,
    accent: "warning",
  },
];

const accentBg: Record<Testimonial["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  warning: "bg-warning text-warning-foreground",
};

export function TestimonialsSection() {
  return (
    <section
      id="testimoni"
      className="relative w-full overflow-hidden bg-secondary/40 py-20 sm:py-28"
    >
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-current" strokeWidth={2.5} />
            Testimoni Pelanggan
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sudah Banyak Rumah di Bogor{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Pakai Jasa Kami
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dari air keruh jadi jernih — lihat pengalaman langsung pelanggan kami.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {testimonials.map(({ name, location, initial, review, rating, accent }) => (
            <article
              key={name}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_50px_-12px_oklch(0.55_0.20_245/0.25)]"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-primary/10"
                strokeWidth={2}
              />

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-warning text-warning"
                    strokeWidth={2}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85 sm:text-base">
                “{review}”
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold shadow-sm ${accentBg[accent]}`}
                >
                  {initial}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{name}</p>
                  <p className="truncate text-xs text-muted-foreground">{location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground sm:text-base">
          <Users className="h-4 w-4 text-primary" strokeWidth={2.5} />
          <span>
            Ratusan pelanggan di Bogor sudah merasakan hasilnya.
          </span>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.03] hover:brightness-110 sm:text-base"
            style={{ boxShadow: "0 18px 40px -12px oklch(0.72 0.18 145 / 0.55)" }}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Konsultasi Gratis Sekarang
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            Chat WhatsApp, respon cepat.
          </p>
        </div>
      </div>
    </section>
  );
}
