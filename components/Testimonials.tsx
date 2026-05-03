"use client";
import { Star, Quote, ChevronRight } from "lucide-react";

const allTestimonials = [
  { initials: "RK", name: "Ramesh Kumar", role: "E-Rickshaw Driver, Delhi", text: "Got my E-Rickshaw loan approved in 45 seconds! KAAS Financials changed my life — I'm now earning ₹800/day." },
  { initials: "PS", name: "Priya Sharma", role: "HR Manager, TechCorp", text: "The Earned Wage Access feature helped our HR team reduce salary advance requests by 80%. Outstanding platform!" },
  { initials: "AM", name: "Aarav Mehta", role: "Business Owner, Mumbai", text: "Converting my insurance premium to EMIs was seamless. Zero paperwork, instant approval — truly 21st century banking." },
  { initials: "SG", name: "Sunita Gupta", role: "Homeowner, Jaipur", text: "Solar financing at 10.5% was unbelievable. My electricity bill dropped to zero and the process was fully online!" },
  { initials: "VT", name: "Vikram Tiwari", role: "Fleet Operator, Noida", text: "Upgraded my entire fleet to EVs using KAAS. The process was completely paperless and funds were in my account same day." },
  { initials: "NL", name: "Neha L.", role: "Clinic Owner, Pune", text: "Medical equipment financing was a breeze. They understood my business model and gave terms that worked perfectly for my cash flow." }
];

const col1 = [allTestimonials[0], allTestimonials[1], allTestimonials[2]];
const col2 = [allTestimonials[3], allTestimonials[4], allTestimonials[5]];

function TestimonialCard({ t }: { t: typeof allTestimonials[0] }) {
  return (
    <div className="glass rounded-3xl p-8 flex flex-col gap-6 w-full shadow-lg hover:shadow-glow transition-all duration-300">
      <Quote className="w-10 h-10 text-[#C19A20] opacity-40 rotate-180" />
      <p className="text-base text-white/80 leading-relaxed italic">"{t.text}"</p>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
        <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-[#130726] text-sm font-black shrink-0 shadow-md">
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/50">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left: Sticky Info */}
        <div className="lg:col-span-5 flex flex-col items-start z-10 relative">
          {/* Subtle glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#3D1A6B] opacity-20 blur-[100px] -z-10 rounded-full" />
          
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#C4B5E8] border border-white/20 mb-6">
            Success Stories
          </span>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight premium-heading mb-6">
            Straight from Those Who Chose <span className="text-[#F9D463]">KAAS</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-10">
            Premium financial solutions are about creating a win for everyone in the ecosystem. Here's how our partners and customers benefit when KAAS Financials steps in.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black gold-gradient shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.6)] hover:scale-105 transition-all duration-300">
            Start Your Journey <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Scrolling Columns */}
        <div className="lg:col-span-7 h-[700px] relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full">
            
            {/* Column 1: Scrolls Up Slowly */}
            <div className="overflow-hidden relative h-full w-full">
              <div className="flex flex-col gap-6 animate-marquee-vertical-slow w-full pb-6">
                {[...col1, ...col1].map((t, i) => (
                  <TestimonialCard key={`c1-${i}`} t={t} />
                ))}
              </div>
            </div>

            {/* Column 2: Scrolls Up Faster (or Offset) */}
            <div className="hidden md:block overflow-hidden relative h-full w-full">
              {/* To make it look offset, we can translate it slightly or use a different duration */}
              <div className="flex flex-col gap-6 animate-marquee-vertical w-full pt-12 pb-6">
                {[...col2, ...col2].map((t, i) => (
                  <TestimonialCard key={`c2-${i}`} t={t} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
