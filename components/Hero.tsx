"use client";

import { useCart } from "./CartContext";

export default function Hero() {
  const { showMenu } = useCart();

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showMenu();
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden shadow-2xl">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYrnyYH5fLd1Q6sH3fwHm1WmLghHTJb4U_IkR049CIFty-dm_UAlxcqfuHAuzWKJmZAey8rcdm5tdB3a3FhxWiqS32mHo-i3B2PjEFYExoit9eYZzvMpekj1gUws8fYFNm29ZGZF1yqJaiUs-irdZ-OD8qGRo1R2Ir1QFdcjzcWAsSloAXMM_8jjyKYwkDHTt6QQqsY2K5iSMHJGqNsaWAPsBLJsT9Fux5MZ8FMH4sZk8ji4GuAiHe1-Wnpn97n1nVAy_nvqr-d6U')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-surface/90"></div>
      <div className="relative z-10 text-center px-6 md:px-12 max-w-[900px] mt-12 md:mt-24">
        <h1 className="font-headline-xl text-[44px] leading-[1.1] sm:text-[56px] lg:text-[72px] text-on-surface mb-6 drop-shadow-2xl font-bold">
          Tradición Italiana en Cada Bocado
        </h1>
        <p className="font-body-lg text-lg sm:text-xl lg:text-2xl text-on-surface/90 mb-10 max-w-[700px] mx-auto drop-shadow-md">
          Nuestra masa fermenta lentamente por 48 horas, cubierta con los ingredientes más frescos y horneada a la perfección en nuestro horno de leña tradicional.
        </p>
        <a
          className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-headline-md px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] cursor-pointer"
          onClick={handleMenuClick}
        >
          Ver Nuestro Menú
        </a>
      </div>
    </header>
  );
}
