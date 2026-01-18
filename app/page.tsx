import Hero from "../components/sections/hero";
import IntroSection from "../components/sections/IntroSection";
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

      <Hero />

      {/* Hero → Count */}
      <div className="section-dissolve reverse" />

      <IntroSection />

      <CustomerCount />

      {/* Count → Philosophy */}
      <div className="section-dissolve" />

      <About />

      {/* Philosophy → Reviews */}
      <div className="section-dissolve" />

      <Reviews />

      {/* Reviews → Highlights */}
      <div className="section-dissolve reverse" />

      <Highlights />

      <Gallery />
      <Menu />
      <Delivery />
      <Contact />
      <ContactMap />

    </main>
  );
}
