import React, { useEffect } from 'react';
import { DataTable } from './DataTable';
import { getClassImage, misterious } from './classImages';

interface ClassData {
  type: string;
  name: string;
  description: string;
  hitDice: string;
  skillPoints: number;
  saves: string[];
  ab: string;
  classSkills: string[];
  image: string;
  abilities: {
    name: string;
    description: string;
    table: { headers: string[]; rows: string[][] } | null;
  }[];
  spellList: Record<string, string[]> | null;
  progression: { headers: string[]; rows: string[][] } | null;
}

interface ClassModalProps {
  classes: ClassData[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}
const hideImages = true;
const spellCircleLabels: Record<string, string> = {
  circle1: '1° Círculo',
  circle2: '2° Círculo',
  circle3: '3° Círculo',
  circle4: '4° Círculo',
  circle5: '5° Círculo',
  circle6: '6° Círculo',
  circle7: '7° Círculo',
  circle8: '8° Círculo',
  circle9: '9° Círculo',
};

export const ClassModal: React.FC<ClassModalProps> = ({ classes, currentIndex, onClose, onNavigate }) => {
  const cls = classes[currentIndex];

  const { src: image, character } = hideImages ? { src: misterious, character: '' } : getClassImage(cls.name);
  const isMisterious = image === misterious;

  const prev = () => onNavigate((currentIndex - 1 + classes.length) % classes.length);
  const next = () => onNavigate((currentIndex + 1) % classes.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-gray-800 border border-white/15 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white/10 border-b border-white/20 px-6 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl font-semibold text-white">{cls.name}</h2>
          <span className="text-xs text-amber-300 font-medium">{cls.type}</span>
        </div>
          
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm flex items-center justify-center transition-colors"
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Image floated + Description */}
          <div>
            <div className="relative float-right ml-4 mb-2 w-36 sm:w-44">
              <img
                src={image}
                alt={cls.name}
                className={`w-full h-auto object-contain ${isMisterious ? 'opacity-40' : ''}`}
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 -20px 15px -5px rgb(31 41 55), inset 0 20px 15px -5px rgb(31 41 55), inset 20px 0 15px -5px rgb(31 41 55), inset -20px 0 15px -5px rgb(31 41 55)',
                }}
              />
              {isMisterious && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-white/80 font-bold">?</span>
                </div>
              )}
              {character && (
                <p className="relative z-10 text-center text-white/50 text-xs italic mt-1">{character}</p>
              )}
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{cls.description}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span className="text-white/60">
                <span className="text-white/90 font-semibold">Hit Dice:</span> {cls.hitDice}
              </span>
              <span className="text-white/60">
                <span className="text-white/90 font-semibold">Skill Points:</span> {cls.skillPoints}
              </span>
              <span className="text-white/60">
                <span className="text-white/90 font-semibold">AB:</span> {cls.ab}
              </span>
              <span className="text-white/60">
                <span className="text-white/90 font-semibold">Saves:</span> {cls.saves.join(', ')}
              </span>
            </div>
          </div>

          {/* Class Skills */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">Class Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {cls.classSkills.map((skill) => (
                <span key={skill} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Abilities */}
          {cls.abilities.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white/90">Habilidades</h3>
              {cls.abilities.map((ability) => (
                <div key={ability.name} className="space-y-2">
                  <h4 className="text-xs font-semibold text-white/80">{ability.name}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{ability.description}</p>
                  {ability.table && (
                    <DataTable headers={ability.table.headers} rows={ability.table.rows} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Progression */}
          {cls.progression && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white/90">Progressão</h3>
              <DataTable headers={cls.progression.headers} rows={cls.progression.rows} />
            </div>
          )}

          {/* Spell List */}
          {cls.spellList && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white/90">Lista de Magias</h3>
              {Object.entries(cls.spellList).map(([circle, spells]) => (
                <div key={circle}>
                  <h4 className="text-xs font-semibold text-white/80 mb-1">
                    {spellCircleLabels[circle] || circle}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {spells.map((spell) => (
                      <span key={spell} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 text-xs">
                        {spell}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 text-sm font-semibold transition-colors duration-150"
          >
            ← {classes[(currentIndex - 1 + classes.length) % classes.length].name}
          </button>
          <span className="text-white/40 text-xs">{currentIndex + 1} / {classes.length}</span>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 text-sm font-semibold transition-colors duration-150"
          >
            {classes[(currentIndex + 1) % classes.length].name} →
          </button>
        </div>
      </div>
    </div>
  );
};
