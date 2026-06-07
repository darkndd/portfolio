"use client";
import { personalInfo } from "../data/info";

export default function About() {
  return (
    <article className="py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">About Me</h2>
        <div className="title-underline" />
      </header>

      {/* Intro Text */}
      <section className="text-sm md:text-base text-zinc-400 leading-relaxed space-y-4 mb-10 font-light">
        {personalInfo.aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* What I'm doing */}
      <section className="mb-10">
        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-6">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.services.map((service, i) => (
            <div key={i} className="service-card p-6 flex items-start gap-5 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 bg-zinc-800 p-3.5 rounded-xl border border-zinc-700/50 shadow-sm text-blue-500 text-xl">
                {service.icon}
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold text-white mb-2 tracking-tight">{service.title}</h4>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-6">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {personalInfo.technologies.map((tech, i) => (
            <div key={i} className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4 text-center hover:border-blue-500 hover:bg-zinc-800 transition-all duration-300 cursor-default select-none shadow-sm">
              <span className="text-xs font-medium text-zinc-200 tracking-wide">{tech}</span>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
