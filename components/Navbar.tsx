"use client";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const links = ["Home","About","EMI Calc","Stories","Contact"];
const hrefs = ["#home","#about","#calculator","#testimonials","#contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl`}>
      <div className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${scrolled ? "glass shadow-2xl shadow-[#C19A20]/20 border-[#C19A20]/10" : "bg-white/5 backdrop-blur-md border-white/10 shadow-lg"}`}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-[#E2B938] text-2xl font-black">K</span>
          <span className={`transition-colors duration-500 ${scrolled ? "text-white" : "text-white"}`}>AAS</span>
          <span className={`ml-1 font-semibold transition-colors duration-500 ${scrolled ? "text-[#C4B5E8]" : "text-[#DCD3F8]"}`}>Financials</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <li key={l}>
              <a href={hrefs[i]} className={`text-sm font-semibold transition-colors duration-200 relative group ${scrolled ? "text-white/70 hover:text-[#C19A20]" : "text-white/80 hover:text-[#E2B938]"}`}>
                {l}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 rounded-full ${scrolled ? "bg-[#C19A20]" : "bg-[#E2B938]"} group-hover:w-full`} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white gold-gradient shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.6)] hover:scale-105 transition-all duration-300">
          Apply Now <ChevronRight className="w-4 h-4" />
        </a>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""} bg-white`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? "opacity-0" : ""} bg-white`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""} bg-white`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 hover:text-[#C19A20] transition-colors">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white gold-gradient">Apply Now</a>
        </div>
      )}
    </nav>
  );
}
