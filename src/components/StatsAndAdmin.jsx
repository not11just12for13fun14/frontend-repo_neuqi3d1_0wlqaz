import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Users, BellRing } from 'lucide-react';

const Stat = ({ label, value, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-xl border border-black/10 bg-white p-5 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="mt-1 text-2xl font-extrabold">{value}</div>
      </div>
      <div className="rounded-lg bg-black/5 p-3"><Icon className="text-black" size={20} /></div>
    </div>
  </motion.div>
);

const StatsAndAdmin = () => {
  return (
    <section className="mt-14">
      <h2 className="mb-4 text-2xl font-bold">Dashboard snapshot</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Revenue (RWF)" value={new Intl.NumberFormat('rw-RW').format(1245000)} icon={Wallet} />
        <Stat label="Orders" value={342} icon={TrendingUp} />
        <Stat label="Active users" value={125} icon={Users} />
        <Stat label="Notifications sent" value={978} icon={BellRing} />
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 p-6 text-white">
        <h3 className="text-lg font-semibold">Admin quick actions</h3>
        <p className="mt-1 text-sm text-white/70">Add new products, manage stock and sizes, and send drop notifications with one click.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100">Add product</button>
          <button className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15">Upload with drag & drop</button>
          <button className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15">Send notification</button>
        </div>
      </div>
    </section>
  );
};

export default StatsAndAdmin;
