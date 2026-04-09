"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="about" className="py-32 px-6">
      <h2 className="text-4xl mb-12">{t.about}</h2>
      <p className="text-gray-400 max-w-2xl">
        Senior Database Engineer focused on performance, scalability and AI automation.
      </p>
    </section>
  )
}