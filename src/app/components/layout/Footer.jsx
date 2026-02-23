"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid principal */}
        <div className="grid md:grid-cols-4 gap-16">
          {/* Logo + descripción */}
          <div>
            <div className="mb-6">
              <Image
                src="/navbar/logo1.png"
                alt="Andreas Adventures Logo"
                width={140}
                height={40}
              />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Experiencias privadas en entornos naturales exclusivos. Diseñadas
              para el descanso, la celebración y momentos memorables.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-gray-300">
              Navegación
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#hero" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#planes" className="hover:text-white transition">
                  Experiencias
                </Link>
              </li>
              <li>
                <Link
                  href="#experiencias"
                  className="hover:text-white transition"
                >
                  Detalles
                </Link>
              </li>
              <li>
                <Link href="#reserva" className="hover:text-white transition">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-gray-300">
              Contacto
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a
                  href="https://wa.me/573202762709"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  +57 320 276 2709
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:andreasadventures.colombia@gmail.com"
                  className="hover:text-white transition"
                >
                  andreasadventures.colombia
                </a>
              </li>

              <li>Atención personalizada previa reserva.</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-gray-300">
              Síguenos
            </h4>

            <div className="flex gap-5 text-gray-400">
              <a
                href="https://www.instagram.com/andreasadventures.co/"
                target="_blank"
                className="hover:text-white transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/AndreasAdventurescol"
                target="_blank"
                className="hover:text-white transition"
              >
                <Facebook size={20} />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Inspiración, experiencias y momentos únicos.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs tracking-wide">
          © {year} Andreas Adventures. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
