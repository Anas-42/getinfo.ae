import React from "react";
import Container from "../ui/Container";

export default function WhyBuild() {
  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-24">
      <Container className="grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-6 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            WHY BUILD
          </h2>

          {/* arrow line */}
          <svg className="mt-6" width="260" height="28" viewBox="0 0 260 28" fill="none" aria-hidden="true">
            <path d="M0 14h220" stroke="#6fd0df" strokeWidth="4" />
            <path d="M210 6l12 8-12 8" fill="none" stroke="#6fd0df" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="md:col-span-6 text-white/80 leading-relaxed text-[clamp(1.05rem,2.2vw,1.5rem)]">
        We built GetInfo to solve a simple problem: making information access effortless and intelligent. Businesses today need scalable solutions that reduce staffing costs while still providing a world-class visitor experience.
        By blending AI, speech technology, and immersive design, we’re transforming the info desk into a tool that is not just functional, but also engaging, modern, and memorable.
        </div>
      </Container>

      {/* second wave continuing off-screen */}
      <svg className="pointer-events-none absolute inset-x-0 -top-10 -z-10" viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none">
        <path d="M-10 140c180-90 360-90 540-30s360 120 540 60 360-180 540-180" stroke="#6fd0df" strokeWidth="6"/>
      </svg>
    </section>
  );
}
