import { Phone, MessageCircle, Clock, Wrench, BadgeCheck, Zap } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";
import logoImage from "@/assets/logo-spesialis-plumbing.png";

const WHATSAPP_URL = "https://wa.me/6289667991444?text=Halo%20Bang%2C%20saya%20butuh%20bantuan%20plumbing%20di%20Bogor";
const PHONE_URL = "tel:+6289667991444";

const advantages = [
  {
    icon: Zap,
    title: "Respon Kilat",
    desc: "Chat masuk, langsung dibales. Bisa meluncur hari ini juga.",
  },
  {
    icon: Wrench,
    title: "Teknisi Berpengalaman",
    desc: "Udah pegang ribuan instalasi pompa, water heater & filter.",
  },
  {
    icon: BadgeCheck,
    title: "Harga Transparan",
    desc: "Dikasih tau ongkos di awal. No biaya siluman, no kaget.",
  },
];

export function HeroPlumbing() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-foreground">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Teknisi plumbing profesional di Bogor sedang memasang pompa air"
          className="h-full w-full object-cover object-[70%_center] sm:object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="absolute left-4 top-4 flex items-center gap-2.5 sm:left-8 sm:top-6 sm:gap-3 lg:left-12">
          <div className="rounded-xl bg-white/95 p-1.5 shadow-lg ring-1 ring-white/40 backdrop-blur-md sm:p-2">
            <img
              src={logoImage}
              alt="Logo Spesialis Plumbing Bogor"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 md:text-xs">
              Bogor
            </span>
            <span className="text-sm font-bold text-white md:text-base">
              Spesialis Plumbing
            </span>
          </div>
        </div>

        {/* Status pill */}
        <div className="mb-6 mt-20 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md sm:mt-16">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="text-sm font-medium text-white">
            Online &amp; siap melayani hari ini
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Air Kotor, Bau dan Kuning?{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.95 0.05 95), oklch(0.85 0.18 75))",
            }}
          >
            Jasa Pasang Filter Air di Bogor
          </span>
          , Bisa Datang Hari Ini.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          Air lebih <strong className="font-semibold text-white">bersih &amp; sehat</strong> untuk rumah Anda.
          Pemasangan <strong className="font-semibold text-white">cepat, rapi</strong>, dan bisa langsung dipakai.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground transition-all hover:scale-[1.03] hover:brightness-110 active:scale-100"
            style={{ boxShadow: "0 18px 40px -12px oklch(0.72 0.18 145 / 0.6)" }}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Chat WhatsApp Sekarang
          </a>
          <a
            href={PHONE_URL}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Telepon Langsung
          </a>

          <div className="flex items-center gap-2 text-sm text-white/75 sm:ml-3">
            <Clock className="h-4 w-4" />
            <span>Bales chat dalam 5 menit</span>
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.12]"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/90 text-accent-foreground transition-transform group-hover:-rotate-6">
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}