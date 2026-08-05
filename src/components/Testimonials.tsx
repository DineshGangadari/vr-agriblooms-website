const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Villa Owner",
    review:
      "VR Agri Blooms completely transformed our garden. The team was professional, creative, and delivered beyond our expectations.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    review:
      "Excellent landscaping service! Our terrace garden looks beautiful and the maintenance support has been outstanding.",
  },
  {
    name: "Suresh Reddy",
    role: "Farmhouse Owner",
    review:
      "Highly recommended. They designed our farmhouse landscape exactly as we imagined. Great quality and timely completion.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-green-50 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-green-600 font-semibold uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold text-green-900">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Customer satisfaction is at the heart of everything we do.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-yellow-500 text-2xl">★★★★★</div>

              <p className="mt-5 text-gray-700 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-green-800">{item.name}</h3>
                <p className="text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}