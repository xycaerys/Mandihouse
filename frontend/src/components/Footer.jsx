import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--color-black)",
        color: "var(--color-white)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Section */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <img
                src="https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/75ers0g1_ChatGPT%20Image%20Aug%2027%2C%202025%2C%2007_48_44%20PM.png"
                alt="Mandi House Logo"
                style={{
                  height: "80px",
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              Bringing authentic Yemeni Mandi to your table with love, tradition, and the finest
              ingredients.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 215, 0, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                  color: "var(--color-yellow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-yellow)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                  e.currentTarget.style.color = "var(--color-yellow)";
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 215, 0, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                  color: "var(--color-yellow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-yellow)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                  e.currentTarget.style.color = "var(--color-yellow)";
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 215, 0, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                  color: "var(--color-yellow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-yellow)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                  e.currentTarget.style.color = "var(--color-yellow)";
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 215, 0, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                  color: "var(--color-yellow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-yellow)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                  e.currentTarget.style.color = "var(--color-yellow)";
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "var(--color-yellow)",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Home", "Menu", "About", "Contact"].map((link) => (
                <li key={link} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--color-yellow)")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.7)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "var(--color-yellow)",
              }}
            >
              Opening Hours
            </h4>
            <div style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.8" }}>
              <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 12:00 AM</p>
              <p style={{ marginTop: "1rem" }}>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@almandihouse.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 215, 0, 0.2)",
            paddingTop: "2rem",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <p>© 2024 Al Mandi House. All rights reserved. Crafted with love and tradition.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;