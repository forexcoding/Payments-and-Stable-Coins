
"use client";
import React, { useState } from 'react';
import { RefreshCw, ArrowDown, Wallet, Phone, Send } from 'lucide-react';

const CURRENCIES = [
  { code: 'USDC', name: 'USD Coin', icon: '💎', rate: 1 },
  { code: 'USDT', name: 'Tether', icon: '🟢', rate: 0.999 },
];

const FIAT_WALLETS = [
  { code: 'KES', name: 'Kenya (M-Pesa)', flag: '🇰🇪', rate: 128.5 },
  { code: 'NGN', name: 'Nigeria (Bank Transfer)', flag: '🇳🇬', rate: 1450.0 },
  { code: 'GHS', name: 'Ghana (MTN)', flag: '🇬🇭', rate: 14.2 },
];

export const BridgeDemo: React.FC = () => {
  const [fromAmount, setFromAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState(CURRENCIES[0]);
  const [toCurrency, setToCurrency] = useState(FIAT_WALLETS[0]);

  const calculateTotal = () => {
    const amount = parseFloat(fromAmount) || 0;
    return (amount * toCurrency.rate).toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  return (
    <div className="glass-effect rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <RefreshCw size={18} className="text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block">You Pay (Stablecoin)</label>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 focus-within:border-emerald-500/50 transition-colors">
            <input 
              type="number" 
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent text-white text-2xl font-bold flex-1 outline-none" 
              placeholder="0.00"
            />
            <select 
              className="bg-slate-800 text-white border-none outline-none rounded-lg px-3 py-2 text-sm font-bold"
              onChange={(e) => setFromCurrency(CURRENCIES.find(c => c.code === e.target.value)!)}
            >
              {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.icon} {c.code}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-center -my-3 relative z-10">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-950 shadow-lg">
            <ArrowDown size={20} className="text-slate-950" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block">Recipient Receives (Fiat)</label>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4">
            <div className="text-2xl font-bold flex-1 text-emerald-400">{calculateTotal()}</div>
            <select 
              className="bg-slate-800 text-white border-none outline-none rounded-lg px-3 py-2 text-sm font-bold"
              onChange={(e) => setToCurrency(FIAT_WALLETS.find(c => c.code === e.target.value)!)}
            >
              {FIAT_WALLETS.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Exchange Rate</span>
            <span>1 {fromCurrency.code} ≈ {toCurrency.rate} {toCurrency.code}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Network Fee</span>
            <span className="text-emerald-400">Free (MVP)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Estimated Delivery</span>
            <span>Under 2 minutes</span>
          </div>
        </div>

        <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 mt-4">
          <Send size={20} /> Bridge to {toCurrency.name}
        </button>
        
        <p className="text-center text-xs text-slate-500 mt-4">
          AfriStable Bridge uses liquidity pools to ensure instant settlement. <br/>
          By using this service, you agree to our terms.
        </p>
      </div>
    </div>
  );
};
