import TechStackList from "./tech-stack-list";

export default function TechStackSection() {
  return (
    <section className="space-y-12 pt-16">
      <h2 className="text-3xl font-bold text-center">My Toolkit</h2>
      <TechStackList />
    </section>
  );
}
