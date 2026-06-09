"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
  note?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (name: string, price: number) => void;
  removeFromCart: (index: number) => void;
  updateCartItemNote: (index: number, note: string) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  isMenuVisible: boolean;
  showMenu: () => void;
  hideMenu: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showMenu = () => setIsMenuVisible(true);
  const hideMenu = () => setIsMenuVisible(false);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCartItemNote = (index: number, note: string) => {
    setCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, note } : item))
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItemNote, isCartOpen, toggleCart, openCart, closeCart, isMenuVisible, showMenu, hideMenu }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
