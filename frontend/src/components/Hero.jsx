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
        background: "var(--color-primary)",
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
            color: "var(--color-green)",
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
            color: "var(--color-black)",
            marginBottom: "1.5rem",
            lineHeight: "1.1",
          }}
        >
          Experience the Finest
          <br />
          Traditional Mandi
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-gray-900)",
            maxWidth: "700px",
            margin: "0 auto 3rem",
            lineHeight: "1.7",
          }}
        >
          Indulge in the rich flavors of Arabia with our expertly crafted Mandi dishes,
          prepared with the finest ingredients and traditional recipes passed down through
          generations.
        </p>

        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
            Order Now
          </button>
          <button
            className="btn-secondary"
            style={{ fontSize: "1.125rem", padding: "0.875rem 2.5rem" }}
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
              background: "var(--color-black)",
              opacity: "0.3",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "var(--color-green)",
              borderRadius: "50%",
              transform: "translateY(-3px)",
            }}
          />
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-black)",
              opacity: "0.3",
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
        <ChevronDown size={32} color="var(--color-black)" opacity={0.5} />
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