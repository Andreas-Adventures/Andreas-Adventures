"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EnDesarrolloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Título grande elegante */}
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8">
          Estamos creando algo increíble
        </h1>

        {/* Subtexto */}
        <p className="text-white/70 text-lg leading-relaxed mb-12">
          Esta sección de Andreas Adventures se encuentra actualmente en
          desarrollo. Muy pronto estará disponible con toda la experiencia
          visual y el detalle que mereces.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-black rounded-full uppercase text-sm tracking-widest hover:bg-gray-200 transition"
          >
            Volver al inicio
          </Link>

          <a
            href="https://wa.me/573202762709?text=Hola,%20quiero%20información%20sobre%20Andreas%20Adventures"
            target="_blank"
            className="px-8 py-4 border border-white rounded-full uppercase text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Línea decorativa sutil */}
        <div className="mt-20 w-24 h-px bg-white/20 mx-auto"></div>

        {/* Footer mini */}
        <p className="mt-6 text-xs text-white/40 tracking-widest">
          ANDREAS ADVENTURES · EXPERIENCIAS EXCLUSIVAS
        </p>
      </motion.div>
    </div>
  );
}
