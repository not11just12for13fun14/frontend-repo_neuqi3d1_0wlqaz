import React from 'react';
import { Instagram, Twitter, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl border border-black/10 bg-white p-6 text-sm text-gray-600">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-gray-800">
          <Music2 size={18} />
          <span className="font-semibold">Kavu‑Music</span>
          <span className="hidden sm:inline">• Kigali, Rwanda</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#">Privacy</a>
          <a className="hover:text-gray-900" href="#">Terms</a>
          <a className="hover:text-gray-900" href="#">Support</a>
          <a className="hover:text-gray-900" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          <a className="hover:text-gray-900" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} Zeo Trap — All rights reserved. Built with love for Kigali. Ima Gahire Abdillillah.</div>
    </footer>
  );
};

export default Footer;
