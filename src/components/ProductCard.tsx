import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="product-card block">
    <div className="product-card-image aspect-[3/4] relative rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        loading="lazy"
        width={800}
        height={1000}
      />
      <button
        onClick={(e) => { e.preventDefault(); }}
        className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground hover:text-accent"
        aria-label="Add to wishlist"
      >
        <Heart size={14} />
      </button>
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] font-body uppercase tracking-[0.15em] px-3 py-1 rounded-sm">
          New
        </span>
      )}
      {product.originalPrice && (
        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-body uppercase tracking-[0.15em] px-3 py-1 rounded-sm">
          Sale
        </span>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="font-heading text-base tracking-wide">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="font-body text-sm">${product.price}</span>
        {product.originalPrice && (
          <span className="font-body text-sm text-muted-foreground line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
