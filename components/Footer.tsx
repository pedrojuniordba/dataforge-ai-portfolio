export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-800 text-center text-gray-500">

      <p className="font-semibold text-white">
        DataForge AI
      </p>

      <p className="mt-2 text-sm">
        Engineering Data Intelligence
      </p>

      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} DataForge AI
      </p>

    </footer>
  )
}