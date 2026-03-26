import { useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type SortOption = "newest" | "price-asc" | "price-desc" | "popular";

const Shop = () => {
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = category === "all" ? [...products] : products.filter((p) => p.category === category);
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "popular": result.sort((a, b) => b.reviews - a.reviews); break;
      default: result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return result;
  }, [category, sort]);

  const categories = [
    { value: "all", label: "All" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
    { value: "accessories", label: "Accessories" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="section-subheading">Browse</p>
        <h1 className="section-heading">The Collection</h1>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 nav-link"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <div className="hidden md:flex items-center gap-4">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`nav-link pb-1 ${category === c.value ? "border-b border-foreground opacity-100" : ""}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-body">{filtered.length} items</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-xs font-body uppercase tracking-[0.1em] bg-transparent border border-border px-3 py-2 rounded-sm focus:outline-none text-foreground"
          >
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low–High</option>
            <option value="price-desc">Price: High–Low</option>
          </select>
        </div>
      </div>

      {/* Mobile filters */}
      {showFilters && (
        <div className="md:hidden mb-6 pb-6 border-b border-border animate-fade-in-slow">
          <div className="flex items-center justify-between mb-4">
            <span className="font-body text-xs uppercase tracking-[0.2em]">Category</span>
            <button onClick={() => setShowFilters(false)}><X size={16} /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => { setCategory(c.value); setShowFilters(false); }}
                className={`px-4 py-2 text-xs font-body uppercase tracking-[0.1em] border rounded-sm transition-colors ${
                  category === c.value ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-secondary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
