import { Leaf, Zap, Users } from "lucide-react";

const pillars = [
  { icon: <Leaf className="w-6 h-6" />, title: "Green First", sub: "EV & solar at our core" },
  { icon: <Zap className="w-6 h-6" />, title: "Instant Decisions", sub: "AI-powered underwriting" },
  { icon: <Users className="w-6 h-6" />, title: "Phygital Reach", sub: "Digital + on-ground teams" },
];

const metrics = [
  { num: "2019", label: "Founded", highlight: false },
  { num: "15+", label: "States Covered", highlight: true },
  { num: "50K+", label: "Customers", highlight: false },
  { num: "₹500Cr", label: "Disbursed", highlight: true },
];

export default function About() {
  return (
    <section id="about" className="py-32 section-fade">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C19A20]/10 text-[#E2B938] border border-[#C19A20]/20 mb-6">Our Story</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight premium-heading mb-6">
            Bridging the Gap Between{" "}
            <span className="animate-shimmer">Finance & People</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            KAAS Financials was founded with a single mission: make premium financial services accessible to every Indian — from EV drivers to enterprise HR teams.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            We combine the <strong className="text-white">phygital credibility</strong> of established NBFCs with the <strong className="text-white">speed and elegance</strong> of modern fintech. Our API-first architecture ensures future-ready integrations with CIBIL, Razorpay, and Aadhar eKYC.
          </p>
          <div className="flex flex-wrap gap-4">
            {pillars.map(p => (
              <div key={p.title} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-[#C4B5E8]/40 transition-colors duration-300">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="text-sm font-bold">{p.title}</p>
                  <p className="text-xs text-white/50">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map(m => (
            <div key={m.label} className={`rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ${m.highlight ? "gold-gradient text-white shadow-lg shadow-[#C19A20]/30" : "glass border border-[#C19A20]/20"}`}>
              <span className={`text-3xl font-black mb-1 ${m.highlight ? "text-white" : "text-[#C19A20]"}`}>{m.num}</span>
              <span className={`text-xs font-medium ${m.highlight ? "text-white/80" : "text-white/60"}`}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
