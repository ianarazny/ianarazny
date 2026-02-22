export default function About() {
    const skills = [
      "TypeScript", "React", "Next.js", "Node.js",
      "Tailwind CSS", "PostgreSQL", "Git", "Docker",
    ];
  
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                I&apos;m a passionate software developer with experience building 
                full-stack web applications. I enjoy solving complex problems and 
                turning ideas into reality through code.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source, or learning something new.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-[var(--text-muted)] hover:text-white hover:border-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }