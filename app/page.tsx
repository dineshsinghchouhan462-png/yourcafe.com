import Hero from "../components/sections/hero";
import IntroSection from "../components/sections/IntroSection";
import About from "../components/sections/about";
import Highlights from "../components/sections/highlights";
import Gallery from "../components/sections/gallery";
import Menu from "../components/sections/menu";   // ✅ ADD
import Delivery from "../components/sections/delivery";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <About />
      <Highlights />
      <Gallery />
      <Menu />        {/* ✅ ADD */}
      <Delivery />
      <Contact />
    </main>
  );
}
