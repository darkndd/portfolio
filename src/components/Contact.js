"use client";
import { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

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
    <article className="py-4 md:py-6">
      
      {/* Title */}
      <header className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Contact</h2>
        <div className="title-underline" />
      </header>

      {/* Map Section */}
      <div className="w-full h-64 bg-zinc-900/50 border border-zinc-800 rounded-2xl mb-10 relative overflow-hidden flex flex-col justify-center items-center text-center p-6 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
        <div className="absolute inset-0 bg-[#09090b] opacity-60 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-4 shadow-lg">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <h4 className="text-base font-semibold text-white tracking-wide mb-1">Madrid, Spain</h4>
          <p className="text-xs md:text-sm text-zinc-400 font-light">Available for remote work worldwide</p>
        </div>
      </div>

      {/* Form Section */}
      <section>
        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-6">Send a Message</h3>
        
        {status === "success" ? (
          <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <FaCheckCircle className="text-4xl text-emerald-500 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Message Sent Successfully!</h4>
            <p className="text-sm text-zinc-400 font-light mb-8 max-w-md">Thank you for reaching out. I will review your message and get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus("idle")} 
              className="text-sm font-medium text-white border border-zinc-700 bg-zinc-800 px-6 py-2.5 rounded-full hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name-input" className="text-xs text-zinc-400 font-medium">Full Name</label>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="bg-zinc-900/50 border border-zinc-800 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus-visible:ring-1 focus-visible:ring-blue-500"
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email-input" className="text-xs text-zinc-400 font-medium">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="hello@example.com"
                  className="bg-zinc-900/50 border border-zinc-800 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus-visible:ring-1 focus-visible:ring-blue-500"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message-input" className="text-xs text-zinc-400 font-medium">Message</label>
              <textarea
                id="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="How can I help you?"
                className="bg-zinc-900/50 border border-zinc-800 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none focus-visible:ring-1 focus-visible:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 bg-blue-600 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-blue-500 active:scale-[0.98] transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-70 disabled:active:scale-100"
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
