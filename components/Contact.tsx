"use client";
import { useState } from "react";

import { MapPin, Phone, Mail, CheckCircle, MessageCircle, ChevronRight, Globe, Share2, Camera } from "lucide-react";

const info = [
  { icon: <MapPin className="w-6 h-6 text-[#26104A]" />, title: "Office", lines: ["Level 12, Cyber Hub Tower,", "Gurugram, Haryana 122002"] },
  { icon: <Phone className="w-6 h-6 text-[#26104A]" />, title: "Call Us", lines: ["+91 1800-XXX-XXXX", "(Mon–Sat, 9am–6pm)"] },
  { icon: <Mail className="w-6 h-6 text-[#26104A]" />, title: "Email", lines: ["support@kaasfinancials.in", "partnerships@kaasfinancials.in"] },
];

const inputCls = "w-full px-4 py-3 rounded-xl border border-[#26104A]/20 bg-white text-[#130726] text-sm focus:outline-none focus:ring-2 focus:ring-[#C19A20]/50 transition-all placeholder-[#130726]/30 shadow-sm";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <section id="contact" className="py-32 section-fade bg-white text-[#130726]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C19A20]/10 text-[#C19A20] border border-[#C19A20]/30 mb-4">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight premium-heading text-[#130726]">Ready to <span className="text-[#C19A20]">Get Started?</span></h2>
          <p className="text-[#130726]/50 mt-3">Fill in your details — our team responds within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-3xl p-8 shadow-xl border border-[#26104A]/10 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center text-white animate-bounce"><CheckCircle className="w-10 h-10" /></div>
                <h3 className="text-xl font-bold text-[#130726]">Thank you!</h3>
                <p className="text-[#130726]/60">We'll reach you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-[#C19A20] underline">Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "Full Name", type: "text", ph: "Ramesh Kumar" },
                    { id: "fphone", label: "Phone Number", type: "tel", ph: "+91 98765 43210" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-semibold mb-2 text-[#130726]">{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.ph} required className={inputCls} />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="femail" className="block text-sm font-semibold mb-2 text-[#130726]">Email Address</label>
                  <input id="femail" type="email" placeholder="ramesh@email.com" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="fproduct" className="block text-sm font-semibold mb-2 text-[#130726]">Product of Interest</label>
                  <select id="fproduct" required className={inputCls + " text-[#130726]/70 cursor-pointer"}>
                    <option value="">Select a product</option>
                    {["EV / Green Loan","Earned Wage Access","Insurance Premium Financing","Personal / Medical Loan","Corporate Financing"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="fmsg" className="block text-sm font-semibold mb-2 text-[#130726]">Message (Optional)</label>
                  <textarea id="fmsg" rows={3} placeholder="Tell us about your requirement..."
                    className={inputCls + " resize-none"} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-full text-white font-semibold gold-gradient shadow-md hover:shadow-[0_0_20px_rgba(201,168,76,0.6)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60">
                  {loading ? "Submitting..." : <span className="flex items-center justify-center gap-2">Submit Enquiry <ChevronRight className="w-4 h-4" /></span>}
                </button>
              </form>
            )}
          </div>

          {/* Info Cards — keep purple */}
          <div className="flex flex-col gap-5">
            {info.map(({ icon, title, lines }) => (
              <div key={title} className="rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-lg" style={{background: "linear-gradient(135deg, #26104A, #3D1A6B)", border: "1px solid rgba(255,255,255,0.1)"}}>
                <span className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-white mb-1">{title}</p>
                  {lines.map(l => <p key={l} className="text-sm text-white/65">{l}</p>)}
                </div>
              </div>
            ))}
            <div className="rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-lg" style={{background: "linear-gradient(135deg, #26104A, #3D1A6B)", border: "1px solid rgba(74,222,128,0.2)"}}>
              <span className="mt-1 w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6 text-green-400" /></span>
              <div>
                <p className="font-bold text-white mb-1">WhatsApp</p>
                <a href="#" className="text-sm text-green-400 hover:underline flex items-center gap-1">Chat with us instantly <ChevronRight className="w-3 h-3" /></a>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: <Globe className="w-5 h-5" />, c: "bg-blue-600" },
                { icon: <Share2 className="w-5 h-5" />, c: "bg-[#26104A] border border-white/20" },
                { icon: <Camera className="w-5 h-5" />, c: "bg-gradient-to-br from-pink-500 to-orange-400" }
              ].map((s, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full ${s.c} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
