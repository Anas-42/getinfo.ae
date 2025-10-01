import React from "react";
import Container from "../ui/Container";
import babylon from "../../assets/logos/babylon.svg";
import blender from "../../assets/logos/blender.svg";
import unity from "../../assets/logos/unity.svg";
import unreal from "../../assets/logos/unreal.svg";

export default function TechStrip() {
  const LOGOS = [
    { src: babylon, alt: "Babylon.js", scale: "scale-100" },
    { src: blender, alt: "Blender", scale: "scale-60" },
    { src: unity, alt: "Unity", scale: "scale-100" },   // a little smaller
    { src: unreal, alt: "Unreal Engine", scale: "scale-60" }, // a little smaller
  ];

  return (
    <section id="technologies" className="py-16">
      <Container className="text-center">
        <h3 className="font-extrabold text-2xl sm:text-3xl mb-8">
          TECHNOLOGIES &amp; HARDWARE
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {LOGOS.map((l) => (
            <div
              key={l.alt}
              className="flex items-center justify-center 
                         w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              <img
                src={l.src}
                alt={l.alt}
                className={`max-w-full max-h-full object-contain transform ${l.scale}`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
