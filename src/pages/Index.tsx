import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-1.jpg";
import promoImage from "@/assets/promo-banner.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryNew from "@/assets/category-new.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";

const bestSellers = products.filter((p) => p.isBestSeller);

const testimonials = [
  { name: "Emma R.", text: "The quality is exceptional. Every piece feels like a luxury investment.", rating: 5 },
  { name: "James L.", text: "Finally found a brand that delivers on both style and substance. Impeccable tailoring.", rating: 5 },
  { name: "Sofia M.", text: "Wedalla has become my go-to for timeless wardrobe essentials. Absolutely love the cashmere.", rating: 5 },
];

const categories = [
  { name: "Women", image: categoryWomen, link: "/shop" },
  { name: "Men", image: categoryMen, link: "/shop" },
  { name: "New Arrivals", image: categoryNew, link: "/shop" },
];

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <img src={heroImage} alt="Wedalla Fashion Campaign" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="animate-slide-up">
              <p className="section-subheading text-primary-foreground/80 mb-2">Spring / Summer 2026</p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] mb-6">
                Refined<br />Essentials
              </h1>
              <Link to="/shop" className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-xs font-body uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-sm">
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="section-subheading">Collections</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={1000} />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="font-heading text-3xl text-background tracking-wide">{cat.name}</h3>
                  <span className="inline-flex items-center gap-2 text-background text-xs font-body uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="section-subheading">Curated Selection</p>
              <h2 className="section-heading">Best Sellers</h2>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0 inline-flex items-center gap-2 nav-link">
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={promoImage} alt="Season sale" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="section-subheading text-background/70 mb-2">Limited Time</p>
            <h2 className="font-heading text-4xl md:text-6xl text-background font-light tracking-wide mb-4">Up to 30% Off</h2>
            <p className="font-body text-sm text-background/80 mb-6 max-w-md mx-auto">
              Explore our end-of-season edit with exceptional savings on select styles.
            </p>
            <Link to="/shop" className="btn-outline border-background/80 text-background hover:bg-background hover:text-foreground">
              Shop Sale
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="section-subheading">Our Story</p>
            <h2 className="section-heading mb-6">Crafted with Purpose</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              At Wedalla, we believe in the power of thoughtful design. Each piece in our collection is crafted from the finest materials, designed to transcend seasons and trends.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From our atelier to your wardrobe, every garment carries the promise of exceptional quality and timeless elegance.
            </p>
            <Link to="/about" className="btn-outline">Discover More</Link>
          </div>
          <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
            <img src={promoImage} alt="Wedalla atelier" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subheading">Testimonials</p>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-lg">
                <Quote size={24} className="text-accent mb-4" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-xs uppercase tracking-[0.15em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <p className="section-subheading">Stay Connected</p>
        <h2 className="section-heading mb-4">Join the Wedalla World</h2>
        <p className="font-body text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Subscribe for exclusive access to new collections, styling tips, and member-only offers.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-border bg-background text-foreground font-body text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            required
          />
          <button type="submit" className="btn-primary rounded-sm">Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default Index;
