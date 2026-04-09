"use client"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="services" className="py-32 px-6">

      <h2 className="text-4xl mb-12">{t.servicesTitle}</h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div>
          <h3>{t.databases}</h3>
        </div>

        <div>
          <h3>{t.cloud}</h3>
        </div>

        <div>
          <h3>{t.ai}</h3>
        </div>

      </div>

    </section>
  )
}