"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <div className="text-white font-semibold text-lg">DataForge AI</div>

      <div className="flex gap-3 text-xl">
        <button onClick={() => setLang("PT")}>🇧🇷</button>
        <button onClick={() => setLang("EN")}>🇺🇸</button>
        <button onClick={() => setLang("ES")}>🇪🇸</button>
      </div>
    </nav>
  )
}