import React from 'react';
import { AccordionList, AccordionItem } from '../AccordionList/AccordionList';
import racasData from '../../dataSet/races/racas.json';

import humano from '../../media/img/races/humano.webp';
import anaoEscudo from '../../media/img/races/anao_escudo.webp';
import anaoDourado from '../../media/img/races/anao_dourado.webp';
import gnomo from '../../media/img/races/gnomo.webp';
import halfling from '../../media/img/races/halfling.webp';
import elfoLua from '../../media/img/races/elfo_lua.webp';
import elfoSolar from '../../media/img/races/elfo_solar.webp';
import elfoNegro from '../../media/img/races/elfo_negro.webp';
import meioElfo from '../../media/img/races/meio-elfo.webp';
import meioPituk from '../../media/img/races/meio_pituk.webp';
import meioUruk from '../../media/img/races/meio_uruk.webp';
import aasimar from '../../media/img/races/aasimar.webp';
import tiefling from '../../media/img/races/tiefling.webp';
import shadarkai from '../../media/img/races/shadarkai.webp';
import genasiTerra from '../../media/img/races/genasi_terra.webp';
import genasiAgua from '../../media/img/races/genasi_agua.webp';
import genasiAr from '../../media/img/races/genasi_ar.webp';
import genasiFogo from '../../media/img/races/genasi_fogo.webp';
import minotauro from '../../media/img/races/minotauro.webp';
import goblin from '../../media/img/races/goblin.webp';
import driade from '../../media/img/races/driade.webp';
import satiro from '../../media/img/races/satiro.webp';

const imageMap: Record<string, string> = {
  'humano.webp': humano,
  'anao_escudo.webp': anaoEscudo,
  'anao_dourado.webp': anaoDourado,
  'gnomo.webp': gnomo,
  'halfling.webp': halfling,
  'elfo_lua.webp': elfoLua,
  'elfo_solar.webp': elfoSolar,
  'elfo_negro.webp': elfoNegro,
  'meio-elfo.webp': meioElfo,
  'meio_pituk.webp': meioPituk,
  'meio_uruk.webp': meioUruk,
  'aasimar.webp': aasimar,
  'tiefling.webp': tiefling,
  'shadarkai.webp': shadarkai,
  'genasi_terra.webp': genasiTerra,
  'genasi_agua.webp': genasiAgua,
  'genasi_ar.webp': genasiAr,
  'genasi_fogo.webp': genasiFogo,
  'minotauro.webp': minotauro,
  'goblin.webp': goblin,
  'driade.webp': driade,
  'satiro.webp': satiro,
};

const items: AccordionItem[] = racasData.races.map((race) => ({
  id: race.race,
  title: race.race,
  image: imageMap[race.image] || '',
  content: (
    <div className="space-y-4">
      <p className="text-white/70 text-sm leading-relaxed">{race.description}</p>

      {race.traits.length > 0 && (
        <div>
          <h3 className="text-white/90 text-xs font-semibold mb-2">Atributos</h3>
          <ul className="space-y-1">
            {race.traits.map((trait, i) => (
              <li key={i} className="text-white/60 text-xs">
                • {trait.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {race.personalidades.length > 0 && (
        <div>
          <h3 className="text-white/90 text-xs font-semibold mb-2">Personalidades</h3>
          <ul className="space-y-1">
            {race.personalidades.map((p) => (
              <li key={p.name} className="text-white/60 text-xs">
                • <span className="text-white/80 font-semibold">{p.name}</span> — {p.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ),
}));

export const Racas: React.FC = () => {
  return <AccordionList items={items} title="Raças" />;
};
