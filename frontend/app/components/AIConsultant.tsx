
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm the AfriStable Bridge assistant. How can I help you understand how our stablecoin-to-fiat bridge works?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

//     try {
//       // Correct implementation: Initialize inside the handler to ensure the latest API key is used
//       const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
//       const response = await ai.models.generateContent({
//         model: 'gemini-3-flash-preview',
//         contents: userMsg,
//         config: {
//           systemInstruction: `You are a helpful assistant for "AfriStable Bridge", a stablecoin-to-fiat payment bridge for Africa. 
//           Core Concept: Convert stablecoins (USDC/USDT) to mobile money (M-Pesa, MTN, Airtel) or Bank accounts.
//           Target Audience: Developers and users interested in pan-African payments.
//           Tone: Professional, knowledgeable, and tech-forward. 
//           Keep answers concise and relevant to the bridge. Mention that it's currently an MVP for the Payments and Stablecoins track.`,
//         }
//       });

//       // The .text property is a getter that returns the extracted string output.
//       const botText = response.text || "I'm sorry, I couldn't process that. Please try again later.";
//       setMessages(prev => [...prev, { role: 'bot', text: botText }]);
//     } catch (error) {
//       console.error("AI Error:", error);
//       setMessages(prev => [...prev, { role: 'bot', text: "There was an error connecting to my AI core. Please check your connectivity." }]);
//     } finally {
//       setIsLoading(false);
//     }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] glass-effect rounded-3xl border border-emerald-500/30 flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-emerald-500/10 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <Bot size={18} className="text-slate-900" />
              </div>
              <div>
                <div className="font-bold text-sm">Bridge Assistant</div>
                <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Powered by Gemini</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-500 text-slate-900 font-medium rounded-tr-none shadow-lg shadow-emerald-500/10' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 border border-white/5">
                  <Loader2 size={16} className="animate-spin text-emerald-400" />
                  <span className="text-xs text-slate-400 italic">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-slate-900/40">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about fees, speed..."
                className="flex-1 bg-slate-950 text-white border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-600"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-900 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <MessageSquare size={24} className="text-slate-900" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></span>
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white shadow-2xl">
            Have a question? Ask our AI
          </div>
        </button>
      )}
    </div>
  );
};
