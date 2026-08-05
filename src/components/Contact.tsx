export default function Contact() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-green-700">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Get in touch with VR Agri Blooms for landscaping, organic farming,
          garden maintenance, and green solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-8">
            <h3 className="text-2xl font-semibold text-green-800">
              VR Agri Blooms
            </h3>

            <p className="mt-6 text-gray-700">
              4-32-456/A, Phase 1, Allwyn Colony,
              Jagathgirigutta, Kukatpally,
              Hyderabad, Telangana - 500072
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
  <iframe
  src="https://www.google.com/maps?q=4-32-456/A,Phase%201,Allwyn%20Colony,Jagathgirigutta,Kukatpally,Hyderabad,Telangana%20500072&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  title="VR Agri Blooms Location"
/>
</div>

            <p className="mt-4 text-gray-700">
              Phone: +91 7036106812
            </p>

            <p className="mt-2 text-gray-700">
              Alternate: +91 7995508228
            </p>

            <a
              href="https://wa.me/917036106812"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
            >
              Chat on WhatsApp
            </a>
          </div>

          <form className="rounded-xl border border-gray-200 p-8 shadow-sm">
            <div>
              <label className="block font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                placeholder="Enter your name"
              />
            </div>

            <div className="mt-6">
              <label className="block font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mt-6">
              <label className="block font-medium text-gray-700">
                Service Required
              </label>

              <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600">
                <option>Landscaping</option>
                <option>Garden Maintenance</option>
                <option>Organic Farming</option>
                <option>Farmhouse Consultation</option>
                <option>Vertical Gardening</option>
                <option>Hydroponics</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows={4}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                placeholder="Tell us about your requirement"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}