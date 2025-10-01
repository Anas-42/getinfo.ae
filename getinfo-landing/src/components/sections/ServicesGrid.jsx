// src/components/sections/ServicesGrid.jsx
import React from "react";
import Container from "../ui/Container";

const ITEMS = [
  {
    title: "Domain Knowledge Base",
    desc:
      "Provide accurate, tailored answers with a powerful knowledge base built around your business or event. GetInfo makes information reliable, structured, and easy to update.",
    img: "/services/domain-knowledge.svg",
  },
  {
    title: "Avatars",
    desc:
      "Engage visitors with lifelike 3D avatars that listen, speak, and interact naturally — transforming information into a human-like experience.",
    img: "/services/avatars.svg",
  },
  {
    title: "Multilingual Support",
    desc:
      "Break language barriers with instant multilingual communication. From English to Arabic and beyond, GetInfo makes sure everyone feels understood.",
    img: "/services/multilingual.svg",
  },
  {
    title: "Real-Time Interaction",
    desc:
      "Deliver information instantly and dynamically. Visitors can ask questions on the spot and receive clear, conversational responses in real-time.",
    img: "/services/realtime.svg",
  },
];

function ServiceCard({ title, desc, img }) {
  const goJoin = (e) => {
    e.preventDefault();
    document.querySelector("#join")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="h-full rounded-2xl bg-gradient-to-b from-[var(--gi-teal-300)] to-[var(--gi-teal-700)] p-[2px] shadow-card">
      <div className="h-full rounded-2xl bg-black/40 p-6 flex flex-col">
        {/* top illustration */}
        <div className="mx-auto mb-6 w-full max-w-[360px] rounded-[40px] bg-black flex items-center justify-center">
        <img src={img} alt="" className="h-[110px] object-contain" />
        </div>

        <h3 className="font-extrabold tracking-wide text-lg">{title}</h3>
        <p className="mt-3 text-sm text-white/80 leading-relaxed">{desc}</p>

        <div className="mt-auto pt-6">
          <a
            href="/#join"
            onClick={goJoin}
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gi-teal-500)] rounded-full"
            aria-label={`Try ${title} now and go to the Join form`}
          >
            <span className="pill gi-gradient gi-btn shine px-5 py-2.5 text-xs font-bold inline-block">
              TRY IT NOW
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it) => (
          <ServiceCard key={it.title} {...it} />
        ))}
      </Container>
    </section>
  );
}
