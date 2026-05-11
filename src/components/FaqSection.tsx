import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WA_URL =
  "https://wa.me/6289667991444?text=" +
  encodeURIComponent("Halo Bang, saya mau tanya-tanya soal jasa plumbing dulu");

const faqs = [
  {
    q: "Berapa biaya jasanya, Bang?",
    a: "Biaya tergantung jenis pekerjaan dan kondisi di rumah. Buat pemasangan filter air, water heater, atau servis pompa, kami kasih estimasi harga dulu via WhatsApp — transparan, nggak ada biaya tersembunyi. Baru kerja kalau harga sudah deal.",
  },
  {
    q: "Bisa panggilan dadakan / hari ini juga?",
    a: "Bisa banget. Kalau tim lagi available, kami usahakan datang hari yang sama, terutama buat kasus darurat kayak pompa mati atau pipa bocor. Chat WhatsApp aja dulu biar kami cek jadwal terdekat.",
  },
  {
    q: "Ada garansi nggak setelah pengerjaan?",
    a: "Ada. Setiap pemasangan dan perbaikan kami kasih garansi pengerjaan. Kalau ada masalah di hasil kerja kami dalam masa garansi, tinggal hubungi — kami datang lagi tanpa biaya tambahan.",
  },
  {
    q: "Area layanannya ke mana aja?",
    a: "Kami melayani Bogor, Jakarta, Depok, Tangerang, dan Bekasi. Untuk lokasi di luar itu, boleh tanya dulu — biasanya masih bisa kami atur.",
  },
  {
    q: "Sparepart-nya original?",
    a: "Iya, kami pakai sparepart original sesuai merk. Kalau ada opsi lain (misal lebih hemat), kami kasih tahu plus-minusnya dulu, keputusan tetap di tangan Anda.",
  },
  {
    q: "Bayar cash atau transfer?",
    a: "Dua-duanya bisa. Pembayaran dilakukan setelah pekerjaan selesai dan Anda sudah cek hasilnya — biar tenang.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative w-full overflow-hidden bg-muted/30 py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
            Pertanyaan Umum
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Masih Ragu? Ini Jawaban yang Sering Ditanya
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kami kumpulin pertanyaan yang paling sering masuk dari pelanggan biar Anda lebih
            tenang sebelum pesan.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-sm sm:p-10">
          <p className="text-lg font-bold text-foreground sm:text-xl">
            Masih ada pertanyaan lain?
          </p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Tanya langsung aja, kami balas cepat dan nggak ribet.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl sm:text-base"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
