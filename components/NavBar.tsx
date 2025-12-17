import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-marian-hot to-marian-warm animate-pulse flex items-center justify-center font-bold text-white">
              M
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-marian-hot to-marian-yellow">
              MARIAN.JS
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">O mně</a>
              <a href="#stats" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Statistiky</a>
              <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Schopnosti</a>
              <a href="#chat" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-marian-hot/50">
                Pokecat s Marianem
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};