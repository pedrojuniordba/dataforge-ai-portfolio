export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="text-white font-semibold tracking-tight">
          DataForge AI
        </span>

        <a
          href="https://wa.me/5541999998888"
          className="text-sm border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Contact
        </a>

      </div>

    </nav>
  )
}