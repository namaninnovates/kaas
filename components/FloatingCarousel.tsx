"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Eco Mobility",
    subtitle: "Green Finance",
    icon: "🌿",
    desc: "Finance your EV journey with rates that care for the planet.",
    color: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
  },
  {
    title: "Salary Advance",
    subtitle: "Financial Freedom",
    icon: "⚡",
    desc: "Access your earned wages instantly. No interest, no stress.",
    color: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
  },
  {
    title: "Smart Insurance",
    subtitle: "Risk Management",
    icon: "🛡️",
    desc: "Premium financing that fits your monthly budget perfectly.",
    color: "bg-lavender",
    border: "border-lavender-dark/20",
    text: "text-lavender-dark",
  },
  {
    title: "Solar Power",
    subtitle: "Renewable Energy",
    icon: "☀️",
    desc: "Power your home with clean energy through easy EMIs.",
    color: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  {
    title: "Health First",
    subtitle: "Medical Loans",
    icon: "🏥",
    desc: "Focus on recovery while we handle the medical expenses.",
    color: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
  },
];

export default function FloatingCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const totalWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xDist = totalWidth - viewportWidth + 100;

    const ctx = gsap.context(() => {
      // Perspective and scale effect for each card
      gsap.utils.toArray(".floating-card").forEach((card: any) => {
        gsap.fromTo(card, 
          { 
            scale: 0.8,
            opacity: 0.5,
            rotationY: 45 
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontalScroll"), // We'll name the animation above
              start: "left right",
              end: "center center",
              scrub: true,
            }
          }
        );
      });

      // Rename the horizontal scroll for referencing
      const horizontalScroll = gsap.to(containerRef.current, {
        x: -xDist,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          id: "horizontalScroll"
        },
      });

      // Individual card floating animations
      gsap.utils.toArray(".floating-card").forEach((card: any, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -20 : 20,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col justify-center overflow-hidden py-20">
      <div className="px-6 mb-12 max-w-7xl mx-auto w-full">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C19A20]/10 text-[#E2B938] border border-[#C19A20]/20 mb-4">
          Solutions Showcase
        </span>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight premium-heading">
          Dynamic Solutions for <span className="animate-shimmer">Modern Lives</span>
        </h2>
      </div>

      <div ref={containerRef} className="flex gap-8 px-20 items-center min-w-max h-[450px]">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`floating-card w-[350px] h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-between shadow-xl transition-shadow hover:shadow-2xl border-2 ${card.color} ${card.border}`}
          >
            <div>
              <div className="text-5xl mb-6">{card.icon}</div>
              <span className={`text-xs font-bold uppercase tracking-widest ${card.text} opacity-70`}>
                {card.subtitle}
              </span>
              <h3 className="text-2xl font-black mt-2 text-white">{card.title}</h3>
            </div>
            
            <div>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                {card.desc}
              </p>
              <button className={`text-sm font-bold flex items-center gap-2 group ${card.text}`}>
                Learn More 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lavender/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
