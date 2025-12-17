import React, { useState, useRef, useEffect } from 'react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from "@google/genai";

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ahojky zlatíčko! 🌈 Tady Marian ze Svobody! ❤️ Potřebuješ pohladit počítač nebo poradit s něčím složitým? (Ale ne moc složitým, hihi 🤭)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session on mount
  useEffect(() => {
    try {
      chatSession.current = createChatSession();
    } catch (e) {
      console.error("Failed to init chat", e);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    if (!chatSession.current) {
        setMessages(prev => [...prev, {role: 'model', text: 'Jejda, broučku, nemám API klíč! 😱 Musíš ho nastavit, abych mohl mluvit!', isError: true}]);
        return;
    }

    const userMsg = input;
    setInput('');
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    try {
      const result = await sendMessageStream(chatSession.current, userMsg);
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]); // Placeholder

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullResponse += textChunk;
        
        // Update the last message with the accumulating text
        setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = { role: 'model', text: fullResponse };
          return newHistory;
        });
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Jejda, spadl mi systém! Asi se mi přehřály obvody z té lásky... 🔥', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">MarianGPT v0.69</h2>
          <p className="text-gray-400">Umělá inteligence s duší Mariana. IQ limitováno na 60 pro maximální roztomilost.</p>
        </div>

        <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-marian-hot p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl border-2 border-pink-300">
               🦄
             </div>
             <div>
               <h3 className="font-bold text-white">Marian AI Support</h3>
               <span className="text-xs text-pink-100 flex items-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                 Online (Svoboda n. Ú.)
               </span>
             </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : msg.isError 
                        ? 'bg-red-500/20 text-red-200 border border-red-500' 
                        : 'bg-slate-700 text-pink-200 rounded-bl-none border border-pink-500/20'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 px-5 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Napiš Marianovi..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-marian-hot focus:ring-1 focus:ring-marian-hot transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-marian-hot hover:bg-pink-600 disabled:opacity-50 text-white font-bold p-3 rounded-xl transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Marian AI může halucinovat. Neberte jeho rady vážně, hlavně ne ty o formátování disku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};