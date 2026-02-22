export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="text-[var(--accent)] text-sm font-medium mb-4 tracking-widest uppercase">
            Software Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <span className="text-[var(--accent)]">Ian Arazny</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-10 max-w-xl mx-auto">
            I build modern web applications with a focus on clean code, 
            great user experiences, and scalable architecture.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[var(--card-border)] hover:border-[var(--accent)] text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  }