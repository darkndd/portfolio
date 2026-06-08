"use client";
import { FaBookOpen, FaBriefcase } from "react-icons/fa";

export default function Resume() {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      location: "Universidad Complutense de Madrid",
      date: "2020 — 2024",
      description: "Focused on software engineering, data structures, algorithm design, and database systems. Graduated with honors in Web Technologies."
    },
    {
      title: "Advanced Fullstack Web Development Bootcamp",
      location: "Tech Academy Spain",
      date: "2023",
      description: "Intense training covering modern JavaScript frameworks, responsive UI/UX, backend API design, database schemas, and cloud deployment."
    }
  ];

  const experience = [
    {
      title: "Junior Fullstack Developer",
      company: "InnovateTech Solutions",
      date: "2024 — Present",
      description: "Designed, developed, and maintained client-facing web applications using React, Next.js, and Node.js. Collaborated closely with UI/UX designers to implement premium responsive layouts."
    },
    {
      title: "Frontend Development Intern",
      company: "WebCraft Studio",
      date: "2023 — 2024",
      description: "Developed mockups and responsive interfaces using HTML5, CSS3, Tailwind CSS, and vanilla JS. Optimized page loading times and improved SEO rankings by 25%."
    }
  ];

  const skills = [
    { name: "React & Next.js", level: "90%" },
    { name: "Node.js & Express", level: "85%" },
    { name: "PostgreSQL & SQL", level: "80%" },
    { name: "Tailwind CSS & Vanilla CSS", level: "95%" },
    { name: "TypeScript & JavaScript", level: "88%" },
    { name: "Git & Github Workflows", level: "85%" }
  ];

  return (
    <article className="py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Resume</h2>
        <div className="title-underline" />
      </header>

      {/* Timeline Section (Education & Experience) */}
      <div className="space-y-12 mb-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-zinc-800 border border-zinc-700/50 rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
              <FaBookOpen />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map((item, i) => (
              <li key={i} className="timeline-item">
                <h4 className="text-sm md:text-base font-semibold text-white leading-snug tracking-tight">{item.title}</h4>
                <span className="text-[11px] md:text-xs text-blue-400 block mt-1.5 font-medium tracking-wide">{item.location} | {item.date}</span>
                <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed font-light">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-zinc-800 border border-zinc-700/50 rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
              <FaBriefcase />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experience.map((item, i) => (
              <li key={i} className="timeline-item">
                <h4 className="text-sm md:text-base font-semibold text-white leading-snug tracking-tight">{item.title}</h4>
                <span className="text-[11px] md:text-xs text-blue-400 block mt-1.5 font-medium tracking-wide">{item.company} | {item.date}</span>
                <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed font-light">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Skills Section */}
      <section>
        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-6">Professional Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between text-xs font-medium tracking-wide">
                <span className="text-zinc-200">{skill.name}</span>
                <span className="text-blue-400">{skill.level}</span>
              </div>
              <div className="h-1.5 bg-zinc-800 border border-zinc-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" 
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
