import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Music, ShoppingBag } from 'lucide-react';

const Hero = ({ onShopClick }) => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-black/80">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/3w7dJ6m3k1dmjhyB/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur"
        >
          <Music size={16} /> Kigali, Rwanda — Zeo Trap • Kavu‑Music
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Kavu‑Music Official Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-balance text-sm text-white/80 sm:text-base"
        >
          Streetwear inspired by Kigali’s rhythm. Signature tees, caps, and limited signed drops by Zeo Trap.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          onClick={onShopClick}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-100"
        >
          <ShoppingBag size={18} /> Shop the collection
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
