"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-3xl mb-16">{t.services}</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        <div>
          <h3 className="text-xl mb-3">{t.databases}</h3>
        </div>

        <div>
          <h3 className="text-xl mb-3">{t.cloud}</h3>
        </div>

        <div>
          <h3 className="text-xl mb-3">{t.ai}</h3>
        </div>

      </div>

    </section>
  )
}