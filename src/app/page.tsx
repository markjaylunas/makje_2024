import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <section className="h-48 w-full bg-gray-800 mt-12">Section 2</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 3</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 4</section>
      <section className="h-48 w-full bg-gray-800 mt-12">Section 5</section>
    </main>
  );
}
