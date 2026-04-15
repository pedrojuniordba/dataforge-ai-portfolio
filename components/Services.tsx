"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"
import { Database, Cloud, Cpu } from "lucide-react"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20">
      <h2 className="text-3xl text-center mb-12">{t.services.title}</h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-gray-800 p-6 rounded-xl">
          <Database className="mb-4 text-blue-500" />
          <h3>{t.services.databases.title}</h3>
          <p className="text-gray-400">{t.services.databases.desc}</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <Cloud className="mb-4 text-purple-500" />
          <h3>{t.services.cloud.title}</h3>
          <p className="text-gray-400">{t.services.cloud.desc}</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <Cpu className="mb-4 text-green-500" />
          <h3>{t.services.ai.title}</h3>
          <p className="text-gray-400">{t.services.ai.desc}</p>
        </div>

      </div>
    </section>
  )
}