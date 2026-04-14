"use client"

export default function Clients() {
  const clients = [
    "JMM Equipamentos",
    "Vertical Drones",
    "Google",
    "Amazon",
    "Microsoft",
    "Oracle",
  ]

  return (
    <section className="py-24 text-center">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-10">
        Empresas que confiam
      </p>

      <div className="flex flex-wrap justify-center gap-10 text-gray-500 text-lg font-medium">
        {clients.map((client, index) => (
          <div
            key={index}
            className="opacity-70 hover:opacity-100 hover:text-white transition duration-300"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}