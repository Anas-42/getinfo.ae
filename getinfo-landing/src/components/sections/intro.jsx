import React from "react";
import Container from "../ui/Container";

export default function Intro() {
  return (
    <section id="intro" className="relative overflow-hidden py-16 sm:py-24">
      {/* Title + arrow */}
      <Container className="grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-6 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            INTRODUCTION
          </h2>
          <div className="text-white/70 text-lg">To GetInfo.ae</div>

          {/* arrow line */}
          <svg className="mt-6" width="260" height="28" viewBox="0 0 260 28" fill="none" aria-hidden="true">
            <path d="M0 14h220" stroke="#6fd0df" strokeWidth="4" />
            <path d="M210 6l12 8-12 8" fill="none" stroke="#6fd0df" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Right intro text (like your mock) */}
        <div className="md:col-span-6 text-white/80 leading-relaxed text-[clamp(1.05rem,2.2vw,1.5rem)]">
        We believe the way people access information is outdated. Traditional info desks and static kiosks 
        are often slow, limited, and difficult to scale. Visitors deserve a smarter, faster, and more engaging way to get answers.
        </div>
      </Container>

      {/* wave passing through this section */}
      <svg className="pointer-events-none absolute inset-x-0 -bottom-12 -z-10" viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none">
        <path d="M-10 90c180 90 360 90 540 30s360-120 540-60 360 180 540 180" stroke="#6fd0df" strokeWidth="6"/>
      </svg>
    </section>
  );
}
