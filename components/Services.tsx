export default function Services() {
  return (
    <section id="services" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold mb-16">Services</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* DATABASES */}
          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl mb-4">Databases</h3>
            <p className="text-gray-500">
              Oracle, PostgreSQL, SQL Server, MySQL, MariaDB and IBM Db2.
              Performance tuning, HA, backup & recovery.
            </p>
          </div>

          {/* CLOUD */}
          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl mb-4">Cloud & Architecture</h3>
            <p className="text-gray-500">
              Scalable, secure and resilient data architectures across cloud and on-premise.
            </p>
          </div>

          {/* AI */}
          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl mb-4">AI Automation</h3>
            <p className="text-gray-500">
              Intelligent automation and agents to optimize operations and reduce costs.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}