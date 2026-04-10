"use client"

import { useLanguage } from "../context/LanguageContext"

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="20" fill="url(#g)" />
      </svg>
      <span className="font-semibold">DataForge AI</span>
    </div>
  )
}

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Logo />

        {/* idiomas */}
        <div className="flex gap-2 text-lg">
          <button onClick={() => setLang("EN")}>🇺🇸</button>
          <button onClick={() => setLang("PT")}>🇧🇷</button>
          <button onClick={() => setLang("ES")}>🇪🇸</button>
        </div>

      </div>
    </nav>
  )
}