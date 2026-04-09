"use client"

import { useLanguage } from "../context/LanguageContext"

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <circle cx="50" cy="50" r="20" fill="#3b82f6" />
      </svg>
      <span className="font-semibold">DataForge AI</span>
    </div>
  )
}

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Logo />

        <div className="flex items-center gap-6 text-sm">

          <a href="#services">Services</a>
          <a href="#about">About</a>

          <div className="flex gap-2 text-lg">
            <button onClick={() => setLang("EN")}>🇺🇸</button>
            <button onClick={() => setLang("PT")}>🇧🇷</button>
            <button onClick={() => setLang("ES")}>🇪🇸</button>
          </div>

        </div>

      </div>
    </nav>
  )
}