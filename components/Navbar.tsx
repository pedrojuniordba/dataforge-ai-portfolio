"use client"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DataForge AI"
          className="h-8 bg-black rounded-md p-1"
        />
        <span className="font-semibold text-white text-lg">
          DataForge AI
        </span>
      </div>

    {/* IDIOMAS */}
      <div className="flex gap-3 text-xl">

        <button onClick={() => setLang("PT")}>🇧🇷</button>
        <button onClick={() => setLang("EN")}>🇺🇸</button>
        <button onClick={() => setLang("ES")}>🇪🇸</button>

      </div>

    </nav>
  )
}