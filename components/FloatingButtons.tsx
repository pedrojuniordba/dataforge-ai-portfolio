export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a href="https://wa.me/5541992188618" target="_blank">
        <img src="/whatsapp.svg" className="w-12 h-12" />
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/pedrossjunior_" target="_blank">
        <img src="/instagram.svg" className="w-12 h-12" />
      </a>

    </div>
  )
}