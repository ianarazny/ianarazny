export default function Contact() {
    return (
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[var(--text-muted)] mb-10">
            I&apos;m always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="mailto:ian@example.com"
              className="px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors"
            >
              Say Hello
            </a>
            <div className="flex gap-6 mt-6 text-[var(--text-muted)]">
              <a
                href="https://github.com/ianarazny"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ianarazny"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/ianarazny"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }