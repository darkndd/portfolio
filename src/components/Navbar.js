"use client";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 rounded-t-3xl px-4 py-1 z-40 md:relative md:bottom-auto md:left-auto md:w-auto md:border-t-0 md:rounded-t-none md:bg-transparent md:p-0 flex justify-center md:justify-end lg:absolute lg:top-0 lg:right-0 lg:bg-zinc-800/40 lg:backdrop-blur-xl lg:border-l lg:border-b lg:border-zinc-800/80 lg:rounded-bl-3xl lg:rounded-tr-[24px] lg:z-30">
      <ul className="flex items-center gap-6 md:gap-8 px-8 py-4">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs md:text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5 ${
                activeTab === tab.id
                  ? "text-blue-500 font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
