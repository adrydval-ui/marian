import React from 'react';

const StatCard: React.FC<{ title: string; value: string; description: string; gradient: string }> = ({ title, value, description, gradient }) => (
  <div className="bg-slate-800/50 backdrop-blur border border-white/5 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">{title}</h3>
    <div className={`text-5xl font-black mb-4 bg-clip-text text-transparent ${gradient}`}>
      {value}
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Technické Specifikace</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            title="Výpočetní Výkon"
            value="60 IQ"
            description="Úsporný režim. Méně myšlení znamená více prostoru pro lásku a teplo. Ideální pro nákup kryptoměn na vrcholu."
            gradient="bg-gradient-to-r from-blue-400 to-green-400"
          />
          <StatCard 
            title="Provozní Teplota"
            value="350°C"
            description="Marian je extrémně teplý člověk. Nejen charakterově. V zimě slouží jako radiátor pro celou kancelář ve Svobodě."
            gradient="bg-gradient-to-r from-marian-yellow via-marian-warm to-marian-hot"
          />
          <StatCard 
            title="Lokalita"
            value="Svoboda n. Ú."
            description="Perla Krkonoš. Místo, kde signál WiFi chodí pěšky a Marian je místní digitální šaman."
            gradient="bg-gradient-to-r from-purple-400 to-pink-400"
          />
        </div>

        {/* Visual Gauge for IQ vs Warmth */}
        <div className="mt-20 p-8 bg-black/20 rounded-3xl border border-white/5">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between mb-2 text-sm font-medium text-gray-400">
                <span>Intelekt (CPU)</span>
                <span>30% Usage</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div className="bg-blue-500 h-4 rounded-full w-[30%]" style={{boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2 text-sm font-medium text-gray-400">
                <span>Vřelost (GPU - Gay Processing Unit)</span>
                <span>OVERLOAD</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse w-full h-4 rounded-full" style={{boxShadow: '0 0 20px rgba(255, 0, 0, 0.6)'}}></div>
              </div>
              <p className="text-xs text-red-400 mt-1 font-mono">⚠️ WARNING: Critical Temperature Levels Detected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};