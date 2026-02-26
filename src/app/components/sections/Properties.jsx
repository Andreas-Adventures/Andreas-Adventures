"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Properties() {
  return (
    <section id="propiedades" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            Propiedades Seleccionadas
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Castilla */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="relative h-[380px] md:h-[520px] overflow-hidden rounded-3xl">
              <Image
                src="/propiedades/propiedad2.png"
                alt="Finca Castilla La Nueva"
                fill
                className="object-cover transition duration-[1400ms] group-hover:scale-105"
              />

              {/* Overlay cinematográfico */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/60 transition duration-700" />
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-2xl font-light tracking-wide">
                Castilla La Nueva
              </h3>

              <p className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500">
                Meta · Hasta 50 personas
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                Piscina privada, jacuzzi, amplias zonas verdes y espacios
                ideales para eventos exclusivos.
              </p>

              <Link
                href="/en-desarrollo"
                className="inline-block mt-6 text-xs md:text-sm tracking-widest uppercase relative"
              >
                Ver propiedad
                <span className="block h-[1px] bg-black mt-2 w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
          </motion.div>

          {/* Nilo */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="relative h-[380px] md:h-[520px] overflow-hidden rounded-3xl">
              <Image
                src="/propiedades/propiedad1.png"
                alt="Casa 30 Nilo"
                fill
                className="object-cover transition duration-[1400ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/60 transition duration-700" />
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-2xl font-light tracking-wide">Casa 30</h3>

              <p className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500">
                NILO CUNDINAMARCA · Hasta 21 personas
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                Ubicada en condominio Yaragua - Casa 30, perfecta para descanso,
                reuniones íntimas y workation.
              </p>

              <Link
                href="/en-desarrollo"
                className="inline-block mt-6 text-xs md:text-sm tracking-widest uppercase relative"
              >
                Ver propiedad
                <span className="block h-[1px] bg-black mt-2 w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
