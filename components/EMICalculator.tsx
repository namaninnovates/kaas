"use client";
import { useState, useCallback } from "react";

type RateType = "reducing" | "flat";

function fmt(n: number) {
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}

function calcEMIReducing(P: number, rAnnual: number, n: number) {
  const r = rAnnual / 12 / 100;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcEMIFlat(P: number, rAnnual: number, n: number) {
  const totalInterest = (P * rAnnual * (n / 12)) / 100;
  return (P + totalInterest) / n;
}

export default function EMICalculator() {
  const [rateType, setRateType] = useState<RateType>("reducing");
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(24);

  const emi = rateType === "reducing" ? calcEMIReducing(loan, rate, tenure) : calcEMIFlat(loan, rate, tenure);
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - loan;
  const principalPct = Math.round((loan / totalPayable) * 100);
  const interestPct = 100 - principalPct;

  const circumference = 2 * Math.PI * 70;
  const principalDash = (principalPct / 100) * circumference;
  const interestDash = (interestPct / 100) * circumference;

  return (
    <section id="calculator" className="py-24 bg-[#FFFBF0] section-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C9A84C]/10 text-[#A07830] border border-[#C9A84C]/20 mb-4">Plan Your Finances</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-3">EMI <span className="animate-shimmer">Calculator</span></h2>
          <p className="text-[#1E1A2E]/60">Toggle between Reducing and Flat interest rates.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Inputs */}
          <div className="glass rounded-3xl p-8 space-y-8">
            {/* Toggle */}
            <div className="flex rounded-full bg-[#E8E3F8] p-1 gap-1">
              {(["reducing","flat"] as RateType[]).map(t => (
                <button key={t} onClick={() => setRateType(t)}
                  className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${rateType === t ? "gold-gradient text-white shadow-md" : "text-[#1E1A2E]/60 hover:text-[#C9A84C]"}`}>
                  {t === "reducing" ? "Reducing Rate" : "Flat Rate"}
                </button>
              ))}
            </div>

            {/* Sliders */}
            {[
              { label: "Loan Amount (₹)", id: "loan", min: 10000, max: 5000000, step: 10000, value: loan, set: setLoan, display: "₹ " + loan.toLocaleString("en-IN") },
              { label: "Interest Rate (% p.a.)", id: "rate", min: 6, max: 36, step: 0.5, value: rate, set: setRate, display: rate + " %" },
              { label: "Tenure (Months)", id: "tenure", min: 6, max: 84, step: 6, value: tenure, set: setTenure, display: tenure + " months" },
            ].map(({ label, id, min, max, step, value, set, display }) => (
              <div key={id} className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#1E1A2E]/80">{label}</label>
                  <span className="text-sm font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">{display}</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={value}
                  onChange={e => set(Number(e.target.value))}
                  className="w-full cursor-pointer" />
                <div className="flex justify-between text-[10px] text-[#1E1A2E]/40">
                  <span>{id === "loan" ? "₹10K" : id === "rate" ? "6%" : "6M"}</span>
                  <span>{id === "loan" ? "₹50L" : id === "rate" ? "36%" : "84M"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="glass-gold rounded-3xl p-8 flex flex-col items-center gap-6">
            {/* Donut */}
            <div className="relative w-52 h-52">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#E8E3F8" strokeWidth="20" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#C9A84C" strokeWidth="20"
                  strokeDasharray={`${principalDash} ${circumference}`} strokeLinecap="round" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#8B7CC8" strokeWidth="20"
                  strokeDasharray={`${interestDash} ${circumference}`}
                  strokeDashoffset={-principalDash} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-[#1E1A2E]/50 font-medium">Monthly EMI</span>
                <span className="text-2xl font-black text-[#1E1A2E]">{fmt(emi)}</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="w-full space-y-3">
              {[
                { dot: "bg-[#C9A84C]", label: "Principal Amount", val: fmt(loan) },
                { dot: "bg-[#8B7CC8]", label: "Total Interest", val: fmt(totalInterest) },
                { dot: "bg-[#1E1A2E]", label: "Total Payable", val: fmt(totalPayable), bold: true },
              ].map(({ dot, label, val, bold }) => (
                <div key={label} className={`flex justify-between items-center py-2 ${bold ? "border-t border-[#C9A84C]/30 pt-3" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${dot}`} />
                    <span className={`text-sm ${bold ? "font-bold" : "text-[#1E1A2E]/70"}`}>{label}</span>
                  </div>
                  <span className={`text-sm ${bold ? "font-black text-[#C9A84C]" : "font-semibold"}`}>{val}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="w-full text-center py-3.5 rounded-full text-white font-semibold gold-gradient shadow-md hover:shadow-[#C9A84C]/40 hover:scale-[1.02] transition-all duration-300">
              Apply for This Loan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
