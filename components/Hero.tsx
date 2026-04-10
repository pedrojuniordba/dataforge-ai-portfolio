"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl md:text-6xl font-semibold mb-6">
        Data Engineering
        <br />
        & AI Automation
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        I help companies optimize databases, build data pipelines and automate processes using AI agents.
      </p>

      <a
        href="https://wa.me/5541992188618?text=Hello,%20I%20want%20to%20improve%20my%20data%20environment."
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Get Free Analysis
      </a>

    </section>
  )
}