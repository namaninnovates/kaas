import { Gem, Users, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Premium Experience",
    desc: "We provide a seamless, digital-first journey for all your financial needs.",
    bg: "bg-white/10 border border-white/20",
    text: "text-[#C4B5E8]",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Trusted Partners",
    desc: "Collaborating with RBI-regulated NBFCs and IRDAI-approved insurers.",
    bg: "bg-white/5 border border-white/10 backdrop-blur-md",
    text: "text-[#C19A20]",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Decisions",
    desc: "Our AI-driven credit engine provides approval in under 60 seconds.",
    bg: "bg-[#F3F0FF]",
    text: "text-[#7C3AED]",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Bank-Grade Security",
    desc: "Your data is protected with 256-bit encryption and ISO 27001 standards.",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
];

export default function Benefits() {
  return (
    <section className="py-32 section-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#C19A20]/10 text-[#E2B938] border border-[#C19A20]/20 mb-4 tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight premium-heading text-white">
            Excellence in <span className="animate-shimmer">Every Transaction</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-[2.5rem] ${b.bg} ${b.text} shadow-xl shadow-black/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:shadow-[#C19A20]/20 transition-all duration-500`}>
                {b.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{b.title}</h3>
              <p className="text-base text-white/60 leading-relaxed font-medium">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
