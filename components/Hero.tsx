"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="relative text-center py-32 overflow-hidden">

      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t.hero.title}
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/5541992188618"
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-black rounded-xl hover:scale-105 transition"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}