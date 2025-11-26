import React from "react";
import { Award, Heart, Users, Flame } from "lucide-react";

const features = [
  {
    icon: <Flame size={32} />,
    title: "Authentic Recipe",
    description: "Traditional Yemeni recipes passed down through generations",
  },
  {
    icon: <Heart size={32} />,
    title: "Fresh Ingredients",
    description: "Only the finest and freshest ingredients for every dish",
  },
  {
    icon: <Award size={32} />,
    title: "Award Winning",
    description: "Recognized for excellence in Middle Eastern cuisine",
  },
  {
    icon: <Users size={32} />,
    title: "Family Owned",
    description: "Serving authentic flavors with love and hospitality",
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        background: "var(--color-primary)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 1.5rem",
                background: "rgba(74, 124, 89, 0.1)",
                borderRadius: "30px",
                marginBottom: "1.5rem",
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
                Our Story
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: "700",
                color: "var(--color-black)",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              A Tradition of Authentic Arabian Flavors
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--color-gray-900)",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Al Mandi House brings you the authentic taste of Yemen with our signature Mandi
              dishes. For over two decades, we've been serving families the rich, aromatic flavors
              of traditional Middle Eastern cuisine.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--color-gray-900)",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
            >
              Every dish is prepared with care, using time-honored cooking methods and the finest
              spices. Our Mandi is slow-cooked to perfection, ensuring tender meat and perfectly
              seasoned rice that captures the essence of Arabian hospitality.
            </p>
            <button className="btn-primary" style={{ padding: "1rem 2rem" }}>
              Learn More
            </button>
          </div>

          {/* Right Content - Features */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "var(--color-primary-dark)",
                  padding: "2rem",
                  borderRadius: "var(--border-radius-lg)",
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
                    marginBottom: "1rem",
                    color: "var(--color-green)",
                  }}
                >
                  {feature.icon}
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
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-gray-900)",
                    fontSize: "0.9375rem",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;