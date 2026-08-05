const projectVideos = [
  {
    src: "/videos/projects/project-1.mp4",
    title: "Garden Transformation",
  },
  {
    src: "/videos/projects/project-2.mp4",
    title: "Landscape Maintenance",
  },
  {
    src: "/videos/projects/project-3.mp4",
    title: "Plantation Project",
  },
];

export default function Gallery() {
  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
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