import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "8rem 2rem 4rem",
        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "1.125rem",
            fontWeight: "500",
            color: "var(--color-yellow)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Authentic Middle Eastern Cuisine
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: "700",
            color: "var(--color-white)",
            marginBottom: "1.5rem",
            lineHeight: "1.1",
          }}
        >
          Welcome to
          <br />
          <span style={{ color: "var(--color-yellow)" }}>Mandi House</span>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.9)",
            maxWidth: "700px",
            margin: "0 auto 3rem",
            lineHeight: "1.7",
          }}
        >
          Savor the rich traditions of Arabian cuisine with our signature Mandi dishes. Slow-cooked
          to perfection, infused with aromatic spices that transport you to the heart of Yemen.
        </p>

        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            onClick={scrollToMenu}
          >
            View Menu
          </button>
        </div>

        {/* Decorative Pattern */}
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-yellow)",
              opacity: "0.5",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "var(--color-yellow)",
              borderRadius: "50%",
              transform: "translateY(-3px)",
            }}
          />
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-yellow)",
              opacity: "0.5",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={scrollToMenu}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          animation: "bounce 2s infinite",
        }}
      >
        <ChevronDown size={32} color="var(--color-yellow)" opacity={0.7} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;