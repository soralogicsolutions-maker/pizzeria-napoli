export default function Heritage() {
  return (
    <section id="about" className="scroll-mt-32 pt-4 border-t border-primary/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] mb-2 block">
            Nuestra Herencia
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-6">
            El Arte de la Verdadera Pizza Napolitana
          </h2>
          <p className="font-body-md text-on-surface/80 mb-4">
            En Pizzería Napoli, no hacemos atajos. Nuestra masa se prepara
            diariamente utilizando solo harina Caputo 00 importada, agua purificada,
            sal marina y levadura fresca.
          </p>
          <p className="font-body-md text-on-surface/80 mb-8">
            Cada pizza se hornea a 450°C durante exactamente 90 segundos en
            nuestro horno de piedra artesanal, resultando en ese característico
            borde inflado y centro tierno.
          </p>
          <a
            className="inline-flex items-center font-label-md text-primary hover:opacity-80 transition-opacity group"
            href="#about"
          >
            Descubre nuestra historia
            <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative z-10">
            <img
              alt="Pizza artesanal tradicional"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVD7nFAtmr3pksto7bdgwJCeY-CKPr7sbY8sIDfd2_8vZYwlbCPRTQ6JKIgeqOhFTZORdNW1XqebeXHdHEoXMXfSLwpCnB3hkznGWNiA99p4487MKGfXh8TB6gy36EMNxOA6YPcNUrINi2EdjKPG0mP3OSjQpLLWGYTPNlYa3G6JWOwIVf8_vqmKYH34rbk6E_Ytr967PBpMQ0rNQ-ukY3OMJmxKOIX2OCJoZ488g0JXhxiMZqHUnlHI-gVfkv2mtNZ1wRPCYKsqw"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
