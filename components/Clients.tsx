"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Clients() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-24 px-6 text-center border-t border-gray-800">

      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">
        {t.clientsTitle}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center">

        {t.clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center opacity-70 hover:opacity-100 transition"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-8 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

      </div>

    </section>
  )
}