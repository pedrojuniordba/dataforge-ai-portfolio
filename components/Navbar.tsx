"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      {/* NOME TEXTO */}
      <div className="text-white font-semibold text-lg">
        DataForge AI
      </div>

      {/* IDIOMAS */}
      <div className="flex gap-3 text-xl">

        <button onClick={() => setLang("PT" as const)}>🇧🇷</button>
        <button onClick={() => setLang("EN" as const)}>🇺🇸</button>
        <button onClick={() => setLang("ES" as const)}>🇪🇸</button>

      </div>

    </nav>
  )
}