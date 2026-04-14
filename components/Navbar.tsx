"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex justify-between items-center py-6">
      <div className="text-xl font-semibold">DataForge AI</div>

      <div className="flex gap-4 text-xl">
        <button onClick={() => setLang("PT")}>🇧🇷</button>
        <button onClick={() => setLang("EN")}>🇺🇸</button>
        <button onClick={() => setLang("ES")}>🇪🇸</button>
      </div>
    </nav>
  )
}