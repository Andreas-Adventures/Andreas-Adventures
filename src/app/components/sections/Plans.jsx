"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Plans() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [municipio, setMunicipio] = useState("");

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDate("");
    setPeople(1);
  };

  const handleWhatsApp = () => {
    if (!startDate || !endDate || !municipio) return;

    const mensaje =
      "Hola Andreas Adventures \u{1F44B}\n\n" +
      "Quiero reservar el plan: " +
      selectedPlan?.name +
      "\n" +
      "Valor: " +
      selectedPlan?.price +
      "\n\n" +
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
      people +
      "\n\n" +
      "¿Podrían confirmarme disponibilidad?";

    const url =
      "https://api.whatsapp.com/send?phone=573202762709&text=" +
      encodeURIComponent(mensaje);

    window.open(url, "_blank");
    closeModal();
  };

  const plans = [
    {
      name: "Pasadía",
      badge: "Desde",
      description:
        "8:00am a 7:00pm · Piscina privada · Jacuzzi · Zona BBQ · Hasta 12 personas",
      highlight: false,
    },
    {
      name: "Fin de Semana",
      badge: "Experiencia Premium",
      description:
        "Sábado a Domingo · Casa completa · Piscina · Jacuzzi · 4 habitaciones · Exclusividad total",
      highlight: true,
    },
    {
      name: "Alojamiento",
      badge: "Reserva Flexible",
      description:
        "Noche privada · Casa completa · Piscina · BBQ · Jacuzzi · Ambiente exclusivo",
      highlight: false,
    },
  ];

  return (
    <>
      <section id="planes" className="py-24 md:py-32 bg-[#f5f1ea]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            Experiencias Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className={`p-8 md:p-12 rounded-3xl shadow-sm ${
                  plan.highlight ? "bg-black text-white shadow-lg" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xs tracking-[0.3em] uppercase ${
                    plan.highlight ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.name}
                </h3>

                <p className="mt-6 text-5xl font-extralight">{plan.badge}</p>

                <div
                  className={`w-10 h-[1px] mx-auto my-8 ${
                    plan.highlight ? "bg-white" : "bg-black"
                  }`}
                />

                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlight ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <button
                  onClick={() => openModal(plan)}
                  className={`mt-8 px-8 py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-200"
                      : "border border-black hover:bg-black hover:text-white"
                  }`}
                >
                  Consultar disponibilidad
                </button>
              </motion.div>
            ))}
          </div>

          <p className="mt-14 text-[10px] tracking-[0.3em] uppercase text-gray-500">
            Persona adicional $30.000 · Transporte y alimentación cotizable
          </p>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition text-sm"
              >
                ✕
              </button>

              {/* Header */}
              <h3 className="text-2xl font-light mb-2 text-center">
                Reservar {selectedPlan?.name}
              </h3>

              <p className="text-center text-gray-500 text-sm mb-8">
                Completa los datos para consultar disponibilidad
              </p>

              <div className="space-y-6 text-left">
                {/* Municipio */}
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Municipio
                  </label>

                  <select
                    className="w-full p-4 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-black"
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                  >
                    <option value="">Seleccione...</option>
                    <option value="Nilo">Nilo</option>
                    <option value="Castilla La Nueva">Castilla La Nueva</option>
                  </select>
                </div>

                {/* Fecha inicial */}
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Fecha inicial
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                {/* Fecha final */}
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Fecha final
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                {/* Personas */}
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Personas
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                {/* Botón principal */}
                <button
                  onClick={handleWhatsApp}
                  disabled={
                    !municipio ||
                    !startDate ||
                    !endDate ||
                    new Date(endDate) < new Date(startDate)
                  }
                  className="w-full mt-4 bg-black text-white py-4 rounded-full uppercase text-xs tracking-widest hover:bg-gray-800 transition disabled:opacity-40"
                >
                  Confirmar por WhatsApp
                </button>
              </div>

              {/* Footer pequeño */}
              <p className="text-center text-[10px] tracking-widest uppercase text-gray-400 mt-8">
                Andreas Adventures · Experiencias Exclusivas
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
