import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-marian-hot/30 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-marian-warm/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="w-48 h-48 mx-auto rounded-full p-2 bg-gradient-to-r from-marian-hot via-marian-warm to-marian-yellow shadow-2xl shadow-marian-hot/50">
             <img 
               src="https://picsum.photos/400/400" 
               alt="Marian Zieris" 
               className="w-full h-full rounded-full object-cover border-4 border-slate-900"
             />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
            MARIAN ZIERIS
          </span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 text-xl md:text-2xl font-light text-pink-200 mb-8">
          <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">📍 Svoboda nad Úpou</span>
          <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">🌡️ Velmi Teplý</span>
          <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">🧠 IQ 60 (Optimalizováno)</span>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Unikátní exemplář IT specialisty. Dokáže restartovat router pouhým pohledem (a 10 minutami hledání kabelu). 
          Jeho srdce je stejně horké jako jeho procesor při otevření dvou záložek v Chromu.
        </p>

        <div className="mt-10 animate-bounce">
          <a href="#stats" className="text-marian-yellow text-sm font-bold uppercase tracking-widest opacity-80 hover:opacity-100">
            Prozkoumat Fenomén
            <span className="block text-2xl mt-2">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};