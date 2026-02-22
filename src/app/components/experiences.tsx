const experiences = [
    {
      role: "Software Developer",
      company: "Company Name",
      period: "2024 — Present",
      description:
        "Built and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on schedule.",
    },
    {
      role: "Junior Developer",
      company: "Another Company",
      period: "2023 — 2024",
      description:
        "Developed RESTful APIs and contributed to front-end features. Participated in code reviews and agile ceremonies.",
    },
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.role + exp.company}
                className="relative pl-8 border-l-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[var(--background)] border-2 border-[var(--card-border)] rounded-full" />
                <p className="text-xs text-[var(--accent)] font-medium mb-1">
                  {exp.period}
                </p>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }