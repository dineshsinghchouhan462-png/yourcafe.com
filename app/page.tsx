import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Highlights from "../components/sections/highlights";
import Gallery from "../components/sections/gallery";
import Delivery from "../components/sections/delivery";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Highlights />
      <Gallery />
      <Delivery />
      <Contact />
    </main>
  );
}
