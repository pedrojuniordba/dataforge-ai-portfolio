"use client"

import { useLanguage } from "../context/LanguageContext"
import translations from "../lib/translations"

export default function Clients() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const clients = [
    "JMM Equipamentos",
    "Vertical Drones",
    "Google",
    "Amazon",
    "Microsoft",
    "Oracle",
  ]

  return (
    <section className="py-24 text-center">
      <p className="text-sm text-gray-500 uppercase tracking-widest">
        {t.clientsTitle}
      </p>

      <h2 className="mt-4 text-gray-400 max-w-2xl mx-auto">
        {t.clientsSubtitle}
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-500">
        {clients.map((c, i) => (
          <div key={i} className="hover:text-white transition">
            {c}
          </div>
        ))}
      </div>
    </section>
  )
}