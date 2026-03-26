import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="section-heading mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) addItem(product, selectedSize);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 nav-link mb-8">
        <ArrowLeft size={14} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Image */}
        <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={800} height={1000} />
        </div>

        {/* Details */}
        <div className="py-4">
          <p className="section-subheading">{product.category}</p>
          <h1 className="font-heading text-3xl md:text-4xl tracking-wide mb-3">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"} />
              ))}
            </div>
            <span className="font-body text-xs text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="font-heading text-2xl">${product.price}</span>
            {product.originalPrice && (
              <span className="font-body text-lg text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Size selector */}
          <div className="mb-6">
            <p className="font-body text-xs uppercase tracking-[0.2em] mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`min-w-[48px] px-4 py-2.5 text-xs font-body border rounded-sm transition-colors ${
                    selectedSize === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] mb-3">Colors: {product.colors.join(", ")}</p>
          </div>

          {/* Quantity & Add to cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-border rounded-sm">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 text-foreground hover:bg-secondary transition-colors">
                <Minus size={14} />
              </button>
              <span className="px-4 font-body text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 text-foreground hover:bg-secondary transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="btn-primary flex-1 text-center disabled:opacity-40 disabled:cursor-not-allowed rounded-sm"
            >
              {selectedSize ? "Add to Bag" : "Select a Size"}
            </button>
          </div>

          {/* Details accordion-like */}
          <div className="border-t border-border pt-6 space-y-4">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] mb-2">Details</p>
              <ul className="font-body text-sm text-muted-foreground space-y-1">
                <li>Premium quality materials</li>
                <li>Designed in our London atelier</li>
                <li>Ethically manufactured</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="section-heading text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
