import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhatsAppButton from "../components/WhatsAppButton"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <Services />

      <WhatsAppButton />

      <Footer />

    </main>
  )
}