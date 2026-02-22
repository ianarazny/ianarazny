"use client";

import { useEffect, useState } from "react";

const sections = ["about", "education", "experience", "projects"];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
      <ul className="w-max">
        {sections.map((id) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center py-3">
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-text-highlight"
                      : "w-8 bg-text-muted group-hover:w-16 group-hover:bg-text-highlight"
                  }`}
                ></span>
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-text-highlight"
                      : "text-text-muted group-hover:text-text-highlight"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
