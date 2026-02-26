import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Properties from "./components/sections/Properties";
import Plans from "./components/sections/Plans";
import Experiences from "./components/sections/Experiences";
import ReservationCTA from "./components/sections/ReservationCTA";
import Footer from "./components/layout/Footer";

// ===================== META SEO HOME ANDREAS ADVENTURES =====================
export const metadata = {
  metadataBase: new URL("https://andreasadventurescol.com"),

  title: "Fincas Privadas en Nilo y Castilla La Nueva | Andreas Adventures",

  description:
    "Reserva experiencias exclusivas en fincas privadas con piscina y jacuzzi. Ideal para descanso, eventos y familias en Nilo y Castilla La Nueva. ¡Privacidad absoluta!",

  keywords: [
    // Marca
    "Andreas Adventures",

    // Generales
    "alquiler vacacional Colombia",
    "casas vacacionales Colombia",
    "alojamiento en Colombia",
    "alquiler por días Colombia",
    "hospedaje en Colombia",

    // Por tipo de propiedad
    "villas en Colombia",
    "fincas para vacaciones",
    "casas para alquilar en Colombia",
    "alquiler de casas amobladas",

    // Segmento alto
    "villas de lujo Colombia",
    "alojamiento exclusivo Colombia",
    "turismo premium Colombia",

    // Intención de búsqueda natural
    "dónde hospedarse en Colombia",
    "alquiler de casa para vacaciones",
  ],

  authors: [
    {
      name: "Andreas Adventures",
      url: "https://andreasadventurescol.com",
    },
  ],

  creator: "Andreas Adventures",
  publisher: "Andreas Adventures",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Fincas Privadas en Nilo y Castilla La Nueva | Andreas Adventures",
    description:
      "Reserva experiencias exclusivas en fincas privadas con piscina y jacuzzi. Ideal para descanso, eventos y familias en Nilo y Castilla La Nueva. ¡Privacidad absoluta!",
    url: "https://andreasadventurescol.com",
    siteName: "Andreas Adventures",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://andreasadventurescol.com/propiedades/propiedad1.png",
        width: 1200,
        height: 630,
        alt: "Andreas Adventures - Villas de lujo en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fincas Privadas en Nilo y Castilla La Nueva | Andreas Adventures",
    description:
      "Descubre alquileres vacacionales exclusivos y experiencias premium en Colombia.",
    images: ["https://andreasadventurescol.com/propiedades/propiedad1.png"],
  },

  alternates: {
    canonical: "https://andreasadventurescol.com/",
  },

  category: "Turismo, Villas de Lujo, Alquiler Vacacional, Colombia",
};

export default function Home() {
  // Datos estructurados para Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness", // Define que es un negocio de alojamiento
    name: "Andreas Adventures",
    description: "Fincas privadas exclusivas en Nilo y Castilla La Nueva.",
    url: "https://andreasadventurescol.com",
    telephone: "+573202762709",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nilo, Cundinamarca",
      addressCountry: "CO",
    },
    priceRange: "$$$",
    image: "https://andreasadventurescol.com/propiedades/propiedad1.png",
  };
  return (
    <div className="relative">
      {/* Insertamos el JSON-LD para que Google lo lea */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Properties />
        <Plans />
        <Experiences />
        <ReservationCTA />
        <Footer />
      </main>
    </div>
  );
}
