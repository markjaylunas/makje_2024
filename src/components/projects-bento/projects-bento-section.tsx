import ProjectsBento from "./projects-bento";

export default function ProjectsBentoSection() {
  return (
    <section id="projects" className="space-y-12 pt-10 sm:pt-16">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text text-transparent">
        The Projects
      </h2>
      <ProjectsBento />
    </section>
  );
}
