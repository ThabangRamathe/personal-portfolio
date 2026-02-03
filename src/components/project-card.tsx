import { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-md transition" style={{
      background: 'linear-gradient(135deg, var(--card-badge-bg, #f4f4f5), var(--background))',
      borderColor: 'var(--border-color, #e4e4e7)',
      color: 'var(--foreground)',
      boxShadow: 'var(--shadow)',
    }}>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm opacity-70">{p.summary}</p>

        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2 py-1 text-xs opacity-75"
              style={{
                borderColor: 'var(--border-color, #e4e4e7)',
                backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
                color: 'var(--foreground)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3 text-sm">
          {p.links?.demo && p.links.demo !== "#" && (
            <Link className="inline-flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400" href={p.links.demo} target="_blank">
              <ExternalLink size={14} /> Demo
            </Link>
          )}
          {p.links?.github && (
            <Link className="inline-flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400" href={p.links.github} target="_blank">
              <Github size={14} /> Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
