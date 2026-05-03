import { Landmark, ShieldCheck, Lock } from "lucide-react";

export default function TrustStrip() {
  const logos = [
    { icon: <Landmark className="w-6 h-6" />, label: "RBI Compliant" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "IRDAI Approved" },
    { icon: <Lock className="w-6 h-6" />, label: "ISO 27001" },
  ];
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] whitespace-nowrap">
            Regulated & Trusted By
          </span>
          <div className="flex flex-wrap gap-8 md:gap-16 justify-center items-center">
            {logos.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm font-bold text-charcoal/60 hover:text-[#C9A84C] transition-all duration-300 group">
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">{icon}</span>
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
