import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Clients from "../components/Clients"
import FloatingButtons from "../components/FloatingButtons"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <FloatingButtons />
      <Footer />

    </main>
  )
}