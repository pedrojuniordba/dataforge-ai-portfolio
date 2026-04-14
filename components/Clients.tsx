"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Clients() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-2xl mb-10">Empresas que confiam</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {t.clients.map((client, index) => (
          <div
            key={index}
            className="text-gray-500 text-lg hover:text-white transition"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}