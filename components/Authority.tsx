"use client"

import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function Authority() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-20 text-center">
      <p className="text-gray-400">{t.authority}</p>
    </section>
  )
}