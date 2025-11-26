import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    detail: "123 Arabian Street, Downtown",
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    detail: "hello@almandihouse.com",
  },
  {
    icon: <Clock size={24} />,
    title: "Opening Hours",
    detail: "Daily: 11:00 AM - 11:00 PM",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        background: "var(--color-primary)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              background: "rgba(74, 124, 89, 0.1)",
              borderRadius: "30px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                color: "var(--color-green)",
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "700",
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-gray-900)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            We'd love to hear from you. Visit us or get in touch!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              style={{
                background: "var(--color-primary-dark)",
                padding: "2rem",
                borderRadius: "var(--border-radius-lg)",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--color-white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--color-green)",
                }}
              >
                {info.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "var(--color-black)",
                  marginBottom: "0.5rem",
                }}
              >
                {info.title}
              </h3>
              <p
                style={{
                  color: "var(--color-gray-900)",
                  fontSize: "1rem",
                }}
              >
                {info.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            background: "var(--color-black)",
            padding: "4rem 3rem",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "700",
              color: "var(--color-white)",
              marginBottom: "1rem",
            }}
          >
            Ready to Experience Authentic Mandi?
          </h3>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Order now and taste the tradition. Fast delivery to your doorstep.
          </p>
          <button
            style={{
              background: "var(--color-primary)",
              color: "var(--color-black)",
              border: "none",
              borderRadius: "var(--border-radius)",
              padding: "1rem 3rem",
              fontWeight: "700",
              fontSize: "1.125rem",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 16px rgba(236, 236, 117, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Order Online Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;