import eventMusic from "@/assets/event-music-fest.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventGarden from "@/assets/event-garden.jpg";

const events = [
  { name: "Larana Music Fest", category: "Music Festival", image: eventMusic },
  { name: "Fauget Music Fest", category: "Indoor Festival", image: eventFestival },
  { name: "Borcelle Festival", category: "Garden Party", image: eventGarden },
];

const EventsSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-80 h-80 top-0 left-1/4" style={{ background: 'var(--glow-purple)' }} />
      <div className="bg-blob w-64 h-64 bottom-0 right-1/4" style={{ background: 'var(--glow-blue)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Featured <span className="gradient-text">Events</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <a
              href="#contact"
              key={event.name}
              className="glass-card glass-card-hover group overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:glow-purple cursor-pointer block"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">{event.category}</p>
                <h3 className="font-display text-xl font-bold text-foreground">{event.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
