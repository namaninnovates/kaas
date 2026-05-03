import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KAAS Financials — Smart Lending for a Better Tomorrow",
  description: "KAAS Financials offers modern fintech solutions — Green Loans, Earned Wage Access, Insurance Premium Financing, and more. 100% digital, RBI-compliant.",
  openGraph: {
    title: "KAAS Financials — Smart Lending",
    description: "Next-gen fintech platform with premium financial products for individuals and businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] bg-gradient-to-br from-[#130726] via-[#26104A] to-[#3D1A6B] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
