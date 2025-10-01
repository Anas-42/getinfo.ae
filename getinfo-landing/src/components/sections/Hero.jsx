// src/components/sections/Hero.jsx
import React from "react";
import Container from "../ui/Container";
import { ArrowRight } from "../ui/Icons";
import { Button } from "../ui/Button";

/**
 * Responsive background video:
 * - expects video files under public/videos/
 * - picks a source depending on viewport width to save mobile bandwidth
 *
 * Files to add (recommended):
 *  /public/videos/drhazem-480.mp4
 *  /public/videos/drhazem-720.mp4
 *  /public/videos/drhazem-1080.mp4
 *  /public/videos/drhazem-poster.jpg   (optional poster/fallback image)
 */

function chooseVideoSrc(width) {
  // simple rules — tune breakpoints to your taste
  if (width < 520) return "/videos/drhazem-480.mp4";
  if (width < 900) return "/videos/drhazem-720.mp4";
  return "/videos/drhazem-1080.mp4";
}

export default function Hero() {
  const [videoSrc, setVideoSrc] = React.useState(() => {
    // default during SSR/client boot: choose based on current window if available
    if (typeof window !== "undefined") return chooseVideoSrc(window.innerWidth);
    return "/videos/drhazem-720.mp4";
  });

  React.useEffect(() => {
    // pick appropriate source once mounted
    const onResize = () => {
      const newSrc = chooseVideoSrc(window.innerWidth);
      setVideoSrc((cur) => (cur === newSrc ? cur : newSrc));
    };

    // debounce resize for performance
    let t = null;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onResize, 150);
    };

    window.addEventListener("resize", handler);
    // initial call in case a different width now
    onResize();

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <section className="relative overflow-hidden h-screen">
      {/* responsive background video */}
      <video
        key={videoSrc}                       // force reload when src changes
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/drhazem-poster.jpg"
        aria-hidden="true"
      />

      {/* optional semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* main content */}
      <Container className="relative z-10 grid items-center gap-8 md:gap-10 py-12 md:py-16 lg:py-24">
        <div className="md:col-span-7 space-y-5 text-center md:text-left">
          <h1 className="font-display font-extrabold leading-[1.05] tracking-tight [text-wrap:balance] text-[clamp(2.2rem,5vw,4.25rem)]">
            Get <span className="accent">Answers</span><br />
            Get <span className="accent">Clarity</span><br />
            <span className="accent">GetInfo.</span>
          </h1>

          <p className="max-w-prose mx-auto md:mx-0 text-base sm:text-lg text-white/80">
            Save time, skip the noise, and let GetInfo.ae deliver the information you need — instantly.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-5 pt-2">
            <a href="#join" aria-label="Scroll to join">
              <Button size="lg">BUILD YOUR WORLD</Button>
            </a>
            <span className="inline-flex items-center"><ArrowRight /></span>
          </div>
        </div>
      </Container>
    </section>
  );
}
