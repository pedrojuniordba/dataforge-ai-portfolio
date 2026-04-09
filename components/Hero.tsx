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

      <a className="px-6 py-3 bg-white text-black rounded-lg">
        {t.cta}
      </a>

    </section>
  )
}