
"use client";
import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Mainnet MVP Beta Now Live
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              The <span className="gradient-text">Stablecoin Bridge</span> for Pan-African Payments
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Convert digital assets to local currency instantly. Disbursement to Mobile Money (M-Pesa, MTN, Airtel) and Bank accounts across Africa with zero friction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                Connect Wallet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span className="text-sm font-medium">Audited Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} />
                <span className="text-sm font-medium">Instant Settlements</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} />
                <span className="text-sm font-medium">Multi-Region Support</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 floating">
              <img 
                src="https://picsum.photos/seed/afristable/800/600" 
                alt="App Dashboard" 
                className="rounded-2xl border border-white/10 shadow-2xl shadow-emerald-500/10"
              />
              <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="text-emerald-500" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Last Transaction</div>
                    <div className="text-sm font-bold">1,400 USDC ➔ KES</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
