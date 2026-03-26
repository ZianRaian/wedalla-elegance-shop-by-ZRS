import aboutImage from "@/assets/about-story.jpg";
import heroImage from "@/assets/hero-1.jpg";

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img src={heroImage} alt="Wedalla Fashion" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="section-subheading text-background/70 mb-2">Our Story</p>
          <h1 className="font-heading text-5xl md:text-7xl text-background font-light tracking-wide">About Wedalla</h1>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
      <p className="section-subheading">Our Mission</p>
      <h2 className="section-heading mb-8">Where Craft Meets Consciousness</h2>
      <p className="font-body text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
        Founded in 2018, Wedalla was born from a simple belief: that fashion should be both beautiful and responsible. We partner with artisan workshops across Europe to create pieces that honor traditional craftsmanship while embracing modern design.
      </p>
    </section>

    {/* Story image + text */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <img src={aboutImage} alt="Our atelier" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
        </div>
        <div>
          <h3 className="font-heading text-3xl tracking-wide mb-6">The Atelier</h3>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Every Wedalla garment begins its journey in our design studio, where our creative team draws inspiration from art, architecture, and the natural world.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We source only the finest fabrics — Italian wools, Japanese silks, Portuguese linens — ensuring each piece not only looks exceptional but feels extraordinary against the skin.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our commitment to sustainability means we produce in small batches, minimize waste, and invest in fair labor practices throughout our supply chain.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading">Our Values</p>
          <h2 className="section-heading">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Quality First", desc: "We never compromise on materials or construction. Every seam, button, and stitch is a testament to our dedication." },
            { title: "Sustainable Practice", desc: "From organic fabrics to carbon-neutral shipping, we're committed to reducing our environmental footprint." },
            { title: "Timeless Design", desc: "We create pieces meant to be worn for years, not seasons. True style never goes out of fashion." },
          ].map((v, i) => (
            <div key={i} className="bg-background p-8 rounded-lg text-center">
              <h3 className="font-heading text-2xl tracking-wide mb-4">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
