export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <h1 className="text-6xl md:text-7xl font-semibold mb-6">
        Transform Your Data
        <br />
        Into Intelligence
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Databases, Cloud and AI Automation to scale performance and reduce costs.
      </p>

      <div className="flex gap-4">

        <a
          href="https://wa.me/5541992188618?text=Hello,%20I%20want%20a%20free%20diagnosis."
          className="px-6 py-3 bg-white text-black rounded-lg"
        >
          Free Diagnosis
        </a>

        <a
          href="#services"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          Services
        </a>

      </div>

    </section>
  )
}