import type { ComponentType, SVGProps } from "react";
import { MessageCircle, Phone, MapPin, Clock, Wrench, Instagram, Youtube, Facebook } from "lucide-react";

const WA_NUMBER = "6289667991444";
const WA_URL =
  `https://wa.me/${WA_NUMBER}?text=` +
  encodeURIComponent("Halo Bang, saya mau pesan jasa Spesialis Plumbing Bogor");
const MAPS_DIRECTION = "https://maps.app.goo.gl/u6iT25rAJ9Ep4eAo6";

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.91a4.85 4.85 0 0 1-1.84-.22Z" />
    </svg>
  );
}

const SOCIALS: {
  name: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { name: "Instagram", href: "https://www.instagram.com/spesialis_plumbing", Icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/@dr.plumbing", Icon: Youtube },
  { name: "TikTok", href: "https://www.tiktok.com/@plumbingspesialis", Icon: TikTokIcon },
  { name: "Facebook", href: "https://www.facebook.com/share/18dg53ViHy/", Icon: Facebook },
];

const services = [
  "Pemasangan Filter Air",
  "Instalasi Water Heater",
  "Service & Perbaikan Pompa Air",
  "Perbaikan Pipa Bocor",
];

const areas = ["Bogor", "Jakarta", "Depok", "Tangerang", "Bekasi"];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Closing CTA Banner */}
      <section className="relative w-full overflow-hidden bg-background py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Siap Bikin Air di Rumah Lebih Bersih & Nyaman?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tim kami siap datang hari ini juga. Konsultasi gratis, harga transparan,
            pengerjaan rapi dan bergaransi.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Chat WhatsApp Sekarang
            </a>
            <a
              href={`tel:+${WA_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-8 py-4 text-base font-bold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Telepon Langsung
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Wrench className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-black text-foreground">
                  Spesialis Plumbing Bogor
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Jasa plumbing terpercaya di Bogor & sekitarnya. Spesialis pemasangan filter
                air, water heater, dan servis pompa.
              </p>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Ikuti Kami
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {SOCIALS.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Layanan */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Layanan Kami
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {services.map((s) => (
                  <li key={s} className="transition-colors hover:text-primary">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Area */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Area Layanan
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {areas.map((a) => (
                  <li key={a}>{a} & sekitarnya</li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Hubungi Kami
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <a href={`tel:+${WA_NUMBER}`} className="hover:text-primary">
                    0896-6799-1444
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Chat WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <span>Setiap hari, 08.00 – 21.00 WIB</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <a
                    href={MAPS_DIRECTION}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Kota Bogor, Jawa Barat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {year} Spesialis Plumbing Bogor. Semua hak dilindungi.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
