"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      {/* LOGO + NOME */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DataForge AI"
          className="h-9 w-auto object-contain hover:scale-105 transition duration-300"
        />
        <span className="font-semibold text-white text-lg">
          DataForge AI
        </span>
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