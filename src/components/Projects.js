"use client";
import { useState } from "react";
import { FaCode, FaExternalLinkAlt, FaShoppingCart, FaRobot, FaCommentDots } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "frontend", "backend"];

  const projects = [
    {
      title: "E-Commerce Marketplace",
      category: "frontend",
      icon: <FaShoppingCart />,
      bgColor: "bg-blue-950/40 text-blue-400",
      description: "Next.js e-commerce app with Stripe integration, product grids, and checkout workflows.",
      codeLink: "#",
      liveLink: "#"
    },
    {
      title: "AI Prompt Combat",
      category: "frontend",
      icon: <FaRobot />,
      bgColor: "bg-indigo-950/40 text-indigo-400",
      description: "Real-time prompt battle simulator utilizing Large Language Models via Google Gemini API.",
      codeLink: "#",
      liveLink: "#"
    },
    {
      title: "Dev WebSockets Lobby",
      category: "backend",
      icon: <FaCommentDots />,
      bgColor: "bg-emerald-950/40 text-emerald-400",
      description: "Multiplayer messaging hub with command parsing and token authentication checks.",
      codeLink: "#",
      liveLink: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <article className="py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Portfolio</h2>
        <div className="title-underline" />
      </header>

      {/* Filter list */}
      <ul className="flex items-center gap-6 mb-10 text-xs md:text-sm font-medium">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setFilter(cat)}
              className={`capitalize transition-all outline-none px-1 py-0.5 rounded focus-visible:ring-2 focus-visible:ring-blue-500 ${
                filter === cat
                  ? "text-blue-500 font-bold"
                  : "text-zinc-400 hover:text-white"
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
          <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-lg transition-all duration-300">
            
            {/* Visual Header */}
            <div className={`h-44 flex items-center justify-center text-5xl ${project.bgColor} border-b border-zinc-800/80 relative overflow-hidden`}>
              <span className="group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{project.icon}</span>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300 backdrop-blur-sm">
                <a 
                  href={project.codeLink} 
                  className="w-11 h-11 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-full flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all hover:scale-105 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  title="View Source Code"
                >
                  <FaCode className="text-lg" />
                </a>
                <a 
                  href={project.liveLink} 
                  className="w-11 h-11 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-full flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all hover:scale-105 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  title="Launch Live Demo"
                >
                  <FaExternalLinkAlt className="text-base" />
                </a>
              </div>
            </div>

            {/* Info details */}
            <div className="p-6">
              <span className="text-[10px] text-zinc-500 capitalize tracking-wider font-medium">{project.category}</span>
              <h3 className="text-sm md:text-base font-semibold text-white mt-1.5 group-hover:text-blue-400 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </article>
  );
}
