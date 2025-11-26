import React, { useState } from "react";
import { Clock, DollarSign } from "lucide-react";
import { menuCategories, extrasAndDrinks } from "../data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "preorder", label: "Pre-Order" },
    { id: "extras", label: "Extras & Drinks" },
  ];

  const getFilteredItems = () => {
    if (activeCategory === "all") {
      return [
        ...menuCategories.signatureMandi,
        ...menuCategories.specialties,
        ...menuCategories.preOrderOnly,
      ];
    }
    if (activeCategory === "preorder") return menuCategories.preOrderOnly;
    return [];
  };

  return (
    <section
      id="menu"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(to bottom, var(--color-primary-dark), var(--color-primary))",
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
              Our Signature Menu
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
            Explore Our Mandi Menu
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
            Each dish is crafted with love and authentic Arabian traditions
          </p>
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                border: "2px solid var(--color-yellow)",
                background: activeCategory === cat.id ? "var(--color-yellow)" : "transparent",
                color: activeCategory === cat.id ? "var(--color-black)" : "var(--color-yellow)",
                fontWeight: "600",
                fontSize: "0.9375rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.target.style.background = "rgba(255, 215, 0, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.target.style.background = "transparent";
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {activeCategory !== "extras" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {getFilteredItems().map((item, index) => (
              <div
                key={index}
                style={{
                  background: "var(--color-green)",
                  borderRadius: "var(--border-radius-lg)",
                  overflow: "hidden",
                  border: item.preOrder ? "2px dashed var(--color-yellow)" : "1px solid rgba(255, 215, 0, 0.2)",
                  boxShadow: "var(--shadow-md)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 215, 0, 0.2)";
                  e.currentTarget.style.borderColor = "var(--color-yellow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = item.preOrder ? "var(--color-yellow)" : "rgba(255, 215, 0, 0.2)";
                }}
              >
                {/* Image Section - Only show if not pre-order */}
                {!item.preOrder && (
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
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
                        objectPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                    {/* Rating Badge */}
                    {item.rating && (
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
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <span style={{ color: "#fbbf24", fontSize: "1rem" }}>★</span>
                        <span style={{ fontWeight: "700", fontSize: "0.9375rem", color: "var(--color-black)" }}>
                          {item.rating}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content Section */}
                <div style={{ padding: item.preOrder ? "2.5rem 1.5rem" : "1.5rem" }}>
                  {/* Pre-Order Badge */}
                  {item.preOrder && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "var(--color-yellow)",
                        color: "var(--color-black)",
                        padding: "0.5rem 1.25rem",
                        borderRadius: "20px",
                        fontWeight: "700",
                        fontSize: "0.875rem",
                        marginBottom: "1rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      PRE-ORDER
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "var(--color-white)",
                        flex: 1,
                      }}
                    >
                      {item.name}
                    </h3>
                    {!item.preOrder && item.rating && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span style={{ color: "#fbbf24", fontSize: "1.125rem" }}>★</span>
                        <span style={{ fontWeight: "700", fontSize: "1rem", color: "var(--color-yellow)" }}>
                          {item.rating}
                        </span>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.9375rem",
                      lineHeight: "1.6",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: item.preOrder ? "center" : "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--color-yellow)",
                        color: "var(--color-black)",
                        padding: "0.5rem 1.25rem",
                        borderRadius: "20px",
                        fontWeight: "700",
                        fontSize: "1.25rem",
                      }}
                    >
                      ${item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Extras & Drinks Section */}
        {activeCategory === "extras" && (
          <div style={{ marginTop: "3rem" }}>
            {/* Extra Chicken */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Extra Chicken
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.extraChicken.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Mutton */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Extra Mutton
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.extraMutton.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Fish */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Extra Fish
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.extraFish.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Rice */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Extra Mandi Rice
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.extraRice.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sauces & Sides */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Sauces & Sides
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.saucesAndSides.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soup */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Mutton Soup
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.soup.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Drinks
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.drinks.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--color-yellow)",
                  marginBottom: "1.5rem",
                }}
              >
                Desserts
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {extrasAndDrinks.desserts.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-green)",
                      padding: "1.5rem",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid rgba(255, 215, 0, 0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-yellow)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "var(--color-white)", fontWeight: "600" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-yellow)",
                        fontWeight: "700",
                        fontSize: "1.125rem",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
