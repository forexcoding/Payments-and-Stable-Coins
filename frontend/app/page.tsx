
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BridgeDemo } from './components/BridgeDemo';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-emerald-500/30">
      {/* Background Ambient Effects - Common in Next.js Landing Pages */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="demo" className="py-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 block">Interactive Demo</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">Experience the Bridge</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Instant, transparent, and secure conversion from crypto to mobile money using deep liquidity pools.</p>
            </div>
            <BridgeDemo />
          </div>
        </section>

        <Features />
        
        <section id="mvp" className="py-32 container mx-auto px-6">
          <div className="glass-effect rounded-[2.5rem] p-8 md:p-20 border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-8 border border-emerald-500/20 uppercase tracking-widest">
                Payments & Stablecoins Track MVP
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">Solving Africa's <br/><span className="gradient-text">Liquidity Gap</span></h2>
              <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
                Traditional cross-border payments to Africa are slow and expensive. 
                AfriStable Bridge leverages the efficiency of stablecoins like USDC and USDT 
                to provide near-instant settlement into popular wallets like M-Pesa, MTN, and Zenith Bank.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-10 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                  Read Whitepaper
                </button>
                <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all hover:border-slate-700">
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
