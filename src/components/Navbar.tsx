import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-body tracking-[0.15em] uppercase">
        Free shipping on orders over $250
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="nav-link">Women</Link>
            <Link to="/shop" className="nav-link">Men</Link>
            <Link to="/shop" className="nav-link">New Arrivals</Link>
          </div>

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl md:text-3xl tracking-[0.1em] font-semibold text-foreground">
            WEDALLA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-foreground transition-opacity hover:opacity-60" aria-label="Search">
              <Search size={18} />
            </button>
            <Link to="/about" className="hidden md:block text-foreground transition-opacity hover:opacity-60" aria-label="Account">
              <User size={18} />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-foreground transition-opacity hover:opacity-60"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-slow">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="block nav-link py-2">Women</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="block nav-link py-2">Men</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="block nav-link py-2">New Arrivals</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block nav-link py-2">About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block nav-link py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
