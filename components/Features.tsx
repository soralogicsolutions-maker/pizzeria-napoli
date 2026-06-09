import { Leaf, Truck, ChefHat } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-surface-container-lowest border-b border-primary/5 w-full py-12 relative z-10">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center group">
          <div className="bg-surface-container text-primary p-5 rounded-full mb-4 shadow-lg group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 border border-primary/10">
            <Leaf size={32} strokeWidth={2} />
          </div>
          <h3 className="text-on-surface font-headline-md font-medium tracking-wide">
            Ingredientes Frescos
          </h3>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center group">
          <div className="bg-surface-container text-primary p-5 rounded-full mb-4 shadow-lg group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 border border-primary/10">
            <Truck size={32} strokeWidth={2} />
          </div>
          <h3 className="text-on-surface font-headline-md font-medium tracking-wide">
            Envío Rápido
          </h3>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center group">
          <div className="bg-surface-container text-primary p-5 rounded-full mb-4 shadow-lg group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 border border-primary/10">
            <ChefHat size={32} strokeWidth={2} />
          </div>
          <h3 className="text-on-surface font-headline-md font-medium tracking-wide">
            Receta Artesanal
          </h3>
        </div>

      </div>
    </section>
  );
}
