
"use client";
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">AfriStable<span className="text-emerald-500">Bridge</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Enabling the next billion people to access the digital economy through seamless stablecoin-to-fiat rails.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-500 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Brand Assets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2024 AfriStable Bridge. Built for the Payments & Stablecoins Track.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};
