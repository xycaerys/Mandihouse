import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    detail: "548 Princes Hwy, Rockdale NSW",
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    detail: "+61 416 775 785",
    detail2: "Tel: 0279017587",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    detail: "mandihouserockdale@gmail.com",
  },
  {
    icon: <Clock size={24} />,
    title: "Opening Hours",
    detail: "Tue-Thu: 4:00 PM - 11:00 PM",
    detail2: "Fri-Sun: 5:00 PM - 12:00 AM",
    detail3: "Monday: Closed",
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
              background: "rgba(255, 215, 0, 0.15)",
              borderRadius: "30px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                color: "var(--color-yellow)",
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
              color: "var(--color-white)",
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.8)",
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
          }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              style={{
                background: "var(--color-green)",
                padding: "2rem",
                borderRadius: "var(--border-radius-lg)",
                textAlign: "center",
                border: "1px solid rgba(255, 215, 0, 0.2)",
                boxShadow: "var(--shadow-sm)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.borderColor = "var(--color-yellow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--color-yellow)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--color-black)",
                }}
              >
                {info.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {info.title}
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "1rem",
                }}
              >
                {info.detail}
              </p>
              {info.detail2 && (
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {info.detail2}
                </p>
              )}
              {info.detail3 && (
                <p
                  style={{
                    color: "rgba(255, 215, 0, 0.9)",
                    fontSize: "1rem",
                    marginTop: "0.25rem",
                    fontWeight: "600",
                  }}
                >
                  {info.detail3}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;