"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Award, Zap, Leaf, Lock, TrendingUp, FileText, MapPin, CreditCard, ChevronRight } from "lucide-react";

function useCounter(target: number, ref: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
      else el.textContent = Math.floor(start).toLocaleString();
    }, 16);
    return () => clearInterval(timer);
  }, [target, ref]);
}

export default function Hero() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const r3 = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useCounter(50000, r1);
  useCounter(500, r2);
  useCounter(98, r3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 30, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-stats", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

      gsap.from(phoneRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: 10,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroContentRef} className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24 text-white">
      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8B7CC8] opacity-20 blur-3xl animate-mesh -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C19A20] opacity-10 blur-3xl animate-mesh -z-10 -translate-x-1/3 translate-y-1/4" style={{animationDelay: "2s"}} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#C4B5E8] opacity-10 blur-2xl animate-mesh -z-10 -translate-x-1/2 -translate-y-1/2" style={{animationDelay: "4s"}} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center w-full">
        {/* Left */}
        <div className="hero-content-wrapper">
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#E2B938] mb-8 tracking-wide">
            <Award className="w-4 h-4" /> RBI Compliant &nbsp;·&nbsp; 100% Digital &nbsp;·&nbsp; Trusted by 50,000+
          </div>
          <h1 className="hero-title text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 text-white uppercase tracking-tight">
            Finance That<br/>
            <span className="animate-shimmer">Moves With You</span>
          </h1>
          <p className="hero-sub text-xl text-white/70 leading-relaxed mb-10 max-w-xl font-medium">
            From green EV loans to earned wage access — KAAS Financials delivers premium financial solutions with zero paperwork and instant approvals.
          </p>
          <div className="hero-ctas flex flex-wrap gap-5 mb-12">
            <a href="#contact" className="px-12 py-5 rounded-full text-white font-black bg-[#E2B938] shadow-2xl shadow-[#C19A20]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#calculator" className="px-12 py-5 rounded-full font-black border-2 border-white/20 text-white hover:border-[#E2B938] hover:text-[#E2B938] transition-all duration-300 bg-white/5 backdrop-blur-sm">
              Try Calculator
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap gap-12 mt-12">
            <div>
              <div className="flex items-end gap-1">
                <span ref={r1} className="text-4xl font-black text-white tracking-tighter">0</span>
                <span className="text-2xl font-bold text-[#E2B938]">+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Happy Customers</p>
            </div>
            <div className="w-px bg-white/10 h-12" />
            <div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-[#E2B938]">₹</span>
                <span ref={r2} className="text-4xl font-black text-white tracking-tighter">0</span>
                <span className="text-2xl font-bold text-[#E2B938]">Cr+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Amount Disbursed</p>
            </div>
            <div className="w-px bg-white/10 h-12" />
            <div>
              <div className="flex items-end gap-1">
                <span ref={r3} className="text-4xl font-black text-white tracking-tighter">0</span>
                <span className="text-2xl font-bold text-[#E2B938]">%</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Approval Rate</p>
            </div>
          </div>
        </div>

        {/* Right – Phone mockup */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Phone */}
          <div className="absolute inset-0 w-64 h-[480px] rounded-[3rem] bg-[#C19A20]/20 blur-2xl animate-pulse" style={{ zIndex: 0 }}></div>
          <div ref={phoneRef} className="relative w-64 h-[480px] rounded-[3rem] gold-gradient p-1 shadow-2xl shadow-[#C19A20]/30 animate-float z-10">
            <div className="w-full h-full rounded-[2.8rem] bg-[#130726]/80 backdrop-blur-xl border border-white/10 flex flex-col items-center p-6 gap-5">
              <div className="w-16 h-1.5 rounded-full bg-[#1E1A2E]/20 mt-1" />
              <p className="text-xs font-bold text-[#C4B5E8] mt-2 tracking-widest uppercase">KAAS Mobile</p>
              <div className="w-full rounded-2xl bg-gradient-to-br from-[#1E1A2E] to-[#3D3560] p-4 text-white">
                <p className="text-xs opacity-60">Approved Limit</p>
                <p className="text-2xl font-black mt-1">₹ 2,45,000</p>
                <div className="mt-3 w-full h-1.5 rounded-full bg-white/20">
                  <div className="w-3/4 h-full rounded-full bg-[#C19A20]" />
                </div>
                <p className="text-[10px] opacity-40 mt-1">75% utilised</p>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full mt-2">
                {[
                  { label: "Apply", icon: <FileText className="w-5 h-5" /> },
                  { label: "Track", icon: <MapPin className="w-5 h-5" /> },
                  { label: "Pay", icon: <CreditCard className="w-5 h-5" /> }
                ].map(a => (
                  <div key={a.label} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/20 transition-transform hover:scale-105 cursor-pointer">
                    <span className="text-[#C4B5E8]">{a.icon}</span>
                    <span className="text-[10px] font-bold text-[#C4B5E8]">{a.label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full rounded-xl bg-[#C19A20]/10 p-3 border border-[#C19A20]/20">
                <p className="text-[9px] text-[#E2B938] font-semibold">NEXT EMI</p>
                <p className="text-sm font-bold text-white mt-0.5">₹ 8,547 <span className="text-[10px] text-green-500 font-medium">✓ On Time</span></p>
              </div>
            </div>
          </div>

          {/* Float cards */}
          <div className="absolute top-12 -left-8 glass rounded-[2rem] p-4 flex items-center gap-4 shadow-xl animate-float-delay min-w-[180px] border border-white/30">
            <div className="w-10 h-10 rounded-xl bg-[#C19A20]/10 flex items-center justify-center text-[#C19A20]"><Zap className="w-6 h-6" /></div>
            <div><p className="text-sm font-bold text-white">Instant Approval</p><p className="text-[11px] text-white/70">Under 60 seconds</p></div>
          </div>
          <div className="absolute bottom-24 -left-12 glass-gold rounded-[2rem] p-4 flex items-center gap-4 shadow-xl min-w-[180px] border border-white/20" style={{animation:"float 4s ease-in-out infinite 0.8s"}}>
            <div className="w-10 h-10 rounded-xl bg-[#C19A20] flex items-center justify-center text-white"><Leaf className="w-6 h-6" /></div>
            <div><p className="text-sm font-bold text-white">Green Loans</p><p className="text-[11px] text-white/70">EV & Solar power</p></div>
          </div>
          <div className="absolute top-16 -right-8 glass rounded-[2rem] p-4 flex items-center gap-4 shadow-xl min-w-[180px] border border-white/30" style={{animation:"float 4s ease-in-out infinite 1.2s"}}>
            <div className="w-10 h-10 rounded-xl bg-[#C19A20]/10 flex items-center justify-center text-[#C19A20]"><Lock className="w-6 h-6" /></div>
            <div><p className="text-sm font-bold text-white">Secure</p><p className="text-[11px] text-white/70">256-bit encrypted</p></div>
          </div>
          <div className="absolute bottom-12 -right-4 glass-gold rounded-[2rem] p-4 flex items-center gap-4 shadow-xl min-w-[170px] border border-white/20" style={{animation:"float 4s ease-in-out infinite 2s"}}>
            <div className="w-10 h-10 rounded-xl bg-[#C19A20] flex items-center justify-center text-white"><TrendingUp className="w-6 h-6" /></div>
            <div><p className="text-sm font-bold text-white">Live Tracking</p><p className="text-[11px] text-white/70">Real-time updates</p></div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-1 h-6 rounded-full bg-[#C19A20] animate-bounce" />
      </div>
    </section>
  );
}
