import React from "react";

const ExtrasShowcase = () => {
  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to bottom, var(--color-primary), var(--color-primary-dark))",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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

        {/* Extras Image Showcase */}
        <div
          style={{
            background: "var(--color-green)",
            borderRadius: "var(--border-radius-lg)",
            padding: "3rem",
            border: "2px solid var(--color-yellow)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src="https://customer-assets.emergentagent.com/job_gourmet-mandi/artifacts/6tbdo2hp_image.png"
            alt="Extras and Add-ons Menu"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "var(--border-radius)",
              display: "block",
            }}
          />
        </div>

        {/* Quick Links to Extras */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-primary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
            onClick={() => {
              const menuSection = document.getElementById("menu");
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth" });
                // Small delay to ensure scroll completes before clicking
                setTimeout(() => {
                  const extrasButton = document.querySelector('button[onclick*="extras"]') || 
                                      Array.from(document.querySelectorAll("button")).find(btn => 
                                        btn.textContent.includes("Extras & Drinks")
                                      );
                  if (extrasButton) extrasButton.click();
                }, 500);
              }
            }}
          >
            View All Extras
          </button>
          <button
            className="btn-secondary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            Contact for Pre-Orders
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtrasShowcase;
