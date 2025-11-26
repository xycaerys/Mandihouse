import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/rn932f8f_chicken%20mandi%20single.png",
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/0fqv7l7p_mutton%20mandi%20single.png",
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/ync1n7ud_mixed%20mandi%20single.png",
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/wdy93in5_chicken%20mandi%20plate.png",
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/02lqxet8_mixed%20mandi%20plate.png",
    "https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/d6zro627_Full%20chicken.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
        overflow: "hidden",
      }}
    >
      {/* Background Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImageIndex ? 0.15 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(26, 58, 26, 0.95) 0%, rgba(15, 35, 16, 0.95) 100%)",
          zIndex: 1,
        }}
      />
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
            fontSize: "1.125rem",
            color: "rgba(255, 255, 255, 0.9)",
            maxWidth: "900px",
            margin: "0 auto 3rem",
            lineHeight: "1.8",
          }}
        >
          Experience the rich heritage of Arabian and Hyderabadi cuisine with every visit to Mandi House. Delicately crafted with fragrant basmati rice, slow-cooked meats, and a perfect blend of aromatic spices, our signature mandi dishes deliver authentic flavors rooted in the Middle East and inspired by Hyderabad's vibrant culinary traditions. Each plate is a journey inviting you to savor tradition, aroma, and hospitality in every bite.
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