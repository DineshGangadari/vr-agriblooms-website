import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
<Hero />
<About />
<WhyChooseUs />
<Services />
<Gallery />
<Testimonials />
<Contact />
<Footer />
<WhatsAppButton />
    </main>
  );
}