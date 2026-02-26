import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://andreasadventurescol.com"),
  // Título base por si olvidas poner uno en otra página
  title: {
    default: "Andreas Adventures | Fincas y Villas de Lujo en Colombia",
    template: "%s | Andreas Adventures", // Esto permite que si en una página pones "Nilo", se vea "Nilo | Andreas Adventures"
  },
  description:
    "Alquiler de fincas privadas y experiencias exclusivas en Colombia.",

  // Iconos y Configuración técnica (Esto es global)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logos/favicon-32x32.png",
    apple: "/logos/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  // OpenGraph base
  openGraph: {
    siteName: "Andreas Adventures",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
