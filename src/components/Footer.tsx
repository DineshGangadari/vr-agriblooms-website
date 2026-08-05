export default function Footer() {
  return (
    <footer className="bg-green-900 px-8 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold">VR Agri Blooms</h2>

          <p className="mt-2 text-green-100">
            Landscaping • Organic Farming • Green Solutions
          </p>
        </div>

        <div className="text-green-100">
          <p>Hyderabad, Telangana</p>
          <p className="mt-1">+91 7036106812</p>

          <div className="mt-4 flex justify-center gap-5 md:justify-start">
            <a
              href="https://www.facebook.com/share/1BdtacGTmj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/vragri_blooms?igsh=emJwbjh1b3dkcGkx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@VRagriblooms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              YouTube
            </a>
          </div>
        </div>

        <p className="text-sm text-green-200">
          © 2026 VR Agri Blooms. All rights reserved.
        </p>
      </div>
    </footer>
  );
}