import React from "react";
import { Clock, Star } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Chicken Mandi",
    description: "Tender chicken marinated with aromatic spices, served on fragrant saffron rice",
    image: "https://images.unsplash.com/photo-1603496987674-79600a000f55?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxtYW5kaSUyMHJpY2V8ZW58MHx8fHwxNzY0MTcxNTM4fDA&ixlib=rb-4.1.0&q=85",
    prepTime: "45 min",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Lamb Mandi",
    description: "Succulent lamb slow-cooked to perfection with traditional Yemeni spices",
    image: "https://images.pexels.com/photos/18698231/pexels-photo-18698231.jpeg",
    prepTime: "60 min",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Mixed Mandi Platter",
    description: "A generous platter featuring both chicken and lamb with aromatic rice and sauces",
    image: "https://images.pexels.com/photos/6275095/pexels-photo-6275095.jpeg",
    prepTime: "50 min",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Fish Mandi",
    description: "Fresh fish fillet grilled with authentic spices, served on seasoned rice",
    image: "https://images.pexels.com/photos/17139829/pexels-photo-17139829.jpeg",
    prepTime: "40 min",
    rating: 4.7,
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
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
              Our Signature Dishes
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
            Explore Our Mandi Menu
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
            Each dish is a masterpiece, crafted with love and authentic Arabian traditions
          </p>
        </div>

        {/* Menu Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: "var(--color-primary-dark)",
                borderRadius: "var(--border-radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "280px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "var(--color-white)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <span style={{ fontWeight: "600", fontSize: "0.875rem" }}>{item.rating}</span>
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    color: "var(--color-black)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    color: "var(--color-gray-900)",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--color-gray-600)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Clock size={18} />
                    <span>{item.prepTime}</span>
                  </div>
                  <button
                    className="btn-primary"
                    style={{
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;