"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Clients() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl mb-10 text-gray-400">
        Empresas que confiam
      </h2>

      <div className="flex flex-wrap justify-center gap-10 text-gray-600">
        {t.clients.map((client, index) => (
          <div key={index} className="hover:text-white transition">
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}