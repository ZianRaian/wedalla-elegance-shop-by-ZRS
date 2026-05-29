import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah & Michael", text: "Wedalla turned our dream wedding into a reality beyond imagination. Every detail was perfect.", role: "Wedding Couple" },
  { name: "David Okonkwo", text: "The Larana Music Fest was absolutely phenomenal. The production quality was world-class.", role: "Festival Organizer" },
  { name: "Amara Johnson", text: "From planning to execution, the Wedalla team was exceptional. Our guests are still talking about it.", role: "Corporate Client" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-64 h-64 top-10 left-1/3" style={{ background: 'var(--glow-pink)' }} />
      <div className="bg-blob w-56 h-56 bottom-10 right-1/4" style={{ background: 'var(--glow-purple)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          What Clients <span className="gradient-text">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card glass-card-hover p-8 text-left transition-all duration-500 hover:scale-[1.03] animate-float"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="text-foreground font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
