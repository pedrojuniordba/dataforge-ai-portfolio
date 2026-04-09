export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      <a
        href="https://wa.me/5541992188618"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

      <a
        href="https://instagram.com/pedrossjunior_"
        target="_blank"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        📸
      </a>

    </div>
  )
}