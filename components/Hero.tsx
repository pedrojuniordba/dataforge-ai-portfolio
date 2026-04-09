"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl md:text-7xl font-semibold mb-6">
        {t.heroTitle}
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        {t.heroDesc}
      </p>

      <div className="flex gap-4">

        <a
          href="https://wa.me/5541992188618?text=Hello,%20I%20would%20like%20a%20free%20analysis.%0A%0ADatabase:%0AEnvironment:%0AMain%20Issue:"
          className="px-6 py-3 bg-white text-black rounded-lg"
        >
          {t.cta}
        </a>

        <a
          href="#services"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          {t.services}
        </a>

      </div>

    </section>
  )
}