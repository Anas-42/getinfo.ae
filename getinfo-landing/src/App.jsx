import React from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import ContactStrip from "./components/sections/ContactStrip";
import Intro from "./components/sections/intro";          // ⬅️ make sure file is Intro.jsx
import AboutSection from "./components/sections/AboutSection";
import WhyBuild from "./components/sections/WhyBuild";
import ServicesGrid from "./components/sections/ServicesGrid";
import TechStrip from "./components/sections/TechStrip";
import BuildProcess from "./components/sections/BuildProcess";
import JoinForm from "./components/sections/JoinForm";

export default function App() {
  return (
    <div id="top" className="min-h-dvh bg-[var(--gi-bg)] text-white isolate">
      <Navbar />

      <main className="space-y-8 sm:space-y-10">
        <Hero />
        <ContactStrip />

        {/* 3 requested sections */}
        <Intro />
        <AboutSection />
        <WhyBuild />

        {/* Lower half */}
        <ServicesGrid />
        <TechStrip />
        <BuildProcess />
        <JoinForm />
      </main>

      <Footer />
    </div>
  );
}
