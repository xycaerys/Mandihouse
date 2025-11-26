import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(236, 236, 117, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(15, 23, 42, 0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            fontWeight: "700",
            color: "var(--color-black)",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("hero")}
        >
          Al Mandi House
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          <a
            onClick={() => scrollToSection("menu")}
            style={{
              color: "var(--color-black)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-green)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-black)")}
          >
            Menu
          </a>
          <a
            onClick={() => scrollToSection("about")}
            style={{
              color: "var(--color-black)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-green)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-black)")}
          >
            About
          </a>
          <a
            onClick={() => scrollToSection("gallery")}
            style={{
              color: "var(--color-black)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-green)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-black)")}
          >
            Gallery
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            style={{
              color: "var(--color-black)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-green)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-black)")}
          >
            Contact
          </a>
          <button className="btn-primary">Order Now</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? (
            <X size={28} color="var(--color-black)" />
          ) : (
            <MenuIcon size={28} color="var(--color-black)" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--color-primary)",
            padding: "1.5rem 2rem",
            borderTop: "1px solid rgba(15, 23, 42, 0.1)",
          }}
          className="mobile-menu"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <a
              onClick={() => scrollToSection("menu")}
              style={{
                color: "var(--color-black)",
                textDecoration: "none",
                fontSize: "1.125rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Menu
            </a>
            <a
              onClick={() => scrollToSection("about")}
              style={{
                color: "var(--color-black)",
                textDecoration: "none",
                fontSize: "1.125rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("gallery")}
              style={{
                color: "var(--color-black)",
                textDecoration: "none",
                fontSize: "1.125rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Gallery
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              style={{
                color: "var(--color-black)",
                textDecoration: "none",
                fontSize: "1.125rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Contact
            </a>
            <button className="btn-primary" style={{ marginTop: "1rem" }}>
              Order Now
            </button>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;