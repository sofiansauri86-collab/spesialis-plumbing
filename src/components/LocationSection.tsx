import { MapPin, Clock, MessageCircle, Navigation, ShieldCheck } from "lucide-react";

const WA_URL =
  "https://wa.me/6289667991444?text=" +
  encodeURIComponent("Halo Bang, saya mau tanya lokasi & area layanan Spesialis Plumbing Bogor");

const BUSINESS_NAME = "Spesialis Plumbing Bogor";
const ADDRESS = "Spesialis Plumbing Bogor, Kota Bogor, Jawa Barat";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Spesialis+Plumbing+Bogor&ll=-6.5878548,106.8212778&z=16&output=embed";
const MAPS_DIRECTION = "https://maps.app.goo.gl/u6iT25rAJ9Ep4eAo6";

const serviceAreas = ["Bogor", "Jakarta", "Depok", "Tangerang", "Bekasi"];

export function LocationSection() {
  return (
    <section id="lokasi" className="relative w-full overflow-hidden bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
            Lokasi Kami
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Dekat &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Siap Datang ke Rumah Anda
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Basecamp kami di Bogor, melayani pemasangan & perbaikan ke seluruh wilayah Bogor dan sekitarnya.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] lg:col-span-3">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <iframe
                title={`Lokasi ${BUSINESS_NAME}`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Address */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Alamat
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                    {ADDRESS}
                  </p>
                  <a
                    href={MAPS_DIRECTION}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline sm:text-sm"
                  >
                    <Navigation className="h-3.5 w-3.5" strokeWidth={2.5} />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Clock className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Jam Operasional
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                    Setiap Hari · 08.00 – 21.00 WIB
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Chat WhatsApp tetap dilayani di luar jam.
                  </p>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warning/20 text-warning-foreground">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Area Layanan
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                    Bogor & sekitarnya
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-secondary-foreground sm:text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.03] hover:brightness-110 sm:text-base"
            style={{ boxShadow: "0 18px 40px -12px oklch(0.72 0.18 145 / 0.55)" }}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Tanya Lokasi via WhatsApp
          </a>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Respon cepat, bisa janjian survei lokasi di rumah Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
