import HeroSection from "@/components/hero/hero-section";
import ProjectsBentoSection from "@/components/projects-bento/projects-bento-section";
import TechStackSection from "@/components/tech-stack/tech-stack-section";

export default function Home() {
  return (
    <main className="space-y-8 sm:space-y-16 mb-32">
      <HeroSection />

      <ProjectsBentoSection />

      <TechStackSection />
    </main>
  );
}
