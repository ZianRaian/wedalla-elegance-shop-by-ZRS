import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-xl tracking-wide">Shopping Bag</h2>
          <button onClick={() => setIsOpen(false)} className="text-foreground hover:opacity-60 transition-opacity">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingBag size={48} className="mb-4 opacity-30" />
            <p className="font-body text-sm">Your bag is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-secondary rounded-sm"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="font-heading text-sm">{item.product.name}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-1">Size: {item.size}</p>
                    <p className="text-sm font-body mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-foreground hover:opacity-60">
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-body">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-foreground hover:opacity-60">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground transition-colors self-start">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between font-body text-sm">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full text-center">Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
