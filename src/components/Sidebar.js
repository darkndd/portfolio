"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from '../data/info';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="vcard-sidebar p-6 lg:p-8 flex flex-col items-center lg:sticky lg:top-10 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">

      {/* Expand/Collapse Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-9 right-6 lg:hidden flex items-center gap-1.5 px-3 py-1.5 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-lg text-[10px] font-medium uppercase tracking-wider transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span>Contacts</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FaChevronDown />
        </motion.div>
      </button>

      {/* Main Info */}
      <div className="flex lg:flex-col items-center gap-4 lg:gap-6 w-full pb-6 border-b border-zinc-800/80 mb-6 z-10 bg-zinc-900">
        <div className="w-16 h-16 lg:w-32 lg:h-32 bg-zinc-800 rounded-2xl border border-zinc-700 flex-shrink-0 flex items-center justify-center text-xl lg:text-3xl font-bold text-blue-500 tracking-wide select-none shadow-inner">
          JD
        </div>

        <div className="text-left lg:text-center flex-1">
          <h1 className="text-sm lg:text-lg font-bold text-white tracking-tight">
            Jan Díez de los Ríos
          </h1>
          <span className="inline-block mt-2 px-3 py-1 bg-zinc-800/50 text-blue-400 rounded-lg text-[10px] lg:text-xs font-medium uppercase border border-zinc-700/50 tracking-wider">
            Fullstack Developer
          </span>
        </div>
      </div>

      {/* Contact Details List (Mobile Animated / Desktop Static) */}
      <div className="w-full relative z-0">
        {/* Desktop View (Always visible) */}
        <div className="hidden lg:block w-full space-y-6">
          <ContactList />
          <div className="border-t border-zinc-800/80 my-6" />
          <SocialLinks />
        </div>

        {/* Mobile View (Animated Toggle) */}
        <div className="block lg:hidden w-full">
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: 0 },
                  collapsed: { opacity: 0, height: 0, marginTop: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="pt-2 pb-4 space-y-6">
                  <ContactList />
                  <div className="border-t border-zinc-800/80 my-4" />
                  <SocialLinks />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}

function ContactList() {
  return (
    <ul className="space-y-4 text-xs md:text-sm">
      <ContactItem icon={<FaEnvelope />} label="Email" value={personalInfo.email} isLink={true} href={`mailto:${personalInfo.email}`} />
      <ContactItem icon={<FaPhoneAlt />} label="Phone" value={personalInfo.phone} />
      <ContactItem icon={<FaCalendarAlt />} label="Birthday" value={personalInfo.birthday} />
      <ContactItem icon={<FaMapMarkerAlt />} label="Location" value={personalInfo.location} />
    </ul>
  );
}

function ContactItem({ icon, label, value, isLink, href }) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-9 h-9 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-blue-500 flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div className="overflow-hidden">
        <span className="text-[10px] text-zinc-500 block uppercase font-medium tracking-wider">{label}</span>
        {isLink ? (
          <a href={href} className="text-zinc-200 hover:text-blue-400 transition-colors block truncate">
            {value}
          </a>
        ) : (
          <span className="text-zinc-200 block truncate">{value}</span>
        )}
      </div>
    </li>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center gap-5 pb-2">
      <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
        <FaLinkedin />
      </a>
    </div>
  );
}
