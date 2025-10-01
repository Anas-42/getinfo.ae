// src/components/layout/Footer.jsx
import React from "react";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 mt-24 pt-10 pb-16">
      <Container>
        <div className="text-center text-white/50 text-sm">
          © {new Date().getFullYear()} GetInfo.ae — All rights reserved.
        </div>
      </Container>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
}
