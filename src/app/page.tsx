import HeroSection from "@/components/hero/hero-section";
import TechStackList from "@/components/tech-stack/tech-stack-list";
import TechStackSection from "@/components/tech-stack/tech-stack-section";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="space-y-8 sm:space-y-16">
      <HeroSection />

      <TechStackSection />

      <section className="h-48 w-full bg-gray-800 mt-12">Section 2</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 3</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 4</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 5</section>
    </main>
  );
}
