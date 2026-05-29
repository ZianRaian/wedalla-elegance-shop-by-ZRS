const ambassadors = [
  { name: "Isabella Chen", title: "Fashion Influencer" },
  { name: "Marcus Williams", title: "Celebrity DJ" },
  { name: "Nadia Petrova", title: "Luxury Lifestyle Blogger" },
  { name: "James Adeyemi", title: "Event Architect" },
];

const AmbassadorsSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-72 h-72 top-20 left-10" style={{ background: 'var(--glow-blue)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Partners</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Brand <span className="gradient-text">Ambassadors</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ambassadors.map((a, i) => (
            <div key={a.name} className="text-center group">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] transition-all duration-500 group-hover:glow-purple">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">{a.name.charAt(0)}</span>
                </div>
              </div>
              <h3 className="font-semibold text-foreground">{a.name}</h3>
              <p className="text-muted-foreground text-sm">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsSection;
