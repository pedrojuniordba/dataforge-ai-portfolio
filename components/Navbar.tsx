export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-8 h-8" />
          <span className="font-semibold">DataForge AI</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">

          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>

          {/* seletor idioma */}
          <select className="bg-black border border-gray-700 rounded px-2 py-1 text-white">
            <option>EN</option>
            <option>PT</option>
            <option>ES</option>
          </select>

        </div>

      </div>

    </nav>
  )
}