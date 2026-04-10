"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="h-8" />
        <span className="font-semibold text-white text-lg">
          DataForge AI
        </span>
      </div>

      <div className="flex gap-3 text-xl">

        <button onClick={() => setLang("PT" as const)}>🇧🇷</button>
        <button onClick={() => setLang("EN" as const)}>🇺🇸</button>
        <button onClick={() => setLang("ES" as const)}>🇪🇸</button>

      </div>

    </nav>
  )
}