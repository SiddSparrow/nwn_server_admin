import React from 'react';

const navItems = ['Inicio', 'Personagens', 'Regras', 'Mapa', 'Contato'];

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Terra RP
        </h1>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
