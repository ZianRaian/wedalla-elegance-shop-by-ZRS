import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl tracking-[0.1em] mb-4">WEDALLA</h3>
          <p className="text-sm opacity-70 leading-relaxed font-body">
            Timeless elegance meets modern design. Crafted for those who appreciate the finer things.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Women</Link></li>
            <li><Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Men</Link></li>
            <li><Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Accessories</Link></li>
            <li><Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">About Us</Link></li>
            <li><Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Contact</Link></li>
            <li><span className="text-sm opacity-70 font-body">Careers</span></li>
            <li><span className="text-sm opacity-70 font-body">Sustainability</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li><span className="text-sm opacity-70 font-body">Instagram</span></li>
            <li><span className="text-sm opacity-70 font-body">Pinterest</span></li>
            <li><span className="text-sm opacity-70 font-body">Facebook</span></li>
            <li><span className="text-sm opacity-70 font-body">TikTok</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
        <p className="text-xs opacity-50 font-body tracking-wider">
          © 2026 Wedalla Fashion. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
