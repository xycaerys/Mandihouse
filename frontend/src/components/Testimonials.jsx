import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohamad I.",
    role: "Customer",
    text: "Very generous meal, beautiful taste. I recommend!",
    rating: 5,
  },
  {
    name: "Alex P.",
    role: "Customer",
    text: "LAMB MANDI WAS DELICIOUS AND JUICY",
    rating: 5,
  },
  {
    name: "Ashraf Khan A.",
    role: "Customer",
    text: "Amazing food, fast delivery, fantastic packaging. Just love their food.",
    rating: 5,
  },
  {
    name: "Mustafa Ahmed ali",
    role: "Customer",
    text: "Really great food, I'd recommend everyone to visit this restaurant and taste the real Hyderabadi and Arabian cuisine",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
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
              Customer Reviews
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
            What Our Customers Say
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
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "var(--color-green)",
                padding: "2rem",
                borderRadius: "var(--border-radius-lg)",
                border: "1px solid rgba(255, 215, 0, 0.2)",
                boxShadow: "var(--shadow-md)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.borderColor = "var(--color-yellow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  opacity: "0.2",
                }}
              >
                <Quote size={48} color="var(--color-yellow)" />
              </div>

              {/* Rating Stars */}
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "1.25rem" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div style={{ borderTop: "1px solid rgba(255, 215, 0, 0.2)", paddingTop: "1rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--color-yellow)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.875rem",
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
