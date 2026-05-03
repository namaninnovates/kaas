"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-fade");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
