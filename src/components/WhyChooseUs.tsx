export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Team",
      description: "Skilled professionals delivering high-quality gardening and landscaping services.",
      icon: "🌿",
    },
    {
      title: "Customized Solutions",
      description: "Every project is designed according to your space, style, and budget.",
      icon: "🏡",
    },
    {
      title: "Affordable Pricing",
      description: "Premium green solutions at competitive prices without compromising quality.",
      icon: "💰",
    },
    {
      title: "On-Time Service",
      description: "We complete every project on schedule with complete customer satisfaction.",
      icon: "⏰",
    },
  ];

  return (
    <section className="bg-green-50 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-green-800">
          Why Choose VR Agri Blooms?
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          We combine creativity, sustainability, and expert craftsmanship to
          deliver beautiful outdoor spaces that last for years.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-green-700">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}