import Hero from "../components/sections/hero";
import CustomerCount from "../components/sections/CustomerCount";
import About from "../components/sections/about";
import Reviews from "../components/sections/Reviews";
import Highlights from "../components/sections/highlights";
import Gallery from "../components/sections/gallery";
import Menu from "../components/sections/menu";
import Delivery from "../components/sections/delivery";
import Contact from "../components/sections/contact";
import ContactMap from "../components/sections/ContactMap";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <Hero />

      {/* Hero → Count (soft light → light dissolve) */}
      <div className="section-dissolve reverse" />

      {/* CUSTOMER COUNT */}
      <CustomerCount />

      {/* Count → Philosophy (light → warm cinematic) */}
      <div className="section-dissolve" />

      {/* PHILOSOPHY (IMAGE-BASED) */}
      <About />

      {/* Philosophy → Reviews (warm → dark cinematic) */}
      <div className="section-dissolve" />

      {/* REVIEWS */}
      <Reviews />

      {/* Reviews → Highlights (dark → light) */}
      <div className="section-dissolve reverse" />

      {/* REST OF PAGE */}
      <Highlights />
      <Gallery />
      <Menu />
      <Delivery />
      <Contact />
      <ContactMap />

    </main>
  );
}
