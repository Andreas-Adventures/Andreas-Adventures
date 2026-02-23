"use client";

import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <section
      id="experiencias"
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-black/5 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gray-400">
            Vivencias Exclusivas
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">
            Una experiencia pensada para ti
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cada detalle está cuidadosamente diseñado para ofrecer privacidad,
            confort y momentos memorables en entornos naturales únicos.
          </p>

          <div className="w-16 h-[1px] bg-black mx-auto mt-10" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-20">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-8 w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500" />

            <h3 className="text-2xl font-light tracking-wide">
              Ubicación estratégica
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              A pocas horas de Bogotá, rodeado de naturaleza, ríos y paisajes
              que invitan al descanso sin alejarte demasiado de la ciudad.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-8 w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500" />

            <h3 className="text-2xl font-light tracking-wide">
              Privacidad absoluta
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Cada finca es exclusiva para tu grupo. Sin espacios compartidos.
              Sin interrupciones. Solo tranquilidad.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-8 w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500" />

            <h3 className="text-2xl font-light tracking-wide">
              Espacios para celebrar
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Cumpleaños, encuentros familiares o eventos empresariales en un
              entorno que combina elegancia, naturaleza y exclusividad.
            </p>
          </motion.div>
        </div>

        {/* Frase final elegante */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-28 text-center text-sm text-gray-500 tracking-wide"
        >
          Más que una reserva, una experiencia privada diseñada para recordar.
        </motion.p>
      </div>
    </section>
  );
}
