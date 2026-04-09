"use client"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="about" className="py-32 px-6">

      <h2 className="text-4xl mb-12">{t.aboutTitle}</h2>

      <p>{t.aboutText1}</p>
      <p>{t.aboutText2}</p>
      <p>{t.aboutText3}</p>

    </section>
  )
}