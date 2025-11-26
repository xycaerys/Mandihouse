import React from "react";
import { Plus } from "lucide-react";

const extrasData = {
  extraChicken: [
    { name: "Full Chicken", price: 25 },
    { name: "Half Chicken", price: 16 },
    { name: "Quarter Chicken", price: 10 },
  ],
  extraMutton: [
    { name: "Mutton Set", price: 22 },
    { name: "1 Lamb Shank", price: 15 },
  ],
  extraFish: [
    { name: "Fish 1 Piece", price: 10 },
  ],
  extraRice: [
    { name: "Extra Mandi Rice - Serves 1 Person", price: 12 },
  ],
  extrasAndDrinks: [
    { name: "Mandi Sauce", price: 2 },
    { name: "Mint Sauce", price: 2 },
    { name: "Salad", price: 3 },
    { name: "Drink 375ml", price: 2 },
    { name: "Drink 1.25L", price: 6 },
    { name: "Ayran", price: 5 },
    { name: "Plain Lassi", price: 5 },
    { name: "Mango Lassi", price: 5 },
    { name: "Any Desserts", price: 6 },
  ],
  muttonSoup: [
    { name: "Small", price: 4 },
    { name: "Large", price: 6 },
  ],
  preOrderOnly: [
    { name: "Mutton Leg Mandi", price: 120, note: "24 hours advance notice required" },
    { name: "Mutton Shoulder Mandi", price: 110, note: "24 hours advance notice required" },
  ],
};

const ExtrasShowcase = () => {
  const renderItemCard = (item, index) => (
    <div
      key={index}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "1.25rem 1.5rem",
        borderRadius: "var(--border-radius)",
        border: "1px solid rgba(255, 215, 0, 0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-yellow)";
        e.currentTarget.style.transform = "translateX(5px)";
        e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
      }}
    >
      <div style={{ flex: 1 }}>
        <span style={{ color: "var(--color-white)", fontWeight: "600", fontSize: "1rem" }}>
          {item.name}
        </span>
        {item.note && (
          <div style={{ fontSize: "0.75rem", color: "rgba(255, 215, 0, 0.8)", marginTop: "0.25rem" }}>
            {item.note}
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span
          style={{
            color: "var(--color-yellow)",
            fontWeight: "700",
            fontSize: "1.25rem",
          }}
        >
          ${item.price}
        </span>
        <Plus size={20} color="var(--color-yellow)" />
      </div>
    </div>
  );

  const renderSection = (title, items, columns = 1) => (
    <div style={{ marginBottom: "3rem" }}>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.75rem",
          fontWeight: "700",
          color: "var(--color-yellow)",
          marginBottom: "1.5rem",
          paddingBottom: "0.75rem",
          borderBottom: "2px solid rgba(255, 215, 0, 0.3)",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${columns === 1 ? "300px" : "250px"}, 1fr))`,
          gap: "1rem",
        }}
      >
        {items.map((item, idx) => renderItemCard(item, idx))}
      </div>
    </div>
  );

  return (
    <section
      id="extras"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(to bottom, var(--color-primary), var(--color-primary-dark))",
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
              Customize Your Order
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
            Extras & Add-ons
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
            Enhance your meal with our premium extras, sides, and beverages
          </p>
        </div>

        {/* Main Container */}
        <div
          style={{
            background: "var(--color-green)",
            borderRadius: "var(--border-radius-lg)",
            padding: "3rem",
            border: "2px solid var(--color-yellow)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Two Column Layout for Main Sections */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              marginBottom: "3rem",
            }}
          >
            {/* Left Column */}
            <div>
              {renderSection("EXTRA CHICKEN", extrasData.extraChicken)}
              {renderSection("EXTRA MUTTON", extrasData.extraMutton)}
              {renderSection("EXTRA FISH", extrasData.extraFish)}
            </div>

            {/* Right Column */}
            <div>
              {renderSection("EXTRA MANDI RICE", extrasData.extraRice)}
              {renderSection("MUTTON SOUP", extrasData.muttonSoup)}
            </div>
          </div>

          {/* Full Width Sections */}
          <div style={{ marginTop: "3rem" }}>
            {renderSection("EXTRAS & DRINKS", extrasData.extrasAndDrinks, 2)}
          </div>

          {/* Pre-Order Section */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "var(--border-radius-lg)",
              border: "2px dashed var(--color-yellow)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  margin: 0,
                }}
              >
                PRE-ORDER ONLY
              </h3>
              <span
                style={{
                  background: "var(--color-yellow)",
                  color: "var(--color-black)",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                24 Hours Notice
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              {extrasData.preOrderOnly.map((item, idx) => renderItemCard(item, idx))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtrasShowcase;
