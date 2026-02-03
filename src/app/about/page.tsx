export const metadata = { title: "About — Thabang Ramathe" };

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="space-y-4">
          <p className="text-lg opacity-90">
            I enjoy solving problems and learning through the process of figuring things out
            — exploring ideas and gradually understanding how things fit together. 
            What motivates me most is steady growth and the satisfaction of making
            sense of complex challenges.
          </p>
          <p className="text-lg opacity-90">
            I&apos;m easy-going by nature and value strong team culture and mentorship. 
            I work best in environments where people support each other, share knowledge,
            and encourage continuous improvement, and I&apos;m motivated by the opportunity 
            to keep growing while contributing meaningfully alongside others.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border p-8" style={{
        background: 'linear-gradient(to bottom right, var(--card-badge-bg, #f4f4f5), var(--background))',
        borderColor: 'var(--border-color, #e4e4e7)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow)',
      }}>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold opacity-75 mb-3 uppercase tracking-wide">Backend</p>
            <div className="flex flex-wrap gap-2">
              {["Java 21", "Spring Boot", "JPA/Hibernate", "IBM MQ", "Python", "Liquibase"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1.5 text-sm font-medium opacity-85"
                  style={{
                    borderColor: 'var(--border-color, #e4e4e7)',
                    backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
                    color: 'var(--foreground)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold opacity-75 mb-3 uppercase tracking-wide">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {["Angular", "TypeScript", "Tailwind", "Flutter"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1.5 text-sm font-medium opacity-85"
                  style={{
                    borderColor: 'var(--border-color, #e4e4e7)',
                    backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
                    color: 'var(--foreground)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold opacity-75 mb-3 uppercase tracking-wide">Database & Tools</p>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Oracle DB", "Docker", "Git", "CI/CD", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1.5 text-sm font-medium opacity-85"
                  style={{
                    borderColor: 'var(--border-color, #e4e4e7)',
                    backgroundColor: 'var(--card-badge-bg, #f4f4f5)',
                    color: 'var(--foreground)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
