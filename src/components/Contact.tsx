"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        "Email configuration is missing. Please check the .env.local file."
      );
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage("");

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.get("name"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        },
        {
          publicKey,
        }
      );

      setStatusMessage("✅ Thank you! Your enquiry has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);

      setStatusMessage(
        "❌ Failed to send enquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 md:px-8"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-green-700">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Get in touch with VR Agri Blooms for landscaping, organic farming,
          garden maintenance, and green solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-xl bg-green-50 p-8">
            <h3 className="text-2xl font-semibold text-green-800">
              VR Agri Blooms
            </h3>

            <p className="mt-6 text-gray-700">
              4-32-456/A, Phase 1, Allwyn Colony,
              <br />
              Jagathgirigutta, Kukatpally,
              <br />
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

            <p className="mt-6 text-gray-700">
              Phone: +91 7036106812
            </p>

            <p className="mt-2 text-gray-700">
              Alternate: +91 7995508228
            </p>

            <a
              href="https://wa.me/917036106812"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="service"
                className="block font-medium text-gray-700"
              >
                Service Required
              </label>

              <select
                id="service"
                name="service"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="">Select a Service</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Garden Maintenance">
                  Garden Maintenance
                </option>
                <option value="Organic Farming">
                  Organic Farming
                </option>
                <option value="Farmhouse Consultation">
                  Farmhouse Consultation
                </option>
                <option value="Vertical Gardening">
                  Vertical Gardening
                </option>
                <option value="Hydroponics">
                  Hydroponics
                </option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your requirement"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-8 w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Enquiry"}
            </button>

            {statusMessage && (
              <p className="mt-4 text-center text-sm text-gray-700">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}