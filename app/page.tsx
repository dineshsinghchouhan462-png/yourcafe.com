import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Highlights from "@/components/sections/highlights"
import Gallery from "@/components/sections/gallery"
import Delivery from "@/components/sections/delivery"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Highlights />
      <Gallery />
      <Delivery />
      <Contact />
      <Footer />
    </>
  )
}
