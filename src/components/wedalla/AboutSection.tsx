const AboutSection = () => {
  return (
    <section className="section-slide flex items-center justify-center">
      <div className="bg-blob w-72 h-72 top-10 right-10" style={{ background: 'var(--glow-purple)' }} />
      <div className="bg-blob w-56 h-56 bottom-10 left-10" style={{ background: 'var(--glow-blue)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Story</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Where <span className="gradient-text">Vision</span> Meets Reality
        </h2>
        <div className="glass-card p-8 md:p-12">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            At <span className="text-foreground font-semibold">Wedalla</span>, we believe every event tells a story.
            From intimate weddings to grand festivals, we transform spaces into breathtaking experiences.
            Our team of passionate creators brings together artistry, innovation, and meticulous planning
            to craft moments that linger in hearts forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
