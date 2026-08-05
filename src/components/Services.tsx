export default function Services() {
  const services = [
    {
      title: "Landscaping",
      description:
        "Professional landscape design and execution for homes, villas, offices, and commercial spaces.",
    },
    {
      title: "Home Gardening",
      description:
        "Beautiful and customized home gardens with flowers, plants, shrubs, and decorative greenery.",
    },
    {
      title: "Terrace Gardening",
      description:
        "Transform your terrace into a refreshing green space with customized terrace garden solutions.",
    },
    {
      title: "Vertical Gardens",
      description:
        "Modern vertical garden installations that maximize greenery in limited spaces.",
    },
    {
      title: "Lawn Development",
      description:
        "Premium natural and artificial lawn installation with complete maintenance services.",
    },
    {
      title: "Garden Maintenance",
      description:
        "Regular maintenance including pruning, watering, fertilization, cleaning, and plant care.",
    },
    {
      title: "Plantation",
      description:
        "Tree and ornamental plant plantation for residential, commercial, and institutional projects.",
    },
    {
      title: "Irrigation Systems",
      description:
        "Efficient drip and sprinkler irrigation systems to keep your landscape healthy and water-efficient.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-green-50 px-6 py-20 md:px-10"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-900 md:text-5xl">
            Complete Gardening & Landscaping Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide end-to-end green solutions designed to transform your
            outdoor spaces into beautiful, sustainable environments.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-green-800">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}