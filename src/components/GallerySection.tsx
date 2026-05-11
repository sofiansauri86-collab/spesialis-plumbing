import { Camera, ShieldCheck, MessageCircle } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const WA_URL =
  "https://wa.me/6289667991444?text=" +
  encodeURIComponent("Halo Bang, saya mau tanya soal pemasangan filter air, sudah lihat galeri pekerjaannya");

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

const items: GalleryItem[] = [
  {
    src: gallery1,
    alt: "Instalasi filter air lengkap dengan tabung Manotec & sistem RO",
    caption: "Instalasi filter air + RO komersial",
    tag: "Filter Air",
  },
  {
    src: gallery2,
    alt: "Pemasangan dua tabung filter air dengan kontrol digital",
    caption: "Dual tank filter dengan kontrol digital",
    tag: "Filter Air",
  },
  {
    src: gallery3,
    alt: "Pemasangan water heater di kamar mandi rumah pelanggan",
    caption: "Pasang water heater kamar mandi",
    tag: "Water Heater",
  },
  {
    src: gallery4,
    alt: "Instalasi pipa hijau, water heater Modena, dan filter UV",
    caption: "Instalasi pipa + water heater + UV filter",
    tag: "Instalasi Pipa",
  },
  {
    src: gallery5,
    alt: "Sistem filter air lengkap dengan tandon dan unit RO",
    caption: "Sistem filter + tandon + RO",
    tag: "Filter Air",
  },
  {
    src: gallery6,
    alt: "Perbandingan air sebelum dan sesudah disaring",
    caption: "Sebelum vs sesudah pakai filter",
    tag: "Hasil Nyata",
  },
];

export function GallerySection() {
  return (
    <section id="galeri" className="relative w-full overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Camera className="h-3.5 w-3.5" strokeWidth={2.5} />
            Galeri Pekerjaan
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Hasil Nyata,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Bukan Janji
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Foto-foto di bawah ini adalah hasil pekerjaan asli kami di rumah pelanggan
            di Bogor — bukan stok foto. Silakan dilihat dulu sebelum memutuskan.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-medium text-foreground/70 shadow-[var(--shadow-soft)] sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={2.5} />
            Pengerjaan rapi, bergaransi, & dipasang oleh tim sendiri
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item, idx) => (
            <figure
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-cta)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{ background: "var(--gradient-overlay)" }}
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                  {item.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-semibold leading-snug text-white sm:text-sm">
                  {item.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Mau tahu hasil seperti ini bisa diterapkan di rumah Anda?
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-[0_16px_36px_-12px_oklch(0.72_0.18_145/0.55)] transition-all hover:scale-[1.03] hover:brightness-110 sm:text-base"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Tanya & Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
