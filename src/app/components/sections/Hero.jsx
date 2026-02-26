"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con zoom muy sutil */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/hero1.png"
          alt="Finca privada de lujo en Castilla La Nueva y Nilo - Andreas Adventures"
          fill
          priority // Fuerza la carga inmediata (Clave para SEO)
          className="object-cover"
          quality={90}
        />
      </motion.div>

      {/* Overlay más profundo y elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Contenido */}
      <div className="relative text-center text-white px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight"
        >
          Naturaleza. Privacidad. Confort.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 text-lg text-gray-200 leading-relaxed"
        >
          <strong>Alquiler de fincas privadas</strong> en Castilla La Nueva y
          Nilo diseñadas para descanso, eventos exclusivos y experiencias
          memorables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#reserva"
            aria-label="Reservar una finca privada"
            className="px-10 py-4 bg-white text-black rounded-full text-sm tracking-wider uppercase transition duration-300 hover:bg-gray-200"
          >
            Reservar
          </a>

          <a
            href="#propiedades"
            aria-label="Explorar nuestras fincas"
            className="px-10 py-4 border border-white rounded-full text-sm tracking-wider uppercase transition duration-300 hover:bg-white hover:text-black"
          >
            Explorar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator refinado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8"
      >
        <div className="w-[1px] h-12 bg-white mx-auto opacity-70" />
      </motion.div>
    </section>
  );
}
