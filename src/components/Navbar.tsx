import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">

      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="VR Agri Blooms Logo"
          width={50}
          height={50}
        />

        <h1 className="text-3xl font-bold text-green-700">
          VR Agri Blooms
        </h1>
      </div>

      <ul className="flex gap-8 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

    </nav>
  );
}