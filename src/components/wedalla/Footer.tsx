const Footer = () => (
  <footer className="relative py-16 border-t border-border/30">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="font-display text-2xl font-bold text-pink-400 mb-4">Wedalla</p>
      <p className="text-muted-foreground text-sm mb-6">Crafting unforgettable events since 2021</p>
      <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} Wedalla Event Planner. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
