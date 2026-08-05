export default function About() {
  return (
    <section
  id="about"
  className="bg-white px-6 py-20 md:px-10"
  data-aos="fade-up"
  data-aos-duration="1000"
>
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-green-900 md:text-5xl">
            Creating beautiful green spaces with purpose.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Agri Blooms is dedicated to transforming ordinary spaces into
            thriving green environments. We offer end-to-end gardening and
            landscaping services, including terrace gardens, home gardens, lawn
            development, vertical gardens, irrigation systems, plantation, and
            regular garden maintenance.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            With a focus on quality, sustainability, and customer satisfaction,
            we bring nature closer to your everyday life.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-2xl font-bold text-green-800">End-to-End</p>
              <p className="mt-1 text-gray-600">Green solutions</p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-2xl font-bold text-green-800">Hyderabad</p>
              <p className="mt-1 text-gray-600">Local service support</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-green-100 p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-green-900">
            What We Focus On
          </h3>

          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>✓ Sustainable landscaping</li>
            <li>✓ Customized garden solutions</li>
            <li>✓ Quality plantation and maintenance</li>
            <li>✓ Customer-focused service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}