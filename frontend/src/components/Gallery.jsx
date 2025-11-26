import React from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1603496987674-79600a000f55?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxtYW5kaSUyMHJpY2V8ZW58MHx8fHwxNzY0MTcxNTM4fDA&ixlib=rb-4.1.0&q=85",
    caption: "Golden Chicken Mandi",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1697126248475-a537cc5cce28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhcmFiaWMlMjBjdWlzaW5lfGVufDB8fHx8MTc2NDE3MTU0NHww&ixlib=rb-4.1.0&q=85",
    caption: "Traditional Appetizers",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/18698231/pexels-photo-18698231.jpeg",
    caption: "Aromatic Rice Platter",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1697126248437-db26a30024c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxhcmFiaWMlMjBjdWlzaW5lfGVufDB8fHx8MTc2NDE3MTU0NHww&ixlib=rb-4.1.0&q=85",
    caption: "Mezze Selection",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/6275095/pexels-photo-6275095.jpeg",
    caption: "Mixed Grill Platter",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/17139829/pexels-photo-17139829.jpeg",
    caption: "Fresh Preparations",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
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
              Visual Feast
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
            Our Gallery
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
            A glimpse into our culinary artistry and the authentic flavors we serve
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              style={{
                position: "relative",
                height: "350px",
                borderRadius: "var(--border-radius-lg)",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "var(--shadow-md)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.15)";
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = "1";
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = "0";
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src={image.url}
                alt={image.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  padding: "2rem 1.5rem 1.5rem",
                  opacity: "0",
                  transition: "opacity 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--color-white)",
                  }}
                >
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;