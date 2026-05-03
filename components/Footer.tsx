import { Globe, Mail, Share2 } from "lucide-react";

const cols = [
  {
    title: "Solutions",
    links: [["EV & Green Loans","#"],["Earned Wage Access","#"],["Insurance Financing","#"],["Personal Loans","#"]],
  },
  {
    title: "Company",
    links: [["About Us","#about"],["Success Stories","#testimonials"],["Careers","#"],["Blog","#"]],
  },
  {
    title: "Legal",
    links: [["Privacy Policy","#"],["Terms of Service","#"],["Fair Practice Code","#"],["Grievance Redressal","#"]],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E0B3B] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold mb-4">
              <span className="text-[#F0CC6E] text-2xl font-black">K</span>
              <span className="text-white">AAS</span>
              <span className="text-[#8B7CC8] font-semibold ml-1">Financials</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Next-gen fintech platform delivering smart, green, and instant financial solutions across India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Globe className="w-4 h-4" />, c: "hover:bg-blue-600" },
                { icon: <Share2 className="w-4 h-4" />, c: "hover:bg-white/20" },
                { icon: <Mail className="w-4 h-4" />, c: "hover:bg-pink-500" }
              ].map((s, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${s.c}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h5 className="text-white font-semibold text-sm mb-4">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm hover:text-[#F0CC6E] transition-colors duration-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 space-y-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
            <span>GST IN: 06AABCK1234F1Z5</span>
            <span>CIN: U65910HR2019PTC082456</span>
            <span>RBI Registration: N-14.03268</span>
          </div>
          <p className="text-xs text-white/30">© 2026 KAAS Financials Pvt. Ltd. All rights reserved.</p>
          <p className="text-[10px] text-white/20 max-w-2xl">
            KAAS Financials is an RBI-regulated NBFC. Loans are subject to credit assessment and applicable terms. Interest rates may vary based on borrower profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
