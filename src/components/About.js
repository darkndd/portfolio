"use client";
import { personalInfo } from "../data/info";

export default function About() {

  return (
    <article className="tab-active py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-white tracking-wider mb-2 uppercase">About Me</h2>
        <div className="title-underline" />
      </header>

      {/* Intro Text */}
      <section className="text-xs md:text-sm text-[#d6d6d6] leading-relaxed space-y-4 mb-8 font-light">
        {personalInfo.aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* What I'm doing */}
      <section className="mb-8">
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wider mb-6 uppercase">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.services.map((service, i) => (
            <div key={i} className="service-card p-5 flex items-start gap-4 hover:transform hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex-shrink-0 bg-[#2b2b2c] p-3 rounded-xl border border-[#38383f]">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wider mb-6 uppercase">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {personalInfo.technologies.map((tech, i) => (
            <div key={i} className="bg-[#2b2b2c]/40 border border-[#38383f] rounded-xl p-4 text-center hover:border-[#ffdb70] transition-colors duration-200 cursor-default select-none">
              <span className="text-[11px] md:text-xs font-medium text-white tracking-wider">{tech}</span>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
