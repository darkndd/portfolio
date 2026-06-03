"use client";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#2b2b2c]/95 backdrop-blur-md border-t border-[#38383f] rounded-t-2xl px-4 py-1 z-40 md:relative md:bottom-auto md:left-auto md:w-auto md:border-t-0 md:rounded-t-none md:bg-transparent md:p-0 flex justify-center md:justify-end lg:absolute lg:top-0 lg:right-0 lg:bg-[#2b2b2c] lg:border-l lg:border-b lg:border-[#38383f] lg:rounded-bl-2xl lg:rounded-tr-2xl lg:z-30">
      <ul className="flex items-center gap-6 md:gap-8 px-6 py-3.5 md:py-4">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs md:text-sm font-medium transition-all outline-none ${
                activeTab === tab.id
                  ? "text-[#ffdb70]"
                  : "text-[#d6d6d6] hover:text-[#ffdb70]/70"
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
