"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <article className="tab-active py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-white tracking-wider mb-2 uppercase">Contact</h2>
        <div className="title-underline" />
      </header>

      {/* Map Section */}
      <div className="w-full h-60 bg-[#2b2b2c]/30 border border-[#38383f] rounded-2xl mb-8 relative overflow-hidden flex flex-col justify-center items-center text-center p-6 select-none">
        <div className="absolute inset-0 bg-[#232324] opacity-40 pointer-events-none flex items-center justify-center">
          {/* Stylized background lines mimicking map features */}
          <div className="w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="relative z-10">
          <span className="text-3xl mb-2 block">📍</span>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Madrid, Spain</h4>
          <p className="text-[10px] md:text-xs text-gray-400 font-light">Available for remote work worldwide</p>
        </div>
      </div>

      {/* Form Section */}
      <section>
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wider mb-6 uppercase">Contact Form</h3>
        
        {status === "success" ? (
          <div className="bg-[#2b2b2c]/30 border border-green-500/25 rounded-2xl p-6 text-center">
            <span className="text-3xl block mb-2">✉️</span>
            <h4 className="text-sm font-semibold text-white mb-2">Message Sent!</h4>
            <p className="text-[10px] md:text-xs text-gray-400 font-light mb-4">Thank you for your message. I will get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus("idle")} 
              className="text-xs font-semibold text-[#ffdb70] border border-[#ffdb70] px-4 py-2 rounded-xl hover:bg-[#ffdb70] hover:text-black transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name-input" className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Full Name</label>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="bg-[#2b2b2c]/20 border border-[#38383f] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 outline-none transition-colors"
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email-input" className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="johndoe@example.com"
                  className="bg-[#2b2b2c]/20 border border-[#38383f] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 outline-none transition-colors"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message-input" className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">Message</label>
              <textarea
                id="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Write your message here..."
                className="bg-[#2b2b2c]/20 border border-[#38383f] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 bg-gradient-to-r from-[#ffdb70] to-[#f39c12] text-black font-semibold text-xs md:text-sm px-6 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all outline-none"
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </form>
        )}
      </section>

    </article>
  );
}
