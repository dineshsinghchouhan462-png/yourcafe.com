import Hero from "../components/sections/hero";
import IntroSection from "../components/sections/IntroSection";
import CustomerCount from "../components/sections/CustomerCount";
import About from "../components/sections/about";
import Reviews from "../components/sections/Reviews"; // ← ADD THIS
import Highlights from "../components/sections/highlights";
import Gallery from "../components/sections/gallery";
import Menu from "../components/sections/menu";
import Delivery from "../components/sections/delivery";
import Contact from "../components/sections/contact";
import ContactMap from "../components/sections/ContactMap";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <CustomerCount />
      <About />
      <Reviews /> {/* ← ADD THIS */}
      <Highlights />
      <Gallery />
      <Menu />
      <Delivery />
      <Contact />
      <ContactMap />
    </main>
  );
}
