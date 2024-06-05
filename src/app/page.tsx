import HeroSection from "@/components/hero/hero-section";
import { default as TechMarquee } from "@/components/tech-stack/tech-marquee";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="space-y-8 sm:space-y-16">
      <HeroSection />

      <TechMarquee />

      <section className="h-48 w-full bg-gray-800 mt-12">Section 2</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 3</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 4</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 5</section>
    </main>
  );
}
