import React from 'react';
import { AccordionList, AccordionItem } from '../AccordionList/AccordionList';
import racasData from '../../dataSet/races/racas.json';

import humano from '../../media/img/races/humano.png';
import anaoEscudo from '../../media/img/races/anao_escudo.png';
import anaoDourado from '../../media/img/races/anao_dourado.png';
import gnomo from '../../media/img/races/gnomo.png';
import halfling from '../../media/img/races/halfling.png';
import elfoLua from '../../media/img/races/elfo_lua.png';
import elfoSolar from '../../media/img/races/elfo_solar.png';
import elfoNegro from '../../media/img/races/elfo_negro.png';
import meioElfo from '../../media/img/races/meio-elfo.png';
import meioPituk from '../../media/img/races/meio_pituk.png';
import meioUruk from '../../media/img/races/meio_uruk.png';
import aasimar from '../../media/img/races/aasimar.png';
import tiefling from '../../media/img/races/tiefling.png';
import shadarkai from '../../media/img/races/shadarkai.png';
import genasiTerra from '../../media/img/races/genasi_terra.png';
import genasiAgua from '../../media/img/races/genasi_agua.png';
import genasiAr from '../../media/img/races/genasi_ar.png';
import genasiFogo from '../../media/img/races/genasi_fogo.png';
import minotauro from '../../media/img/races/minotauro.png';
import goblin from '../../media/img/races/goblin.png';
import driade from '../../media/img/races/driade.png';
import satiro from '../../media/img/races/satiro.png';

const imageMap: Record<string, string> = {
  'humano.png': humano,
  'anao_escudo.png': anaoEscudo,
  'anao_dourado.png': anaoDourado,
  'gnomo.png': gnomo,
  'halfling.png': halfling,
  'elfo_lua.png': elfoLua,
  'elfo_solar.png': elfoSolar,
  'elfo_negro.png': elfoNegro,
  'meio-elfo.png': meioElfo,
  'meio_pituk.png': meioPituk,
  'meio_uruk.png': meioUruk,
  'aasimar.png': aasimar,
  'tiefling.png': tiefling,
  'shadarkai.png': shadarkai,
  'genasi_terra.png': genasiTerra,
  'genasi_agua.png': genasiAgua,
  'genasi_ar.png': genasiAr,
  'genasi_fogo.png': genasiFogo,
  'minotauro.png': minotauro,
  'goblin.png': goblin,
  'driade.png': driade,
  'satiro.png': satiro,
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
