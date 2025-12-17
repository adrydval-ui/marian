import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { ChatBot } from './components/ChatBot';

const Footer: React.FC = () => (
  <footer className="bg-black py-8 text-center border-t border-white/10">
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Marian Zieris. Vyrobeno s ❤️ a IQ 60 ve Svobodě nad Úpou.
    </p>
    <p className="text-xs text-gray-700 mt-2">
      Tato stránka je satira. Marian je (asi) ve skutečnosti chytrý.
    </p>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-marian-hot selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}

export default App;