"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="services" className="py-32 px-6">

      <h2 className="text-4xl mb-12">{t.services}</h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="border p-6 rounded-xl hover:scale-105">
          {t.databases}
        </div>

        <div className="border p-6 rounded-xl hover:scale-105">
          {t.cloud}
        </div>

        <div className="border p-6 rounded-xl hover:scale-105">
          {t.ai}
        </div>

      </div>

    </section>
  )
}