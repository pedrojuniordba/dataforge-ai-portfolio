"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"
import { Database, Cloud, Cpu } from "lucide-react"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20">
      <h2 className="text-3xl text-center mb-12 font-semibold">
        {t.services.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* DATABASES */}
        <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
          <Database className="mb-4 text-blue-500" size={32} />

          <h3 className="mb-2 font-semibold text-lg">
            {t.services.databases.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.services.databases.desc}
          </p>
        </div>

        {/* CLOUD */}
        <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
          <Cloud className="mb-4 text-purple-500" size={32} />

          <h3 className="mb-2 font-semibold text-lg">
            {t.services.cloud.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.services.cloud.desc}
          </p>
        </div>

        {/* AI */}
        <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
          <Cpu className="mb-4 text-green-500" size={32} />

          <h3 className="mb-2 font-semibold text-lg">
            {t.services.ai.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {t.services.ai.desc}
          </p>
        </div>

      </div>
    </section>
  )
}