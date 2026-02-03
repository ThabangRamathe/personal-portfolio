import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export const metadata = { title: "Projects — Thabang Ramathe" };

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
