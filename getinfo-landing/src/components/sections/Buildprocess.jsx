// src/components/sections/BuildProcess.jsx
import React from "react";
import Container from "../ui/Container";

const STEPS = [
  { n: "01", t1: "AI Large", t2: "Language Models" },
  { n: "02", t1: "Custom Domain", t2: "Knowledge" },
  { n: "03", t1: "Speech-to-Speech", t2: "Interface" },
  { n: "04", t1: "3D", t2: "Avatars" },
];

export default function BuildProcess() {
  return (
    <section id="how" className="relative overflow-hidden py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12">
        {/* left heading */}
        <div className="lg:col-span-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            HOW WE BUILD
          </h2>
        </div>

        {/* right paragraph */}
        <div className="lg:col-span-6 text-white/80 leading-relaxed text-[clamp(1.05rem,2.2vw,1.5rem)]">
        At GetInfo, we build by combining AI-powered knowledge bases, lifelike 3D avatars, and real-time voice technology into one seamless platform. 
        Our solution is designed to deliver accurate answers, natural conversations, and multilingual support — all while being scalable across kiosks, events, and digital platforms.
        </div>
      </Container>

      {/* timeline */}
      <Container className="mt-10">
        <div className="relative">
          {/* curved line behind bubbles */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-10 -z-10"
            viewBox="0 0 1440 220"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 150 C 200 60, 360 200, 520 140 S 880 40, 1080 160 S 1320 160, 1440 110"
              stroke="#6fd0df"
              strokeWidth="6"
              fill="none"
            />
          </svg>

          {/* steps: CENTER circles + labels per column */}
          <div className="grid gap-8 md:grid-cols-4 place-items-center">
            {STEPS.map((s) => (
              <div key={s.n} className="text-white flex flex-col items-center text-center">
                {/* circle */}
                <div className="mb-3 grid h-28 w-28 place-items-center rounded-full
                                bg-gradient-to-b from-[var(--gi-teal-300)] to-[var(--gi-teal-700)]
                                shadow-card ring-2 ring-[var(--gi-teal-500)]">
                  <span className="text-3xl font-extrabold text-black/70">{s.n}</span>
                </div>

                {/* label directly under circle */}
                <div className="mt-1 flex items-start gap-2 justify-center">
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    className="shrink-0 mt-0.5"
                  >
                    <path
                      d="M4 12h12M12 6l6 6-6 6"
                      stroke="#6fd0df"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="leading-tight">
                    <div className="font-extrabold">{s.t1}</div>
                    <div className="font-extrabold">{s.t2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
