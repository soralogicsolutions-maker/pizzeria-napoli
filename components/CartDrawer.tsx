"use client";

import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, closeCart } = useCart();
  
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const waNumber = "584122837825"; // Real WhatsApp number
  const [isDelivery, setIsDelivery] = useState(false);

  // Prevent overlap by pushing the body content
  useEffect(() => {
    const applyPadding = () => {
      if (isCartOpen && window.innerWidth >= 640) { // sm breakpoint
        document.body.style.paddingRight = "400px";
        document.body.style.transition = "padding-right 0.3s ease-in-out";
      } else {
        document.body.style.paddingRight = "0px";
      }
    };

    applyPadding();
    window.addEventListener("resize", applyPadding);

    return () => {
      document.body.style.paddingRight = "0px";
      window.removeEventListener("resize", applyPadding);
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    if (cart.length > 0) {
      let message = `Hola *Pizzería Napoli*! 🍕 Me gustaría realizar el siguiente pedido para *${isDelivery ? "Delivery 🛵" : "Retiro en local 🚶"}*:\n\n`;
      cart.forEach((item) => {
        message += `🔸 ${item.quantity}x ${item.name} ($${(
          item.price * item.quantity
        ).toFixed(2)})\n`;
      });
      message += `\n💵 *Total a pagar: $${totalCost.toFixed(2)}*\n\n`;
      message += "Quedo atento a las indicaciones de pago y envío. ¡Gracias!";

      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, "_blank");
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface-container-low border-l border-primary/20 shadow-2xl z-50 flex flex-col transform transition-transform animate-in slide-in-from-right">
        {/* Header */}
        <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center bg-transparent">
          <h2 className="font-headline-md text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              shopping_cart
            </span>
            Tu Pedido
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-on-surface/70 hover:bg-primary/10 hover:text-primary rounded-full transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 relative">
          {cart.length === 0 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-on-surface/70">
              <span className="material-symbols-outlined text-[48px] opacity-20 mb-4">
                local_pizza
              </span>
              <p className="font-body-md text-on-surface">
                Tu carrito está vacío.
              </p>
              <p className="font-label-sm mt-2 opacity-70">
                Agrega algunas deliciosas pizzas para comenzar.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-surface-container p-3 rounded-lg border border-primary/10 shadow-sm"
                >
                  <div className="flex-1">
                    <h4 className="font-label-md text-on-surface">
                      {item.name}
                    </h4>
                    <div className="text-on-surface/70 font-body-md text-sm mt-1">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-primary font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-on-surface/50 hover:text-error transition-colors p-1 rounded-full hover:bg-error/10 focus:outline-none"
                      aria-label="Eliminar"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Checkout Footer */}
        <div className="border-t border-primary/10 bg-surface-container-low p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          
          {/* Delivery Toggle */}
          <div className="flex items-center justify-between mb-4 bg-surface-container p-1 rounded-lg border border-primary/10">
            <button
              onClick={() => setIsDelivery(false)}
              className={`flex-1 py-2 font-label-md rounded-md transition-all ${
                !isDelivery
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface/70 hover:text-primary"
              }`}
            >
              Retiro en local
            </button>
            <button
              onClick={() => setIsDelivery(true)}
              className={`flex-1 py-2 font-label-md rounded-md transition-all ${
                isDelivery
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface/70 hover:text-primary"
              }`}
            >
              Delivery
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="font-body-lg text-on-surface/80">Total</span>
            <span className="font-headline-md text-primary">
              ${totalCost.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full bg-secondary hover:bg-secondary-container disabled:bg-surface-variant disabled:text-on-surface/50 disabled:cursor-not-allowed text-on-secondary font-label-md py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
