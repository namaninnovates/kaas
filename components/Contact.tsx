"use client";
import { useState } from "react";

import { MapPin, Phone, Mail, CheckCircle, MessageCircle, ChevronRight, Globe, Share2, Camera } from "lucide-react";

const info = [
  { icon: <MapPin className="w-6 h-6 text-white" />, title: "Office", lines: ["Level 12, Cyber Hub Tower,", "Gurugram, Haryana 122002"] },
  { icon: <Phone className="w-6 h-6 text-white" />, title: "Call Us", lines: ["+91 1800-XXX-XXXX", "(Mon–Sat, 9am–6pm)"] },
  { icon: <Mail className="w-6 h-6 text-white" />, title: "Email", lines: ["support@kaasfinancials.in", "partnerships@kaasfinancials.in"] },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#1E0B3B] to-[#2D1B69] text-white section-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C9A84C]/20 text-[#F0CC6E] border border-[#C9A84C]/30 mb-4">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to <span className="animate-shimmer">Get Started?</span></h2>
          <p className="text-white/50 mt-3">Fill in your details — our team responds within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="glass rounded-3xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center text-white animate-bounce"><CheckCircle className="w-10 h-10" /></div>
                <h3 className="text-xl font-bold">Thank you!</h3>
                <p className="text-[#1E1A2E]/60">We'll reach you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-[#C9A84C] underline">Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "Full Name", type: "text", ph: "Ramesh Kumar" },
                    { id: "fphone", label: "Phone Number", type: "tel", ph: "+91 98765 43210" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-semibold mb-2">{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.ph} required
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A84C]/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 transition-all placeholder-[#1E1A2E]/30" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="femail" className="block text-sm font-semibold mb-2">Email Address</label>
                  <input id="femail" type="email" placeholder="ramesh@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#C9A84C]/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 transition-all placeholder-[#1E1A2E]/30" />
                </div>
                <div>
                  <label htmlFor="fproduct" className="block text-sm font-semibold mb-2">Product of Interest</label>
                  <select id="fproduct" required className="w-full px-4 py-3 rounded-xl border border-[#C9A84C]/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 transition-all text-[#1E1A2E]/70">
                    <option value="">Select a product</option>
                    {["EV / Green Loan","Earned Wage Access","Insurance Premium Financing","Personal / Medical Loan","Corporate Financing"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="fmsg" className="block text-sm font-semibold mb-2">Message (Optional)</label>
                  <textarea id="fmsg" rows={3} placeholder="Tell us about your requirement..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C9A84C]/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 transition-all placeholder-[#1E1A2E]/30 resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-full text-white font-semibold gold-gradient shadow-md hover:shadow-[#C9A84C]/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60">
                  {loading ? "Submitting..." : <span className="flex items-center justify-center gap-2">Submit Enquiry <ChevronRight className="w-4 h-4" /></span>}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            {info.map(({ icon, title, lines }) => (
              <div key={title} className="glass-gold rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300">
                <span className="mt-1">{icon}</span>
                <div>
                  <p className="font-bold text-white mb-1">{title}</p>
                  {lines.map(l => <p key={l} className="text-sm text-white/60">{l}</p>)}
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-5 flex items-start gap-4 border border-green-400/30 hover:scale-[1.02] transition-transform duration-300">
              <span className="mt-1"><MessageCircle className="w-6 h-6 text-green-400" /></span>
              <div>
                <p className="font-bold text-white mb-1">WhatsApp</p>
                <a href="#" className="text-sm text-green-400 hover:underline flex items-center gap-1">Chat with us instantly <ChevronRight className="w-3 h-3" /></a>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: <Globe className="w-5 h-5" />, c: "bg-blue-600" },
                { icon: <Share2 className="w-5 h-5" />, c: "bg-[#1E1A2E] border border-white/20" },
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
