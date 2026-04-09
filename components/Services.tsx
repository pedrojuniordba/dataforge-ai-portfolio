"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="services" className="py-32 px-6">

      <h2 className="text-4xl text-center mb-16 gradient-text">
        {t.services}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="glass p-6 rounded-xl hover:scale-105">
          {t.databases}
        </div>

        <div className="glass p-6 rounded-xl hover:scale-105">
          {t.cloud}
        </div>

        <div className="glass p-6 rounded-xl hover:scale-105">
          {t.ai}
        </div>

      </div>

    </section>
  )
}