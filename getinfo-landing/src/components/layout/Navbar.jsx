import React from "react";
import Container from "../ui/Container";
import LogoImg from "../../assets/logo.png"; // make sure this file exists

export default function Navbar(){
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--gi-bg)]/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          <img src={LogoImg} alt="GetInfo logo" className="h-10 sm:h-12 w-auto"/>
          <span className="text-xl sm:text-2xl font-extrabold">
            Get<span className="accent">Info</span>.ae
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
          <a href="#about" className="hover:text-white">ABOUT</a>
          <a href="#services" className="hover:text-white">SERVICES</a>
          <a href="#technologies" className="hover:text-white">TECHNOLOGIES</a>
        </nav>

        {/* Right CTA (desktop) */}
        <div className="hidden md:flex items-center">
        <a href="#join"className="px-5 py-2 rounded-full bg-[var(--gi-teal-500)]
         text-white font-semibold transition-colors duration-300  hover:bg-[var(--gi-teal-600)]
          hover:shadow-lg hover:scale-105">Contact Us</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 ring-1 ring-white/20 rounded-lg"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={()=>setOpen(v=>!v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" stroke="currentColor" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`md:hidden border-t border-white/10 overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-64" : "max-h-0"}`}
      >
        <Container className="py-3 flex flex-col gap-3 text-white/80">
          <a onClick={()=>setOpen(false)} href="#about" className="py-2">ABOUT</a>
          <a onClick={()=>setOpen(false)} href="#services" className="py-2">SERVICES</a>
          <a onClick={()=>setOpen(false)} href="#technologies" className="py-2">TECHNOLOGIES</a>
          <a onClick={()=>setOpen(false)} href="#join" className="pill btn-pill px-4 py-2 text-sm font-bold self-start">JOIN GetInfo</a>
        </Container>
      </div>
    </header>
  );
}
