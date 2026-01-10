
"use client";
import React from 'react';
import { Zap, Shield, Smartphone, Globe, Layers, BarChart3 } from 'lucide-react';

const FEATURES = [
  {
    title: 'Instant Settlement',
    desc: 'No more waiting 3-5 business days. Our bridge settles transactions in under 2 minutes.',
    icon: <Zap className="text-emerald-400" size={24} />
  },
  {
    title: 'Mobile-Money Ready',
    desc: 'Direct integration with M-Pesa, MTN, Airtel, and Orange Money across 15+ countries.',
    icon: <Smartphone className="text-emerald-400" size={24} />
  },
  {
    title: 'Bank-Grade Security',
    desc: 'Multi-sig custodial wallets and audited smart contracts ensure your funds are always safe.',
    icon: <Shield className="text-emerald-400" size={24} />
  },
  {
    title: 'Low Slippage',
    desc: 'Our deep liquidity pools across major African corridors ensure you get the best market rates.',
    icon: <BarChart3 className="text-emerald-400" size={24} />
  },
  {
    title: 'API First',
    desc: 'Easily integrate our bridge into your own dApps or fintech apps with our robust SDK.',
    icon: <Layers className="text-emerald-400" size={24} />
  },
  {
    title: 'Compliant & Transparent',
    desc: 'Full on-chain transparency with localized compliance checks for seamless operation.',
    icon: <Globe className="text-emerald-400" size={24} />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Impact</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to move value from the digital realm to the hands of people across the continent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-slate-900/20 hover:border-emerald-500/30 transition-all hover:translate-y-[-4px] group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
