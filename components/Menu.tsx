"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import { menuCategories } from "../data/menuData";
import { useCart } from "./CartContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const { isMenuVisible, hideMenu } = useCart();

  const currentCategory = menuCategories.find(c => c.id === activeCategory);

  if (!isMenuVisible) return null;

  const handleHideMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      hideMenu();
    }, 400); // Wait for the smooth scroll to finish before removing from DOM
  };

  return (
    <div className="w-full px-margin-mobile md:px-margin-desktop xl:px-32 mt-12 mb-12">
      <section className="scroll-mt-32 animate-in fade-in zoom-in-95 duration-700" id="menu">
        <div className="text-center mb-10">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] mb-2 block">
          Cucina Autentica
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">
          Nuestro Menú
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap mb-12 gap-3 justify-center w-full">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`whitespace-nowrap px-6 py-3 rounded-full font-label-md transition-all snap-start ${
              activeCategory === category.id
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "bg-surface-container-high text-on-surface hover:bg-surface-variant hover:text-primary"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeCategory}>
        {currentCategory?.items.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>

      {/* Ocultar Menú */}
      <div className="mt-16 text-center">
        <button
          onClick={handleHideMenu}
          className="inline-flex items-center gap-2 font-label-md text-on-surface/70 hover:text-primary transition-colors px-6 py-3 rounded-full hover:bg-surface-container-high"
        >
          <span className="material-symbols-outlined text-[20px]">
            visibility_off
          </span>
          Ocultar menú
        </button>
      </div>
      </section>
    </div>
  );
}

