const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and PostgreSQL. Features authentication, real-time updates, and a responsive UI.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/ianarazny",
      live: "#",
    },
    {
      title: "Project Two",
      description: "A REST API service with comprehensive documentation, rate limiting, and automated testing.",
      tags: ["Node.js", "Express", "MongoDB", "Docker"],
      github: "https://github.com/ianarazny",
      live: "#",
    },
    {
      title: "Project Three",
      description: "An interactive dashboard for data visualization with real-time charts and filtering capabilities.",
      tags: ["React", "D3.js", "TypeScript", "Firebase"],
      github: "https://github.com/ianarazny",
      live: "#",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[var(--background)] rounded text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }