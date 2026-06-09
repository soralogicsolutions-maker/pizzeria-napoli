"use client";

import { useCart } from "./CartContext";

export default function NavBar() {
  const { cart, toggleCart, showMenu } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showMenu();
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="bg-surface-container-lowest/80 backdrop-blur-md border-b border-primary/10 shadow-sm w-full top-0 sticky z-40 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop xl:px-32 py-4">
        <a
          className="flex items-center"
          href="#"
        >
          <img 
            src="/logo.png" 
            alt="Pizzería Napoli Logo" 
            className="h-[60px] w-auto object-contain drop-shadow-md contrast-125 brightness-110"
            style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
          />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="relative font-label-md text-primary cursor-pointer group px-1"
            onClick={handleMenuClick}
          >
            Menú
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left scale-x-100"></span>
          </a>
          <a
            className="relative font-label-md text-on-surface/80 hover:text-primary transition-colors group px-1"
            href="#about"
          >
            Nosotros
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a
            className="flex items-center gap-2 font-label-md text-on-surface bg-surface-container-high hover:bg-primary hover:text-on-primary px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
            href="https://wa.me/584122837825"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            WhatsApp
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Open Cart"
            className="relative p-2 text-on-surface bg-surface-container hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-full group"
            onClick={toggleCart}
          >
            <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform duration-300">
              shopping_cart
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary font-label-sm text-[11px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-full transform transition-all duration-300 scale-100 animate-in zoom-in">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
