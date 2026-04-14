import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Clients from "../components/Clients"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}