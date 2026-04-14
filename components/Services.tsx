"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl text-center mb-10">{t.services.title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>{t.services.databases.title}</div>
        <div>{t.services.cloud.title}</div>
        <div>{t.services.ai.title}</div>
      </div>
    </section>
  )
}