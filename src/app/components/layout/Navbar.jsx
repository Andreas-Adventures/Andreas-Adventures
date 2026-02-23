"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Propiedades", href: "#propiedades" },
  { name: "Experiencias", href: "#planes" },
  { name: "Galería", href: "#galeria" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-black" : "text-white";
  const underlineColor = scrolled ? "bg-black" : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* LOGO DINÁMICO SIN SALTO */}
        <Link href="/" className="relative w-[130px] h-[40px] block">
          {/* Logo oscuro */}
          <Image
            src="/navbar/logo.svg"
            alt="Andreas Adventures"
            fill
            priority
            className={`object-contain transition-opacity duration-500 ${
              scrolled ? "opacity-100 scale-110" : "opacity-100 scale-100"
            }`}
          />

          {/* Logo blanco */}
          <Image
            src="/navbar/logo1.png"
            alt="Andreas Adventures"
            fill
            priority
            className={`object-contain transition-all duration-500 ${
              scrolled ? "opacity-0 scale-100" : "opacity-100 scale-220"
            }`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-colors duration-300 ${textColor}`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0"
                } ${underlineColor}`}
              />
            </Link>
          ))}

          <Link
            href="#reserva"
            className={`ml-4 px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Reservar
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 space-y-6 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#reserva"
            onClick={() => setOpen(false)}
            className="block bg-black text-white px-6 py-3 rounded-full text-center"
          >
            Reservar
          </Link>
        </div>
      )}
    </nav>
  );
}
