export default function Services() {
  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-3xl mb-16">What I Do</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        <div>
          <h3 className="text-xl mb-3">Databases</h3>
          <p className="text-gray-400">
            Oracle, PostgreSQL, SQL Server performance tuning and high availability.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-3">Data Engineering</h3>
          <p className="text-gray-400">
            ETL pipelines, data modeling and scalable architectures.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-3">AI Automation</h3>
          <p className="text-gray-400">
            Intelligent agents to automate workflows and reduce operational cost.
          </p>
        </div>

      </div>

    </section>
  )
}