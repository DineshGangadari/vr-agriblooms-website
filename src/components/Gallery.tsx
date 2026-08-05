const projectVideos = [
  {
    src: "https://res.cloudinary.com/hgt8zrtv/video/upload/v1785946331/project-1_wkasl9.mp4",
    title: "Garden Transformation",
  },
  {
    src: "https://res.cloudinary.com/hgt8zrtv/video/upload/v1785946328/project-2_sdiue3.mp4",
    title: "Landscape Maintenance",
  },
  {
    src: "https://res.cloudinary.com/hgt8zrtv/video/upload/v1785946333/project-3_w7bsve.mp4",
    title: "Plantation Project",
  },
];

export default function Gallery() {
  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div data-aos="fade-up"
>
        <h2 className="text-center text-4xl font-bold text-green-800">
          Our Projects
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          Explore some of our recent landscaping, gardening, and plantation
          projects completed across Hyderabad.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectVideos.map((project) => (
            <div
              key={project.src}
              className="overflow-hidden rounded-2xl bg-green-50 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <video
                className="aspect-[9/16] w-full bg-black object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              >
                <source src={project.src} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-800">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  A recent VR Agri Blooms project showcasing our landscaping
                  and gardening work.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}