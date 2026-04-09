"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="font-semibold">DataForge AI</span>
        </div>

        <div className="flex gap-6 text-sm items-center">

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