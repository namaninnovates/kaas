const products = [
  {
    id: "prod-ev",
    icon: "🌿",
    tag: "Green Finance",
    title: "EV & Green Loans",
    desc: "Finance your electric vehicle, solar panels, or EV charging infrastructure with competitive rates and flexible tenures.",
    features: ["E-Rickshaws, 2W & 4W EV loans", "Solar energy financing", "Fleet aggregator B2B loans"],
    color: "from-emerald-400/20 to-green-300/10",
    border: "border-emerald-300/40",
    tagColor: "bg-emerald-100 text-emerald-700",
    featured: false,
  },
  {
    id: "prod-ewa",
    icon: "💼",
    tag: "Earned Wage Access",
    title: "Salary on Demand",
    desc: "Access your earned salary before payday. Zero debt traps — just financial freedom for your employees.",
    features: ["Instant transfer to bank account", "Employer dashboard integration", "RBI DLG compliant"],
    color: "from-[#C19A20]/20 to-[#E2B938]/10",
    border: "border-[#C19A20]/50",
    tagColor: "bg-[#C19A20]/10 text-[#E2B938]",
    featured: true,
  },
  {
    id: "prod-ipf",
    icon: "🛡️",
    tag: "Insurance Financing",
    title: "Premium Financing",
    desc: "Convert your annual insurance premiums into easy monthly EMIs. Life, health, and corporate insurance covered.",
    features: ["Life & health IPF", "Zero foreclosure charges", "Surrender value loans"],
    color: "from-[#C4B5E8]/30 to-[#E8E3F8]/20",
    border: "border-[#8B7CC8]/30",
    tagColor: "bg-white/10 border border-white/20 text-[#C4B5E8]",
    featured: false,
  },
  {
    id: "prod-personal",
    icon: "👤",
    tag: "Personal Loans",
    title: "Personal & Medical",
    desc: "Quick personal loans and Mediclaim financing — for life's planned and unplanned expenses.",
    features: ["Mediclaim financing", "Govt. employee loans", "Corporate structured debt"],
    color: "from-rose-300/20 to-pink-200/10",
    border: "border-rose-300/30",
    tagColor: "bg-rose-100 text-rose-600",
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 section-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C19A20]/10 text-[#E2B938] border border-[#C19A20]/20 mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight premium-heading mb-4">
            Financial Products{" "}
            <span className="animate-shimmer">Built for You</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Every product designed with zero paperwork, instant decisions, and full regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className={`relative rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-md border ${p.border} shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-[#C19A20]/20 hover:-translate-y-3 transition-all duration-500 group cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${p.tagColor} mb-4`}>{p.tag}</span>
                <h3 className="text-xl font-black mb-3 text-white">{p.title}</h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-white/70 font-medium">
                      <span className="text-[#C19A20] font-bold mt-0.5">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#C19A20] group-hover:gap-4 transition-all duration-300">
                  Apply Now <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
