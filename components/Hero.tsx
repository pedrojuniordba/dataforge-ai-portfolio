"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl md:text-6xl font-semibold mb-6">
        {t.heroTitle}
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        {t.heroDesc}
      </p>

      <a
        href="https://wa.me/5541992188618?text=Hello,%20I%20want%20to%20improve%20my%20data%20environment.%0A%0ADatabase:%0AEnvironment:%0AMain%20Issue:"
        className="px-8 py-4 bg-green-500 text-black rounded-xl text-lg font-medium hover:scale-105 transition"
      >
        {t.cta}
      </a>

    </section>
  )
}