"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-[#121212] py-8 pb-24 md:py-12 lg:py-20 px-4 md:px-8 max-w-6xl mx-auto">
      
      {/* vCard Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        {/* Active Content Window */}
        <div className="lg:col-span-3 vcard-main p-6 md:p-8 lg:p-10 relative mt-4 lg:mt-0">
          
          {/* Header tab navigation */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Panel Display */}
          <div className="mt-4 lg:mt-6">
            {activeTab === "about" && <About />}
            {activeTab === "resume" && <Resume />}
            {activeTab === "portfolio" && <Projects />}
            {activeTab === "contact" && <Contact />}
          </div>

        </div>

      </div>

    </main>
  );
}
