"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f1ea] border-t border-black/5 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[1px] bg-black mx-auto mb-12"
        />

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extralight leading-[1.15] tracking-tight"
        >
          Una experiencia diseñada <br className="hidden md:block" />
          para quienes valoran la tranquilidad
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-10 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
        >
          Andreas Adventures ofrece fincas privadas en Castilla La Nueva y Nilo,
          espacios exclusivos pensados para descanso absoluto, encuentros
          especiales y momentos memorables en continuo contacto con la
          naturaleza. 
        </motion.p>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs md:text-sm tracking-[0.2em] uppercase text-gray-600"
        >
          {[
            "Exclusividad total",
            "Piscina & Jacuzzi",
            "Eventos privados",
            "Workation",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 hover:text-black transition-colors duration-300"
            >
              <span className="w-8 h-[1px] bg-black"></span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
