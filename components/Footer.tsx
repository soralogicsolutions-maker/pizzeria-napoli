export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-xl px-margin-mobile md:px-margin-desktop xl:px-32 mt-auto border-t border-primary/10">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a className="mb-6 block" href="#">
            <img 
              src="/logo.png" 
              alt="Pizzería Napoli Logo" 
              className="h-20 w-auto object-contain mb-4 drop-shadow-xl contrast-125 brightness-110 opacity-90 hover:opacity-100 transition-opacity"
              style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
            />
          </a>
          <p className="font-label-sm text-on-surface/70">
            © 2026 Pizzería Napoli. Authentic Wood-Fired Heritage.
          </p>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 text-on-surface/80 hover:text-primary transition-colors cursor-default">
            <span className="material-symbols-outlined text-primary text-[28px]">
              location_on
            </span>
            <div className="font-body-md mt-1 md:mt-0">
              <p className="font-semibold text-on-surface mb-1 uppercase tracking-widest text-sm">Ubicación</p>
              <p>Puerta Maraven</p>
              <p>Calle Bachiller Héctor M. Peña</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 text-on-surface/80 hover:text-primary transition-colors cursor-default">
            <span className="material-symbols-outlined text-primary text-[28px]">
              schedule
            </span>
            <div className="font-body-md mt-1 md:mt-0">
              <p className="font-semibold text-on-surface mb-1 uppercase tracking-widest text-sm">Horario</p>
              <p>Todos los días</p>
              <p>12:00 PM - 11:00 PM</p>
            </div>
          </div>

          <a 
            href="https://www.instagram.com/pizzerianapolica91/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-on-surface/80 hover:text-primary transition-colors font-label-md bg-surface-container-high px-5 py-2.5 rounded-full border border-primary/10 hover:border-primary/30 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Síguenos en Instagram
          </a>
        </div>

        {/* Map Section */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[350px] h-[200px] rounded-xl shadow-lg border border-amber-500 overflow-hidden relative group">
            {/* Overlay to prevent interactions if desired, or just let them interact */}
            <iframe 
              src="https://maps.google.com/maps?q=11.6434636,-70.2048069&z=17&output=embed" 
              className="absolute inset-0 w-full h-full transition-all duration-300 opacity-90 group-hover:opacity-100"
              style={{ border: 0, filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(105%)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Pizzería Napoli"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
