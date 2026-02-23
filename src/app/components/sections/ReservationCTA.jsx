"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [personas, setPersonas] = useState("");
  const [error, setError] = useState("");

  const handleWhatsApp = () => {
    setError("");

    // Validación
    if (!startDate || !endDate || !municipio || !personas) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setError("La fecha final no puede ser menor que la inicial.");
      return;
    }

    const message =
      "Hola Andreas Adventures \u{1F44B}\n\n" +
      "Quiero consultar disponibilidad con la siguiente información:\n\n" +
      "\u{1F4CD} Municipio: " +
      municipio +
      "\n" +
      "\u{1F4C5} Fecha inicial: " +
      startDate +
      "\n" +
      "\u{1F4C5} Fecha final: " +
      endDate +
      "\n" +
      "\u{1F465} Personas: " +
      personas +
      "\n\n" +
      "Quedo atento(a) a su confirmación. Muchas gracias \u{2728}";

    const url =
      "https://api.whatsapp.com/send?phone=573202762709&text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };
  return (
    <section
      id="reserva"
      className="relative py-36 bg-black text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Reserva tu próxima experiencia
          </h2>

          <p className="mt-8 text-gray-300 leading-relaxed">
            Selecciona las fechas y recibe confirmación personalizada por
            WhatsApp.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Fecha inicial
            </label>
            <input
              type="date"
              className="custom-date w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Fecha final
            </label>
            <input
              type="date"
              className="custom-date w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Municipio
            </label>

            <select
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white appearance-none"
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
            >
              <option value="" className="bg-black text-white">
                Seleccione...
              </option>
              <option value="Nilo" className="bg-black text-white">
                Nilo
              </option>
              <option value="Castilla La Nueva" className="bg-black text-white">
                Castilla La Nueva
              </option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Personas</label>
            <input
              type="number"
              min="1"
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-center mt-6 text-sm">{error}</p>
        )}

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={handleWhatsApp}
            className="px-12 py-4 bg-white text-black rounded-full text-sm tracking-widest uppercase transition duration-300 hover:bg-gray-200"
          >
            Consultar disponibilidad
          </button>

          <p className="mt-8 text-xs tracking-widest uppercase text-gray-400">
            Respuesta rápida · Atención personalizada
          </p>
        </motion.div>
      </div>

      {/* Estilo para icono calendario blanco */}
      <style jsx>{`
        .custom-date::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
