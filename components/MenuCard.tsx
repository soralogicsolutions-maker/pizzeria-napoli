"use client";

import { useCart } from "./CartContext";
import { useState } from "react";

interface MenuCardProps {
  name: string;
  price: number;
  description?: string;
  image?: string;
  tags?: { label: string; icon?: string }[];
}

export default function MenuCard({
  name,
  price,
  description,
  image,
  tags = [],
}: MenuCardProps) {
  const { addToCart, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(name, price);
    setAdded(true);
    // Only auto-open the cart on larger screens to avoid interrupting mobile browsing
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      openCart();
    }
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="bg-surface-container-low rounded-xl overflow-hidden shadow-lg shadow-black/40 border border-primary/5 transition-transform hover:-translate-y-2 group flex flex-col h-full">
      {image && (
        <div className="h-48 sm:h-64 w-full bg-surface-container-high relative overflow-hidden shrink-0">
          <img
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={image}
          />
          {/* Subtle inner shadow for depth over the image */}
          <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(19,19,19,0.8)] pointer-events-none"></div>
        </div>
      )}
      
      <div className={`p-6 relative flex flex-col flex-1 ${!image ? 'border-t-2 border-primary/20' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-md text-on-surface">{name}</h3>
          <span className="font-label-md text-primary mt-1 whitespace-nowrap ml-4">${price.toFixed(2)}</span>
        </div>
        
        {description && (
          <p className="font-body-md text-on-surface/70 mb-6 flex-1">{description}</p>
        )}
        {!description && <div className="flex-1 mb-6"></div>}

        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-full border border-outline text-on-surface-variant font-label-sm text-[10px] uppercase flex items-center gap-1"
              >
                {tag.icon && <span className="material-symbols-outlined text-[12px]">{tag.icon}</span>}
                {tag.label}
              </span>
            ))}
          </div>
          <button
            onClick={handleAdd}
            className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface ${
              added ? "bg-primary text-on-primary scale-110" : "bg-secondary-container text-on-secondary-container hover:scale-110"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {added ? "check" : "add"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
