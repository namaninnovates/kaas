import Navbar from "@/components/Navbar";
import EMICalculator from "@/components/EMICalculator";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator — KAAS Financials",
  description: "Calculate your loan EMI instantly. Toggle between reducing and flat interest rates with our smart EMI calculator.",
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <EMICalculator />
      </main>
      <Footer />
      <ScrollObserver />
    </>
  );
}
