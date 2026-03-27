import React from 'react';
import { Page } from '../../types';

interface RegrasProps {
  onNavigate: (page: Page) => void;
}

const modificacoes: { label: string; page?: Page }[] = [
  { label: 'Classes', page: 'classes' },
  { label: 'Feats' },
  { label: 'Raças', page: 'racas' },
  { label: 'Skills' },
  { label: 'Magias' },
];
const sistemas = ['Quests Automáticas', 'Morte', 'Eventos Aleatórios', 'CNR'];

export const Regras: React.FC<RegrasProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-white/10 border-b border-white/20 px-6 py-3">
          <h1 className="text-lg sm:text-xl font-semibold text-white">Regras</h1>
        </div>

        <div className="px-6 py-6">
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            O Terra possui diversas customizações de classe, raça, magia, etc. A
            seguir estão os links para as alterações para consulta. Assim como, a
            lista dos sistemas do servidor explicados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section>
              <h2 className="text-base sm:text-lg font-semibold text-white/90 mb-4 border-b border-white/10 pb-2">
                Modificações
              </h2>
              <div className="flex flex-col gap-2">
                {modificacoes.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.page ? () => onNavigate(item.page!) : undefined}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 text-sm font-semibold transition-colors duration-150 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-white/90 mb-4 border-b border-white/10 pb-2">
                Sistemas
              </h2>
              <div className="flex flex-col gap-2">
                {sistemas.map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 text-sm font-semibold transition-colors duration-150 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
