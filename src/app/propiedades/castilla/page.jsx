"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CastillaPage() {
  const portadaImages = [
    "/propiedades/castilla/portada/1.jpg",
    "/propiedades/castilla/portada/2.jpg",
    "/propiedades/castilla/portada/3.jpg",
  ];

  const piscina = [
    "/propiedades/castilla/piscina/1.jpg",
    "/propiedades/castilla/piscina/2.jpg",
  ];

  const habitaciones = [
    "/propiedades/castilla/habitaciones/1.jpg",
    "/propiedades/castilla/habitaciones/2.jpg",
  ];

  const cocina = [
    "/propiedades/castilla/cocina/1.jpg",
    "/propiedades/castilla/cocina/2.jpg",
  ];

  const kiosko = [
    "/propiedades/castilla/kiosko/1.jpg",
    "/propiedades/castilla/kiosko/2.jpg",
  ];

  const exteriores = [
    "/propiedades/castilla/exteriores/1.jpg",
    "/propiedades/castilla/exteriores/2.jpg",
  ];

  const bicicletas = [
    "/propiedades/castilla/bicicletas/1.jpg",
    "/propiedades/castilla/bicicletas/2.jpg",
  ];

  const GallerySection = ({ title, images }) => (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-light mb-12 text-center">{title}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <div key={i} className="relative h-96">
            <Image
              src={img}
              alt={`${title} ${i}`}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative h-[80vh]">
        <Image
          src="/propiedades/castilla/portada/1.jpg"
          alt="Castilla La Nueva"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
            Castilla La Nueva
          </h1>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light">
          Un refugio exclusivo en plena naturaleza
        </h2>
        <p className="mt-8 text-gray-600 leading-relaxed">
          Una finca privada diseñada para brindar confort, privacidad y momentos
          memorables. Piscina, jacuzzi, zonas sociales y espacios abiertos para
          disfrutar sin interrupciones.
        </p>
      </section>

      {/* CARRUSEL DESTACADO */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {portadaImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[500px] w-full">
                <Image
                  src={img}
                  alt={`Castilla portada ${i}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* HABITACIONES */}
      <GallerySection title="Habitaciones" images={habitaciones} />

      {/* PISCINA */}
      <GallerySection title="Piscina & Jacuzzi" images={piscina} />

      {/* COCINA Y ZONA SOCIAL */}
      <GallerySection title="Cocina · Sala · Comedor" images={cocina} />

      {/* KIOSKO */}
      <GallerySection title="Kiosko · Bar · BBQ" images={kiosko} />

      {/* EXTERIORES */}
      <GallerySection title="Pasillos y Exteriores" images={exteriores} />

      {/* BICICLETAS */}
      <GallerySection title="Zona de Bicicletas" images={bicicletas} />

      {/* CTA FINAL */}
      <section className="py-32 bg-black text-white text-center">
        <h2 className="text-4xl font-light">Vive la experiencia Castilla</h2>

        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Reserva tu estadía y disfruta de una experiencia privada, exclusiva y
          diseñada para el descanso.
        </p>

        <a
          href="/#reserva"
          className="inline-block mt-10 px-10 py-4 bg-white text-black rounded-full tracking-widest text-sm uppercase hover:bg-gray-200 transition"
        >
          Consultar disponibilidad
        </a>
      </section>
    </div>
  );
}
