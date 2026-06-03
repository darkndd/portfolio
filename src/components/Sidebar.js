"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`vcard-sidebar p-6 lg:p-8 flex flex-col items-center lg:sticky lg:top-10 transition-all duration-300 ${
      isOpen ? "max-h-[800px]" : "max-h-[140px] lg:max-h-none"
    } overflow-hidden lg:overflow-visible relative`}>
      
      {/* Expand/Collapse Button for Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-9 right-6 lg:hidden flex items-center gap-1.5 px-3 py-1.5 border border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-black rounded-lg text-[10px] font-medium uppercase tracking-wider"
      >
        <span>Contacts</span>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Main Info */}
      <div className="flex lg:flex-col items-center gap-4 lg:gap-6 w-full pb-6 border-b border-[#38383f] mb-6">
        <div className="w-16 h-16 lg:w-32 lg:h-32 bg-[#2b2b2c] rounded-2xl border border-[#38383f] flex-shrink-0 flex items-center justify-center text-xl lg:text-3xl font-bold text-[#ffdb70] tracking-wide select-none">
          JD
        </div>
        
        <div className="text-left lg:text-center flex-1">
          <h1 className="text-sm lg:text-lg font-semibold text-white tracking-wide">
            Jan Díez de los Ríos
          </h1>
          <span className="inline-block mt-2 px-3 py-1 bg-[#2b2b2c] text-[#ffdb70] rounded-lg text-[10px] lg:text-xs font-medium uppercase border border-[#38383f]">
            Fullstack Developer
          </span>
        </div>
      </div>

      {/* Contact Details List */}
      <div className={`w-full space-y-6 lg:block ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 text-xs md:text-sm">
          {/* Email */}
          <li className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70] flex-shrink-0">
              <FaEnvelope />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] text-gray-500 block uppercase">Email</span>
              <a href="mailto:jan10diez@gmail.com" className="text-white hover:text-[#ffdb70] block truncate">
                jan10diez@gmail.com
              </a>
            </div>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70] flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block uppercase">Phone</span>
              <span className="text-white block">+34 600 000 000</span>
            </div>
          </li>

          {/* Birthday */}
          <li className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70] flex-shrink-0">
              <FaCalendarAlt />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block uppercase">Birthday</span>
              <span className="text-white block">June 3, 2002</span>
            </div>
          </li>

          {/* Location */}
          <li className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2b2b2c] border border-[#38383f] rounded-lg flex items-center justify-center text-[#ffdb70] flex-shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block uppercase">Location</span>
              <span className="text-white block">Madrid, Spain</span>
            </div>
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-[#38383f] my-6" />

        {/* Social Links */}
        <div className="flex justify-center gap-4 pb-2">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#ffdb70] transition-colors text-lg"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#ffdb70] transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

    </aside>
  );
}
