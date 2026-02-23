import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Properties from "./components/sections/Properties";
import Plans from "./components/sections/Plans";
import Experiences from "./components/sections/Experiences";
import ReservationCTA from "./components/sections/ReservationCTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Plans />
      <Experiences />
      <ReservationCTA />
      <Footer />
    </div>
  );
}
