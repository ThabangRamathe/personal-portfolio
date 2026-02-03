import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <p className="text-sm tracking-wide opacity-60">Hi, I&apos;m</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Thabang Ramathe</h1>
        <p className="mt-3 max-w-2xl opacity-75 wrap-break-word">
          Software engineer with a backend focus, primarily working with Java and Spring Boot, 
          and experience contributing across the full stack. I enjoy solving problems by designing 
          and building systems that are reliable, maintainable, and easy to reason about. I&apos;m 
          particularly interested in platform and infrastructure work and continuously growing my 
          skills around system design and ownership. I value clean engineering practices, 
          collaboration, and learning from experienced engineers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/about" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium hover:opacity-90 transition" style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }}>
            About Me <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium hover:opacity-90 transition" style={{
            backgroundColor: 'var(--card-badge-bg)',
            color: 'var(--foreground)',
          }}>
            Contact Me
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm underline">See all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
