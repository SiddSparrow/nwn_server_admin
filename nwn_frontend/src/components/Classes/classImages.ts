import misterious from '../../media/img/classes/misterious.webp';

import barbarian from '../../media/img/classes/Barbarian/tonelada.webp';
import bard from '../../media/img/classes/Bard/orfeu.webp';
import assassin from '../../media/img/classes/Assassin/mephistue.webp';
import cleric from '../../media/img/classes/Cleric/image.webp';
import duelist from '../../media/img/classes/Duelist/marie.webp';
import fighter from '../../media/img/classes/Fighter/urien.webp';
import monk from '../../media/img/classes/Monk/karian.webp';
import paladin from '../../media/img/classes/Paladin/siegfried.webp';
import ranger from '../../media/img/classes/Ranger/rick.webp';
import sorcerer from '../../media/img/classes/Sorcerer/annabel.webp';
import wizard from '../../media/img/classes/Wizard/nyatar.webp';
import cavaleiro from '../../media/img/classes/Cavaleiro/carlos.webp';
import cavaleiroArcano from '../../media/img/classes/CavaleiroArcano/neroh.webp';
import shadowDancer from '../../media/img/classes/ShadowDancer/manami.webp';
import rdd from '../../media/img/classes/RDD/clarisse.webp';
import weaponMaster from '../../media/img/classes/WeaponMaster/jerick.webp';

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
