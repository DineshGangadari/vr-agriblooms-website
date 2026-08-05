export default function Services() {
  return (
    <section className="bg-green-50 py-20 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-600">
          We provide complete outdoor and green solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              🌳 Landscaping
            </h3>

            <p className="mt-4 text-gray-600">
              Beautiful landscape designs for homes,
              villas and commercial spaces.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              🌱 Organic Farming
            </h3>

            <p className="mt-4 text-gray-600">
              Eco-friendly farming solutions with
              sustainable practices.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              🌼 Garden Maintenance
            </h3>

            <p className="mt-4 text-gray-600">
              Regular maintenance to keep your
              gardens fresh and healthy.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700">
              🌿 Green Solutions
            </h3>

            <p className="mt-4 text-gray-600">
              Customized eco-friendly solutions
              for every outdoor space.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}