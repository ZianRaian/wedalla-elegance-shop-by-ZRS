import { MapPin, Palette, UtensilsCrossed, Camera, Car, Sparkles, Music, PartyPopper } from "lucide-react";

const services = [
  { icon: MapPin, title: "Venue Selection", desc: "Handpicked luxury venues tailored to your vision" },
  { icon: Palette, title: "Event Decoration", desc: "Bespoke designs that transform spaces" },
  { icon: UtensilsCrossed, title: "Lounge & Food", desc: "Gourmet catering and VIP lounge experiences" },
  { icon: Camera, title: "Photography & Video", desc: "Cinematic capture of every precious moment" },
  { icon: Car, title: "Car Rental", desc: "Premium fleet for grand arrivals and departures" },
  { icon: Sparkles, title: "Makeup Artist", desc: "Professional glam for your perfect look" },
  { icon: Music, title: "Artist Booking & Entertainment", desc: "Top-tier artist booking and live entertainment management" },
  { icon: PartyPopper, title: "Grand Opening & Launch Events", desc: "Spectacular launch event planning and execution" },
];

const ServicesSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-72 h-72 top-20 -right-36" style={{ background: 'var(--glow-pink)' }} />
      <div className="bg-blob w-64 h-64 bottom-10 -left-32" style={{ background: 'var(--glow-purple)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">What We Offer</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">56+ Vendors And Companies Join With Wedalla .</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a
              href="#contact"
              key={s.title}
              className="glass-card glass-card-hover p-8 text-center transition-all duration-500 hover:scale-[1.04] group cursor-pointer block"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
