"use client";
import { FaCode, FaServer, FaDatabase, FaBolt } from "react-icons/fa";

export default function About() {
  const services = [
    {
      icon: <FaCode className="text-3xl text-[#ffdb70]" />,
      title: "Web Development",
      description: "High-quality development of modern web applications using React, Next.js, and TypeScript."
    },
    {
      icon: <FaServer className="text-3xl text-[#ffdb70]" />,
      title: "Backend Services",
      description: "Building robust backend architectures, RESTful APIs, and server integrations with Node.js and Express."
    },
    {
      icon: <FaDatabase className="text-3xl text-[#ffdb70]" />,
      title: "Database Design",
      description: "Creating efficient database schemas, relational data structures, and optimized queries in PostgreSQL."
    },
    {
      icon: <FaBolt className="text-3xl text-[#ffdb70]" />,
      title: "Performance & SEO",
      description: "Optimizing web asset loading, caching, SEO scores, and maintaining highly responsive systems."
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "TypeScript", "Git"
  ];

  return (
    <article className="tab-active py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-white tracking-wider mb-2 uppercase">About Me</h2>
        <div className="title-underline" />
      </header>

      {/* Intro Text */}
      <section className="text-xs md:text-sm text-[#d6d6d6] leading-relaxed space-y-4 mb-8 font-light">
        <p>
          I am a passionate Fullstack Developer with expertise in building responsive, efficient, and visual web applications. With a solid background in both frontend interface design and backend API architecture, I thrive on solving complex development challenges.
        </p>
        <p>
          My goal is to craft digital solutions that are not only performant and secure but also provide users with smooth, premium experiences. I enjoy collaborating on creative projects and always aim to implement clean, maintainable code structures.
        </p>
      </section>

      {/* What I'm doing */}
      <section className="mb-8">
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wider mb-6 uppercase">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
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
          {technologies.map((tech, i) => (
            <div key={i} className="bg-[#2b2b2c]/40 border border-[#38383f] rounded-xl p-4 text-center hover:border-[#ffdb70] transition-colors duration-200 cursor-default select-none">
              <span className="text-[11px] md:text-xs font-medium text-white tracking-wider">{tech}</span>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
