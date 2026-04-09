"use client"

import { createContext, useContext, useState } from "react"

type Lang = "EN" | "PT" | "ES"

const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
} | null>(null)

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<Lang>("EN")

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within provider")
  return context
}