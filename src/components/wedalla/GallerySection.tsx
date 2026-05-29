import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Wedding ceremony setup", tall: true },
  { src: gallery2, alt: "Grand reception hall", tall: false },
  { src: gallery3, alt: "Dessert display", tall: true },
  { src: gallery4, alt: "Outdoor ceremony", tall: false },
  { src: gallery5, alt: "Concert pyrotechnics", tall: true },
  { src: gallery6, alt: "VIP lounge", tall: false },
];

const GallerySection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-72 h-72 top-20 right-20" style={{ background: 'var(--glow-purple)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Showcase</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Our <span className="gradient-text">Gallery</span>
        </h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-foreground font-medium text-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
