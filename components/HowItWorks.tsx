import { Smartphone, FileCheck, Zap, Building } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "1. Download App",
    desc: "Scan the QR code or visit Play Store / App Store to get started.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "2. Verify KYC",
    desc: "Complete your paperless KYC in under 2 minutes with Aadhaar/PAN.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "3. Instant Approval",
    desc: "Our AI engine analyzes your profile and provides credit limits instantly.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "4. Disbursal",
    desc: "Funds are transferred directly to your bank account or partner wallet.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-[#2D1B69] text-white section-fade overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent -translate-y-1/2 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#C9A84C]/20 text-[#F0CC6E] border border-[#C9A84C]/30 mb-4 tracking-widest uppercase">
            The Digital Flow
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Get Started in <span className="text-[#F0CC6E]">4 Easy Steps</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-medium text-lg">
            Experience the future of finance with our streamlined 100% digital onboarding process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-[#C9A84C] group-hover:text-[#1E1A2E] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{s.title}</h3>
              <p className="text-base text-white/50 leading-relaxed font-medium">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-6 w-12 h-px bg-[#C9A84C]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
