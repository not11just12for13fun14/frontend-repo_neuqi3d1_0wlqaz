import React, { useRef } from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import StatsAndAdmin from './components/StatsAndAdmin';
import Footer from './components/Footer';

function App() {
  const shopRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black" />
            <div className="text-lg font-extrabold">Kavu‑Music</div>
          </div>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#shop" className="text-gray-700 hover:text-black">Shop</a>
            <a href="#dashboard" className="text-gray-700 hover:text-black">Dashboard</a>
            <a href="#about" className="text-gray-700 hover:text-black">About</a>
          </nav>
          <button className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50">Sign in</button>
        </header>

        <Hero onShopClick={scrollToShop} />

        <div ref={shopRef} />
        <ProductGrid />

        <div id="dashboard">
          <StatsAndAdmin />
        </div>

        <section id="about" className="mt-16 rounded-2xl border border-black/10 bg-white p-8">
          <h2 className="text-2xl font-bold">About Zeo Trap & Kavu‑Music</h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            Based in Kigali’s vibrant streets, Kavu‑Music blends music culture with minimal streetwear. The \"Visit Nyamirambo\" tee and signature caps
            celebrate the city while staying wearable every day. Expect smooth animations, limited signed drops, and fast delivery in Kigali once your order is accepted.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
