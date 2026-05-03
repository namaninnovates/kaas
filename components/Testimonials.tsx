"use client";
import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { initials: "RK", name: "Ramesh Kumar", role: "E-Rickshaw Driver, Delhi", text: "Got my E-Rickshaw loan approved in 45 seconds! KAAS Financials changed my life — I'm now earning ₹800/day." },
  { initials: "PS", name: "Priya Sharma", role: "HR Manager, TechCorp Bengaluru", text: "The Earned Wage Access feature helped our HR team reduce salary advance requests by 80%. Outstanding platform!" },
  { initials: "AM", name: "Aarav Mehta", role: "Business Owner, Mumbai", text: "Converting my insurance premium to EMIs was seamless. Zero paperwork, instant approval — truly 21st century banking." },
  { initials: "SG", name: "Sunita Gupta", role: "Homeowner, Jaipur", text: "Solar financing at 10.5% was unbelievable. My electricity bill dropped to zero and the process was fully online!" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const go = (dir: number) => setCurrent((current + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#E8E3F8] to-[#FDFAF4] section-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8B7CC8]/10 text-[#8B7CC8] border border-[#8B7CC8]/20 mb-4">Success Stories</span>
          <h2 className="text-4xl lg:text-5xl font-black">What Our <span className="animate-shimmer">Customers Say</span></h2>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`glass rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${i === current ? "ring-2 ring-[#C9A84C] shadow-lg shadow-[#C9A84C]/20" : ""}`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
                </div>
                <p className="text-sm text-[#1E1A2E]/70 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-[10px] text-[#1E1A2E]/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#C9A84C] w-6" : "bg-[#C9A84C]/30"}`}
              aria-label={`Testimonial ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
