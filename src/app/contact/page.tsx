import Link from "next/link";

export const metadata = { title: "Contact — Thabang Ramathe" };

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg opacity-90 mb-8">
          The quickest way to reach me is via email. I&apos;m always open to collaboration, consulting, and interesting side projects.
        </p>
        <a
          href="mailto:ramathethabang@outlook.com"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium hover:opacity-90 transition"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }}
        >
          Send me an Email
        </a>
      </section>

      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <h2 className="text-2xl font-bold mb-6">My Resume</h2>
        <p className="opacity-90 mb-6">
          Download my resume to learn more about my experience and skills.
        </p>
        <a 
          href="/resume.pdf" 
          download="Thabang_Ramathe_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }}
        >
          Download Resume
        </a>
      </section>

      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
        <p className="opacity-90 mb-4">Or find me on other platforms:</p>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="https://github.com/ThabangRamathe" 
            target="_blank"
            className="px-6 py-3 rounded-xl border font-medium hover:opacity-90 transition inline-flex items-center gap-2"
            style={{
              backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
              borderColor: 'var(--border-color, #e4e4e7)',
              color: 'var(--foreground)',
            }}
          >
            GitHub
          </Link>
          <Link 
            href="https://www.linkedin.com/in/thabang-ramathe-67042b191" 
            target="_blank"
            className="px-6 py-3 rounded-xl border font-medium hover:opacity-90 transition inline-flex items-center gap-2"
            style={{
              backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
              borderColor: 'var(--border-color, #e4e4e7)',
              color: 'var(--foreground)',
            }}
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}
