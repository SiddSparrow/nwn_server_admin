import misterious from '../../media/img/classes/misterious.png';

import barbarian from '../../media/img/classes/Barbarian/tonelada.png';
import bard from '../../media/img/classes/Bard/orfeu.png';
import assassin from '../../media/img/classes/Assassin/mephistue.png';
import cleric from '../../media/img/classes/Cleric/image.png';
import duelist from '../../media/img/classes/Duelist/marie.png';
import fighter from '../../media/img/classes/Fighter/urien.png';
import monk from '../../media/img/classes/Monk/karian.png';
import paladin from '../../media/img/classes/Paladin/siegfried.png';
import ranger from '../../media/img/classes/Ranger/rick.png';
import sorcerer from '../../media/img/classes/Sorcerer/annabel.png';
import wizard from '../../media/img/classes/Wizard/nyatar.png';
import cavaleiro from '../../media/img/classes/Cavaleiro/carlos.png';
import cavaleiroArcano from '../../media/img/classes/CavaleiroArcano/neroh.png';
import shadowDancer from '../../media/img/classes/ShadowDancer/manami.png';
import rdd from '../../media/img/classes/RDD/clarisse.png';
import weaponMaster from '../../media/img/classes/WeaponMaster/jerick.png';

interface ClassImageEntry {
  src: string;
  character: string;
}

const classImageMap: Record<string, ClassImageEntry> = {
  'Bárbaro': { src: barbarian, character: 'Tonelada' },
  'Bardo': { src: bard, character: 'Orfeu' },
  'Assassino': { src: assassin, character: 'Mephistue' },
  'Clérigo': { src: cleric, character: 'Image' },
  'Duelista': { src: duelist, character: 'Marie' },
  'Guerreiro': { src: fighter, character: 'Urien' },
  'Monge': { src: monk, character: 'Karian' },
  'Paladino': { src: paladin, character: 'Siegfried' },
  'Ranger': { src: ranger, character: 'Rick' },
  'Sorcerer': { src: sorcerer, character: 'Annabel' },
  'Wizard': { src: wizard, character: 'Nyatar' },
  'Cavaleiro': { src: cavaleiro, character: 'Carlos' },
  'Cavaleiro Arcano': { src: cavaleiroArcano, character: 'Neroh' },
  'Shadow Dancer': { src: shadowDancer, character: 'Manami' },
  'Discípulo do Dragão Vermelho': { src: rdd, character: 'Clarisse' },
  'Mestre de Armas': { src: weaponMaster, character: 'Jerick' },
};

export const getClassImage = (className: string): { src: string; character: string } => {
  return classImageMap[className] || { src: misterious, character: '' };
};

export { misterious };
