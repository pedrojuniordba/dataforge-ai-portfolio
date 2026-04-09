"use client"

import { createContext, useContext, useState } from "react"

type Lang = "EN" | "PT" | "ES"

const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
} | null>(null)

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState<Lang>("EN")

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside provider")
  return ctx
}