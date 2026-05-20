import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  MessageCircle,
  Sparkles,
  Crown,
  Heart,
  Scissors,
  Brush,
  Gem,
  Send,
} from "lucide-react";
import "./App.css";

function App() {
  const phoneNumber = "918106760117";

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    functionType: "",
  });

  const services = [
    {
      icon: <Crown />,
      title: "Bridal Makeup",
      desc: "Elegant bridal looks for weddings, receptions, engagements and traditional ceremonies.",
    },
    {
      icon: <Brush />,
      title: "Non-Bridal Makeup",
      desc: "Party makeup, event makeup, photoshoot makeup and soft glam looks.",
    },
    {
      icon: <Scissors />,
      title: "Hair Styling",
      desc: "Bridal buns, curls, modern hairstyles, traditional hair looks and accessories styling.",
    },
    {
      icon: <Gem />,
      title: "Saree Draping",
      desc: "Traditional and modern saree draping for bridal and special occasions.",
    },
    {
      icon: <Heart />,
      title: "Groom Makeup",
      desc: "Natural and polished grooming looks for wedding and reception events.",
    },
  ];

  const gallery = [
    "/images/gallery/bridal1.jpg",
    "/images/gallery/bridal2.jpg",
    "/images/gallery/bridal3.jpg",
    "/images/gallery/bridal4.jpg",
  ];

  const sendBookingToWhatsApp = (e) => {
    e.preventDefault();

    const message = `Hello Sahithi,%0A%0AI want to book a bridal slot.%0A%0AName: ${formData.name}%0AWedding Date: ${formData.date}%0ALocation: ${formData.location}%0AFunction Type: ${formData.functionType}`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const openWhatsApp = () => {
    const message =
      "Hello Sahithi, I want to know more about your makeup services and pricing.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="site">
      <nav className="navbar">
        <img src="/images/logo.jpg" alt="Glamup With Sahithi Logo" />
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Book Slot</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tagline">
            <Sparkles size={18} /> Luxury Bridal Makeup Artist
          </p>
          <h1>Glamup With Sahithi</h1>
          <p className="hero-text">
            Bridal makeup, non-bridal glam, hair styling, groom makeup and saree
            draping with a luxury traditional modern glam touch.
          </p>

          <div className="hero-buttons">
            <button onClick={openWhatsApp} className="primary-btn">
              <MessageCircle size={18} /> Enquire on WhatsApp
            </button>

            <a href="tel:8106760117" className="secondary-btn">
              <Phone size={18} />Call Sahithi
            </a>
          </div>
        </div>

        <div className="hero-image">
  <img src="/images/logo.jpg" alt="Glamup With Sahithi Logo" />
</div>
      </section>

      <section className="about">
  <div className="about-text">
    <p className="section-label">About The Artist</p>
    <h2>Certified Makeup Artist Creating Timeless Glam</h2>
    <p>
      Glamup With Sahithi is led by a certified professional makeup artist
      from Bangalore, specializing in natural glam, bridal elegance and
      graceful traditional transformations.
    </p>

    <div className="about-points">
      <span>✨ Certified Makeup Artist from Bangalore</span>
      <span>✨ Professional in Natural Glam</span>
      <span>📍 Warangal • Hyderabad • Karimnagar • Khammam</span>
      <span>📩 DM for bookings and enquiries</span>
    </div>
  </div>

  <div className="award-photo">
    <img src="/images/award.jpg" alt="Professional makeup artist award" />
  </div>
</section>

      <section id="services" className="services">
        <p className="section-label">Services</p>
        <h2>Services Available</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button onClick={openWhatsApp}>Ask Price</button>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <p className="section-label">Portfolio</p>
        <h2>Bridal Looks Gallery</h2>

        <div className="gallery">
          {gallery.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Bridal look ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="instagram-gallery-link">
  <p>Want to explore more bridal transformations and glam looks?</p>

  <a
    href="https://www.instagram.com/glamup.with.sahithi/"
    target="_blank"
  >
    <Camera /> View More On Instagram
  </a>
</div>
      </section>

      <section className="locations">
        <p className="section-label">Locations</p>
        <h2>Available At</h2>
        <div className="location-box">
          <MapPin />
          <p>
            Warangal, Hanamkonda, Kazipet, Hyderabad and nearby locations.
          </p>
        </div>
      </section>

      <section id="booking" className="booking">
        <div className="booking-text">
          <p className="section-label">Booking</p>
          <h2>Check Availability & Pricing</h2>
         <p>
  Share your event details to know availability, pricing and bridal
  makeup packages.
</p>
        </div>

        <form onSubmit={sendBookingToWhatsApp} className="booking-form">
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="date"
            required
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Location"
            required
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />

          <select
            required
            onChange={(e) =>
              setFormData({ ...formData, functionType: e.target.value })
            }
          >
            <option value="">Select Function Type</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Engagement</option>
            <option>Haldi</option>
            <option>Mehendi</option>
            <option>Sangeet</option>
            <option>Party Makeup</option>
            <option>Other</option>
          </select>

          <button type="submit">
            <Send size={18} /> Send to WhatsApp
          </button>
        </form>
      </section>

      <section id="contact" className="contact">
  <p className="section-label">Contact</p>
  <h2>Get In Touch</h2>

  <div className="contact-grid">
    <a href="tel:8106760117">
      <Phone /> 8106760117
    </a>

    <a href="mailto:glamupwithsahithi@gmail.com">
      <Mail /> glamupwithsahithi@gmail.com
    </a>

    <a
      href="https://www.instagram.com/glamup.with.sahithi/"
      target="_blank"
    >
      <Camera /> Instagram
    </a>
  </div>
</section>

      <footer>
        <img src="/images/logo.jpg" alt="Glamup With Sahithi Logo" />
        <p>© 2026 Glamup With Sahithi. All rights reserved.</p>
      </footer>

      <button className="floating-whatsapp" onClick={openWhatsApp}>
        <MessageCircle />
      </button>
    </div>
  );
}

export default App;