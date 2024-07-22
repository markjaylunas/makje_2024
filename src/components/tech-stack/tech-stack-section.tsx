import TechStackList from "./tech-stack-list";

export default function TechStackSection() {
  return (
    <section className="space-y-12 pt-10 sm:pt-16">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text text-transparent">
        The Toolkit
      </h2>
      <TechStackList />
    </section>
  );
}
