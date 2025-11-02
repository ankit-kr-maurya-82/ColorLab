import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">📩 Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or suggestions? We’d love to hear from you!  
          Fill out the form or reach us directly.
        </p>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <ul>
              <li>
                <FaEnvelope className="icon" /> colorlab@gmail.com
              </li>
              {/* <li>
                <FaPhone className="icon" /> +91 98765 43210
              </li> */}
              {/* <li>
                <FaMapMarkerAlt className="icon" /> Mumbai, India
              </li> */}
            </ul>
          </div>

          {/* Right: Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
