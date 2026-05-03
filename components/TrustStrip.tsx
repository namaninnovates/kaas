import { Landmark, ShieldCheck, Lock, Award, Zap, Users, Globe, Star, BadgeCheck, CreditCard, Leaf, TrendingUp } from "lucide-react";

const items = [
  { icon: <Landmark className="w-5 h-5" />,    label: "RBI Compliant" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "IRDAI Approved" },
  { icon: <Lock className="w-5 h-5" />,        label: "ISO 27001 Certified" },
  { icon: <Award className="w-5 h-5" />,       label: "Best Fintech 2024" },
  { icon: <Zap className="w-5 h-5" />,         label: "Instant Approvals" },
  { icon: <Users className="w-5 h-5" />,       label: "50,000+ Customers" },
  { icon: <Globe className="w-5 h-5" />,       label: "Pan India Operations" },
  { icon: <Star className="w-5 h-5" />,        label: "4.9★ Rated" },
  { icon: <BadgeCheck className="w-5 h-5" />,  label: "NBFC Regulated" },
  { icon: <CreditCard className="w-5 h-5" />,  label: "0 Hidden Charges" },
  { icon: <Leaf className="w-5 h-5" />,        label: "Green Finance" },
  { icon: <TrendingUp className="w-5 h-5" />,  label: "₹500Cr+ Disbursed" },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function TrustStrip() {
  return (
    <section className="py-5 border-y border-white/10 overflow-hidden relative">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #130726, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #130726, transparent)" }} />

      <div className="animate-marquee-horizontal">
        {doubled.map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-8 text-sm font-semibold text-white/55 hover:text-[#C19A20] transition-colors duration-300 whitespace-nowrap cursor-default"
          >
            <span className="text-[#C19A20]/70">{icon}</span>
            {label}
            <span className="ml-8 text-white/20">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
