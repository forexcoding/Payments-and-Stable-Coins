
"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: "How fast is a conversion?",
    a: "Most transactions are processed and available in the recipient's mobile money or bank account within 2-5 minutes of on-chain confirmation."
  },
  {
    q: "Which countries are supported?",
    a: "Currently, we support Kenya, Nigeria, Ghana, Rwanda, and Uganda. We are expanding to South Africa and Ivory Coast in Q3."
  },
  {
    q: "What stablecoins can I use?",
    a: "Our MVP supports USDC and USDT on Ethereum Mainnet, Polygon, and Base. More chains and assets are coming soon."
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Our pricing is transparent. We charge a flat fee of 0.5% during the MVP phase, and the exact fiat amount is shown before you confirm the bridge."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden glass-effect">
              <button 
                className="w-full p-6 flex items-center justify-between text-left font-bold text-lg hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                {openIndex === idx ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 animate-in slide-in-from-top-4 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
