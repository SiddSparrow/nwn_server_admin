import React from 'react';
import featsData from '../../dataSet/feats/talentos.json';

interface Feat {
  name: string;
  category: string;
  prerequisites: string | null;
  effect: string;
  special: string | null;
  isNew: boolean;
  isModified: boolean;
}

const categories = Array.from(new Set(featsData.feats.map((f) => f.category)));

export const Feats: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full space-y-6">
      {categories.map((category) => {
        const feats = featsData.feats.filter((f) => f.category === category) as Feat[];
        return (
          <div
            key={category}
            className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-white/10 border-b border-white/20 px-6 py-3">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Talentos — {category}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-2 text-white/70 font-semibold w-44">Nome</th>
                    <th className="text-left px-4 py-2 text-white/70 font-semibold w-36">Pré-Requisitos</th>
                    <th className="text-left px-4 py-2 text-white/70 font-semibold">Efeito</th>
                    <th className="text-left px-4 py-2 text-white/70 font-semibold w-24">Observação</th>
                  </tr>
                </thead>
                <tbody>
                  {feats.map((feat) => (
                    <tr key={feat.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-2 text-white/90 font-semibold align-top">{feat.name}</td>
                      <td className="px-4 py-2 text-white/60 align-top">
                        {feat.prerequisites ?? <span className="text-white/30">—</span>}
                      </td>
                      <td className="px-4 py-2 text-white/70 leading-relaxed align-top">
                        {feat.effect}
                        {feat.special && (
                          <p className="text-white/45 italic mt-1">{feat.special}</p>
                        )}
                      </td>
                      <td className="px-4 py-2 align-top">
                        {feat.isNew && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                            Novo
                          </span>
                        )}
                        {feat.isModified && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium">
                            Modificado
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};
