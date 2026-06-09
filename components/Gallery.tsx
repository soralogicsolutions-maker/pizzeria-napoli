"use client";

import { useState } from "react";

const images = [
  "/Captura de pantalla 2026-06-08 130453.png",
  "/Captura de pantalla 2026-06-08 130634.png",
  "/Captura de pantalla 2026-06-08 130710.png",
  "/Captura de pantalla 2026-06-08 130734.png",
  "/Captura de pantalla 2026-06-08 131233.png",
  "/image.png",
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <section className="mt-xl pt-16" id="gallery">
      <div className="text-center mb-10">
        <span className="font-label-sm text-primary uppercase tracking-[0.2em] mb-2 block">
          Nuestras Creaciones
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">
          Galería
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((src, index) => (
          <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-primary/5 animate-in fade-in zoom-in-95 duration-500">
            <img 
              src={src} 
              alt={`Plato de Pizzería Napoli ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        ))}
      </div>

      {!showAll && images.length > 3 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md px-10 py-4 rounded-full transition-all border border-primary/20 hover:border-transparent hover:-translate-y-1 shadow-md"
          >
            Ver más imágenes
            <span className="material-symbols-outlined ml-2 text-[20px]">
              expand_more
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
