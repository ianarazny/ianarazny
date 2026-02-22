export default function Home() {
  return (
    <>
      {/* About */}
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-highlight lg:sr-only">About</h2>
        </div>
        <div className="space-y-4">
          <p className="text-text-muted leading-relaxed">
            Computer Engineer graduated from <span className="text-text-highlight font-medium">Universidad de la Rep&uacute;blica</span>, with
            experience in analysis, development, and maintenance of software
            systems in production environments. I have worked on web and mobile
            application development, integrating backend services, APIs, and
            relational databases.
          </p>
          <p className="text-text-muted leading-relaxed">
            I have a strong technical foundation, the ability to adapt to
            different work environments, and a keen focus on continuous learning.
            I am especially interested in building solutions that integrate
            <span className="text-text-highlight font-medium"> artificial intelligence</span>
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-highlight lg:sr-only">Education</h2>
        </div>
        <div>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-bg/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2">
              2020 — 2025
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-text-highlight">
                Computer Engineering
              </h3>
              <p className="mt-1 text-sm leading-normal text-text-muted">Universidad de la Rep&uacute;blica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-highlight lg:sr-only">Experience</h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <ExperienceCard
                period="2023 — Present"
                title="Software Developer"
                company="Nareia Software"
                companyUrl="https://www.nareia.com.uy"
                description="Web application development with Angular and .NET 8.0. Integration with RESTful APIs and internal services. PostgreSQL database administration and Docker deployments. Collaboration using agile methodologies (Scrum/Kanban)."
                tags={["Angular", ".NET 8.0", "PostgreSQL", "Docker", "REST APIs", "Scrum"]}
              />
            </li>
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-highlight lg:sr-only">Projects</h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <ProjectCard
                title="Network Congestion Monitoring with ML"
                description="Thesis project developing a real-time network congestion monitoring system. Built eBPF/XDP programs for high-performance packet inspection and flow metric collection at the kernel level. Applied Machine Learning techniques including XGBoost and Random Forest models to predict and classify network congestion patterns from system and flow metrics."
                tags={["eBPF/XDP", "XGBoost", "Random Forest", "Python", "Machine Learning", "C", "Prometheus"]}
                link="https://github.com/ianarazny/Monitorizacion-para-el-Control-de-Congestion"
              />
            </li>
          </ol>
        </div>
      </section>

      {/* Resume link */}
      <div className="mb-16 md:mb-24 lg:mb-36">
        <a
          href="https://drive.google.com/file/d/1Bi8fkbwwnuRFYD_S2KleVa8q2pOuPbXp/view?usp=sharing"
          className="group inline-flex items-center font-medium leading-tight text-text-highlight hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent">
            Check my full resume
          </span>
          <span className="ml-1 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
          </span>
        </a>
      </div>
    </>
  );
}

function ExperienceCard({ period, title, company, companyUrl, description, tags }: {
  period: string; title: string; company: string; companyUrl: string; description: string; tags: string[];
}) {
  return (
    <div className="group relative grid py-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-bg/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2">
        {period}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-text-highlight">
          <a href={companyUrl} className="group/link inline-flex items-baseline text-base font-medium leading-tight text-text-highlight hover:text-accent focus-visible:text-accent" target="_blank" rel="noreferrer noopener">
            <span>{title} &middot; {company}</span>
            <span className="inline-block ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-text-muted">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: {
  title: string; description: string; tags: string[]; link: string;
}) {
  return (
    <div className="group relative grid py-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-bg/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:col-span-6 sm:col-start-3">
        <h3>
          <a href={link} className="group/link inline-flex items-baseline text-base font-medium leading-tight text-text-highlight hover:text-accent focus-visible:text-accent" target="_blank" rel="noreferrer noopener">
            <span>{title}</span>
            <span className="inline-block ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-text-muted">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
