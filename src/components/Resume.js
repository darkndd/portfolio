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
    <article className="tab-active py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-white tracking-wider mb-2 uppercase">Resume</h2>
        <div className="title-underline" />
      </header>

      {/* Timeline Section (Education & Experience) */}
      <div className="space-y-12 mb-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70]">
              <FaBookOpen />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map((item, i) => (
              <li key={i} className="timeline-item">
                <h4 className="text-xs md:text-sm font-semibold text-white leading-snug">{item.title}</h4>
                <span className="text-[10px] text-[#ffdb70] block mt-1 font-medium">{item.location} | {item.date}</span>
                <p className="text-[10px] md:text-xs text-gray-400 mt-2 leading-relaxed font-light">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70]">
              <FaBriefcase />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experience.map((item, i) => (
              <li key={i} className="timeline-item">
                <h4 className="text-xs md:text-sm font-semibold text-white leading-snug">{item.title}</h4>
                <span className="text-[10px] text-[#ffdb70] block mt-1 font-medium">{item.company} | {item.date}</span>
                <p className="text-[10px] md:text-xs text-gray-400 mt-2 leading-relaxed font-light">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Skills Section */}
      <section>
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wider mb-6 uppercase">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#2b2b2c]/30 border border-[#38383f] rounded-2xl p-6">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-white">{skill.name}</span>
                <span className="text-[#ffdb70]">{skill.level}</span>
              </div>
              <div className="h-2 bg-[#2b2b2c] border border-[#38383f] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#ffdb70] to-[#f39c12] rounded-full" 
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
