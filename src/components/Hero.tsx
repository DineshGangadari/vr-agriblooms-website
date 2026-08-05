export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/heroi-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
            Landscaping • Gardening • Green Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            Transforming ordinary spaces into thriving green environments.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            End-to-end gardening and landscaping solutions for homes,
            businesses, terraces, lawns, vertical gardens, plantations, and
            irrigation systems across Hyderabad.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-green-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Get Free Quote
            </a>

            <a
              href="https://wa.me/917036106812"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}