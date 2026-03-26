import React, { useState } from 'react';
import nordockMap from '../../media/Nordock.jpg';

export const Header: React.FC = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
            Terra RP
          </h1>
          <nav>
            <ul className="flex gap-4 sm:gap-6">
              <li>
                <a
                  href="https://discord.gg/uN9rG9fC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium"
                >
                  Discord
                </a>
              </li>
              <li>
                <button
                  onClick={() => setMapOpen(true)}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium"
                >
                  Mapa
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium">
                  Regras
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {mapOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setMapOpen(false)}
        >
          <div
            className="relative max-w-5xl w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMapOpen(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white text-lg flex items-center justify-center transition-colors"
            >
              X
            </button>
            <img
              src={nordockMap}
              alt="Mapa de Nordock"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
