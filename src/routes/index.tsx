import { createFileRoute } from "@tanstack/react-router";
import { HeroPlumbing } from "@/components/HeroPlumbing";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { LocationSection } from "@/components/LocationSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Spesialis Plumbing Bogor — Pasang Pompa, Water Heater & Filter Air" },
      {
        name: "description",
        content:
          "Spesialis Plumbing Bogor siap datang hari ini. Pasang & servis pompa air, water heater, filter air. Respon cepat, harga transparan.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <HeroPlumbing />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
      <SiteFooter />
    </main>
  );
}
