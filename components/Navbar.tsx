"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex justify-between items-center py-6">

      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DataForge AI"
          className="h-10 hover:scale-105 transition"
        />
      </div>

      {/* AÇÕES */}
      <div className="flex items-center gap-6">

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/dataforgeai_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-sm font-medium"
        >
          Instagram
        </a>

        {/* IDIOMAS */}
        <div className="flex gap-3 text-lg">
          <button onClick={() => setLang("PT")}>🇧🇷</button>
          <button onClick={() => setLang("EN")}>🇺🇸</button>
          <button onClick={() => setLang("ES")}>🇪🇸</button>
        </div>

      </div>
    </nav>
  )
}