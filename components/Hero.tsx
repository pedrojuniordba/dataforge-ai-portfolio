"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="text-center py-24">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {t.hero.title}
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        {t.hero.subtitle}
      </p>

      <div className="mt-10">
        <a
          href="https://wa.me/5541992188618?text=Olá,%20vim%20pelo%20site%20e%20quero%20uma%20análise"
          className="px-8 py-4 bg-green-500 text-black rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}