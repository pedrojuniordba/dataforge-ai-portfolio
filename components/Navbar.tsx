"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { setLang } = useLanguage()

  return (
    <nav className="flex justify-between items-center py-6">

      {/* LOGO + TEXTO */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DataForge AI"
          className="h-10 w-auto object-contain"
        />
        <span className="text-lg font-semibold">DataForge AI</span>
      </div>

      {/* AÇÕES */}
      <div className="flex items-center gap-6">

        {/* INSTAGRAM ICON SVG */}
        <a
          href="https://instagram.com/dataforgeai_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
          </svg>
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