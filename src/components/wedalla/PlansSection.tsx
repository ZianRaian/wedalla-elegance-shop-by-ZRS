import { Check } from "lucide-react";

const plans = [
  {
    name: "Festival Plan",
    price: "$5,499",
    featured: true,
    features: ["Full venue setup & decoration", "DJ & sound system", "Photography + drone shots", "Food & beverage for 500+", "VIP lounge area", "Event coordination team"],
  },
  {
    name: "Party Plan",
    price: "$2,499",
    featured: false,
    features: ["Venue selection & decoration", "Photography package", "Food & beverage for 150+", "Event coordinator", "Basic lighting setup"],
  },
];

const PlansSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-80 h-80 top-1/4 left-10" style={{ background: 'var(--glow-purple)' }} />
      <div className="bg-blob w-64 h-64 bottom-1/4 right-10" style={{ background: 'var(--glow-blue)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Pricing</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Choose Your <span className="gradient-text">Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-8 md:p-10 text-left transition-all duration-500 hover:scale-[1.03] ${
                plan.featured ? "glow-purple border-primary/30" : ""
              }`}
            >
              {plan.featured && (
                <span className="inline-block text-xs tracking-[0.2em] uppercase bg-primary/20 text-primary px-4 py-1.5 rounded-full mb-6 font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold gradient-text mb-8">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-full font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "btn-glow text-primary-foreground"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
