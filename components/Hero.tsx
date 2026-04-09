export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full top-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full bottom-[-100px]"></div>

      <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6">
        Transform Your Data
        <br />
        Into Intelligence
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Oracle, PostgreSQL and AI Automation consulting to optimize performance,
        reduce costs and scale your business.
      </p>

      <div className="flex gap-4">

        <a
          href="https://wa.me/5541992188618?text=Hello,%20I%20want%20a%20free%20diagnosis%20for%20my%20database."
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
        >
          Free Diagnosis
        </a>

        <a
          href="#services"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition"
        >
          Services
        </a>

      </div>

    </section>
  )
}