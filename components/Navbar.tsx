"use client"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DataForge AI"
          className="h-8 hover:scale-105 transition"
        />
        <span className="font-semibold text-white text-lg">
          DataForge AI
        </span>
      </div>

    </nav>
  )
}