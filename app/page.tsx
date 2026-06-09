import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Heritage from "@/components/Heritage";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <NavBar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Features />
        
        <Menu />
        
        <div className="w-full px-margin-mobile md:px-margin-desktop xl:px-32 mt-8">
          <Heritage />
        </div>
        <div className="w-full px-margin-mobile md:px-margin-desktop xl:px-32 mt-12 mb-12">
          <Gallery />
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
