import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Palette, MapPin, Phone } from 'lucide-react';

const products = [
  {
    id: 'tee-nyamirambo',
    title: '"Visit Nyamirambo" Tee',
    desc: 'Front: "Visit Nyamirambo" • Sleeve: "Kavu‑Music"',
    price: 18000,
    colors: ['black', 'white', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'cap-kavu',
    title: 'Kavu‑Music Cap',
    desc: 'Embroidered front: "Kavu‑Music"',
    price: 15000,
    colors: ['black', 'navy', 'khaki'],
    sizes: ['One Size'],
    img: 'https://images.unsplash.com/photo-1548883354-7622d3dfd2ea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'tee-signed',
    title: 'Signed Zeo Trap Tee',
    desc: 'Limited run — hand‑signed by Zeo Trap',
    price: 40000,
    colors: ['black', 'white'],
    sizes: ['M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1600&auto=format&fit=crop',
  },
];

const formatRwf = (v) => new Intl.NumberFormat('rw-RW', { style: 'currency', currency: 'RWF', maximumFractionDigits: 0 }).format(v);

const ProductCard = ({ p, onSelect }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">Kigali</div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500">{p.desc}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold">{formatRwf(p.price)}</span>
          <button onClick={() => onSelect(p)} className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-900">
            <ShoppingCart size={16} /> Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CheckoutSheet = ({ open, onClose, product }) => {
  const [color, setColor] = useState(product?.colors?.[0] || '');
  const [size, setSize] = useState(product?.sizes?.[0] || '');
  const [location, setLocation] = useState('Kigali — Rwanda');
  const [phone, setPhone] = useState('');

  if (!open || !product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <img src={product.img} alt={product.title} className="h-16 w-16 rounded-lg object-cover" />
            <div>
              <div className="font-semibold leading-tight">{product.title}</div>
              <div className="text-sm text-gray-500">{product.desc}</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Color</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-9 rounded-full border px-4 text-xs font-medium capitalize ${color === c ? 'border-black bg-black text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <Palette className="mr-1 inline" size={14} /> {c}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-9 rounded-full border px-4 text-xs font-medium ${size === s ? 'border-black bg-black text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-1 text-sm sm:col-span-2">
              <span className="font-medium">Delivery location</span>
              <div className="flex items-center gap-2 rounded-lg border px-3">
                <MapPin size={16} className="text-gray-500" />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-10 w-full bg-transparent text-sm outline-none"
                  placeholder="Sector, District — Kigali, Rwanda"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1 text-sm sm:col-span-2">
              <span className="font-medium">Phone number (primary or secondary)</span>
              <div className="flex items-center gap-2 rounded-lg border px-3">
                <Phone size={16} className="text-gray-500" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-10 w-full bg-transparent text-sm outline-none"
                  placeholder="07xx xxx xxx"
                />
              </div>
            </label>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-lg font-bold">{formatRwf(product.price)}</div>
          </div>

          <div className="mt-4 flex gap-3">
            <button onClick={onClose} className="h-10 flex-1 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50">Cancel</button>
            <button
              onClick={() => {
                // Simulate request accepted -> show countdown suggestion
                alert(`Order placed! Seller will review and set delivery countdown (2-3 days in Kigali).\nColor: ${color}, Size: ${size}, Location: ${location}, Phone: ${phone}`);
                onClose();
              }}
              className="h-10 flex-1 rounded-lg bg-black text-sm font-semibold text-white hover:bg-gray-900"
            >
              Confirm order
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProductGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="shop" className="mt-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold">Featured products</h2>
          <p className="text-sm text-gray-500">Caps, signature tees, and signed editions.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onSelect={(p) => setSelected(p)} />
        ))}
      </div>

      <CheckoutSheet open={!!selected} onClose={() => setSelected(null)} product={selected} />
    </section>
  );
};

export default ProductGrid;
