"use client";
import { useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "frontend", "backend"];

  const projects = [
    {
      title: "E-Commerce Marketplace",
      category: "frontend",
      imageText: "🛒",
      bgColor: "bg-blue-950/40",
      description: "Next.js e-commerce app with Stripe integration, product grids, and checkout workflows.",
      codeLink: "#",
      liveLink: "#"
    },
    {
      title: "AI Prompt Combat",
      category: "frontend",
      imageText: "🤖",
      bgColor: "bg-purple-950/40",
      description: "Real-time prompt battle simulator utilizing Large Language Models via Google Gemini API.",
      codeLink: "#",
      liveLink: "#"
    },
    {
      title: "Dev WebSockets Lobby",
      category: "backend",
      imageText: "💬",
      bgColor: "bg-emerald-950/40",
      description: "Multiplayer messaging hub with command parsing and token authentication checks.",
      codeLink: "#",
      liveLink: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <article className="tab-active py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-white tracking-wider mb-2 uppercase">Portfolio</h2>
        <div className="title-underline" />
      </header>

      {/* Filter list */}
      <ul className="flex items-center gap-6 mb-8 text-xs md:text-sm font-medium">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setFilter(cat)}
              className={`capitalize transition-all outline-none ${
                filter === cat
                  ? "text-[#ffdb70]"
                  : "text-[#d6d6d6] hover:text-[#ffdb70]/70"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <div key={i} className="group relative bg-[#2b2b2c]/30 border border-[#38383f] rounded-2xl overflow-hidden hover:border-[#ffdb70] transition-colors duration-300">
            
            {/* Visual Header */}
            <div className={`h-40 flex items-center justify-center text-5xl ${project.bgColor} border-b border-[#38383f] relative overflow-hidden`}>
              <span className="group-hover:scale-110 transition-transform duration-300">{project.imageText}</span>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <a 
                  href={project.codeLink} 
                  className="w-10 h-10 bg-[#2b2b2c] border border-[#38383f] text-[#ffdb70] rounded-xl flex items-center justify-center hover:bg-[#ffdb70] hover:text-black transition-colors"
                  title="View Source Code"
                >
                  <FaCode />
                </a>
                <a 
                  href={project.liveLink} 
                  className="w-10 h-10 bg-[#2b2b2c] border border-[#38383f] text-[#ffdb70] rounded-xl flex items-center justify-center hover:bg-[#ffdb70] hover:text-black transition-colors"
                  title="Launch Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Info details */}
            <div className="p-5">
              <span className="text-[10px] text-gray-500 capitalize tracking-wider font-light">{project.category}</span>
              <h3 className="text-xs md:text-sm font-semibold text-white mt-1 hover:text-[#ffdb70] transition-colors">
                {project.title}
              </h3>
              <p className="text-[10px] md:text-xs text-gray-400 mt-2 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </article>
  );
}
