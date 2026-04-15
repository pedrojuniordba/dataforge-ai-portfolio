"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20">
      <h2 className="text-3xl text-center mb-12">{t.services.title}</h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
          <h3>{t.services.databases.title}</h3>
          <p className="text-gray-400">{t.services.databases.desc}</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
          <h3>{t.services.cloud.title}</h3>
          <p className="text-gray-400">{t.services.cloud.desc}</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
          <h3>{t.services.ai.title}</h3>
          <p className="text-gray-400">{t.services.ai.desc}</p>
        </div>

      </div>
    </section>
  )
}