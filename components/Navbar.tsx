"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex justify-between items-center py-6">
      
      {/* LOGO */}
      <div className="flex items-center gap-3">
         <img src="/logo.png" className="h-10" />
         <span className="font-semibold text-lg">DataForge AI</span>
      </div>

      {/* IDIOMAS */}
      <div className="flex gap-4 text-xl">
        <button onClick={() => setLang("PT")}>🇧🇷</button>
        <button onClick={() => setLang("EN")}>🇺🇸</button>
        <button onClick={() => setLang("ES")}>🇪🇸</button>
      </div>
    </nav>
  )
}