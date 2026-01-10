
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bridge', href: '#demo' },
    { name: 'Features', href: '#features' },
    { name: 'MVP Track', href: '#mvp' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-effect border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <span className="text-slate-900 font-black text-2xl tracking-tighter">A</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">AfriStable<span className="text-emerald-500">Bridge</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 transition-all font-semibold text-sm tracking-wide uppercase">
              {link.name}
            </a>
          ))}
          <button className="px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black rounded-xl transition-all flex items-center gap-2 transform active:scale-95 shadow-lg shadow-emerald-500/20">
            Launch App <ArrowUpRight size={18} />
          </button>
        </div>

        <button className="md:hidden text-white p-2 glass-effect rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-slate-950/95 backdrop-blur-2xl z-40 p-10 flex flex-col gap-8 animate-in fade-in slide-in-from-right duration-500">
          <div className="flex justify-end">
             <button onClick={() => setMobileMenuOpen(false)} className="p-3 text-slate-400 hover:text-white"><X size={32}/></button>
          </div>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black text-white border-b border-white/5 pb-6">
              {link.name}
            </a>
          ))}
          <button className="w-full py-5 bg-emerald-500 text-slate-900 font-black rounded-2xl text-xl mt-8 shadow-xl shadow-emerald-500/20">
            Launch Platform
          </button>
        </div>
      )}
    </nav>
  );
};
