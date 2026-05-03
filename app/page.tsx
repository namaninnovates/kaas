import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import EMICalculator from "@/components/EMICalculator";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Benefits from "@/components/Benefits";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Benefits />
        <HowItWorks />
        <EMICalculator />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
    </>
  );
}
