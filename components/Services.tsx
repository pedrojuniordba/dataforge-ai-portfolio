export default function Services() {
  return (
    <section id="services" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">

            <h3 className="text-xl mb-4">
              Oracle Consulting
            </h3>

            <p className="text-gray-500">
              Performance tuning, architecture and high availability.
            </p>

          </div>

          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">

            <h3 className="text-xl mb-4">
              PostgreSQL
            </h3>

            <p className="text-gray-500">
              Query optimization and scalable database architecture.
            </p>

          </div>

          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">

            <h3 className="text-xl mb-4">
              AI Automation
            </h3>

            <p className="text-gray-500">
              Intelligent agents and business automation.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}