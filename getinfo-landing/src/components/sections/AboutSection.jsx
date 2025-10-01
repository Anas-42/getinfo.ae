import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/Button";

/**
 * Responsive background video for About section
 * Using existing intro videos:
 *  /public/videos/intro-480.mp4
 *  /public/videos/intro-720.mp4
 *  /public/videos/intro-1080.mp4
 *  /public/videos/intro-poster.jpg
 */
function chooseIntroVideo(width) {
  if (width < 520) return "/videos/intro-480.mp4";
  if (width < 900) return "/videos/intro-720.mp4";
  return "/videos/intro-1080.mp4";
}

export default function AboutSection() {
  const [videoSrc, setVideoSrc] = React.useState(() => {
    if (typeof window !== "undefined") return chooseIntroVideo(window.innerWidth);
    return "/videos/intro-720.mp4";
  });

  React.useEffect(() => {
    const onResize = () => {
      const newSrc = chooseIntroVideo(window.innerWidth);
      setVideoSrc((cur) => (cur === newSrc ? cur : newSrc));
    };

    let t = null;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onResize, 150);
    };

    window.addEventListener("resize", handler);
    onResize();

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      {/* responsive background video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/intro-poster.jpg"
        aria-hidden="true"
      />

      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            ABOUT <span className="accent">GetInfo.ae</span>
          </h2>
          <p className="text-white/80 leading-relaxed text-[clamp(1.05rem,2.2vw,1.5rem)]">
            GetInfo is an AI-powered info desk solution that brings information to life through interactive 3D avatars. Our system listens, understands, and responds in real-time — supporting multiple languages and delivering accurate, domain-specific knowledge instantly.  
            From malls and events to hotels and campuses, GetInfo is designed to be the future of customer interaction.
          </p>
          <Button className="mx-auto">LET&apos;S GET IN TOUCH</Button>
        </div>
      </Container>

      {/* wave under the section */}
      <svg className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10" viewBox="0 0 1440 260" fill="none" preserveAspectRatio="none">
        <path d="M-20 180c220-110 440-110 660-35s440 140 660 40" stroke="#2aa8bf" strokeWidth="6"/>
      </svg>
    </section>
  );
}
