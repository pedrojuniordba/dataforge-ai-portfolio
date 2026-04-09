export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="text-white font-semibold tracking-tight">
          DataForge AI
        </span>

        <a
          href="https://wa.me/5541992188618?text=Hello,%20I%20found%20DataForge%20AI%20and%20would%20like%20to%20know%20more%20about%20your%20services."
          className="text-sm border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Contact
        </a>

      </div>

    </nav>
  )
}