import React from 'react';
import skillsData from '../../dataSet/skills/pericias.json';

const skillsWithNotes = skillsData.skills.filter((s) => s.notes.length > 0);

export const Skills: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full space-y-6">
      <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-white/10 border-b border-white/20 px-6 py-3">
          <h1 className="text-lg sm:text-xl font-semibold text-white">Perícias Novas e Modificadas</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-2 text-white/70 font-semibold w-40">Nome</th>
                <th className="text-left px-4 py-2 text-white/70 font-semibold">Descrição</th>
                <th className="text-left px-4 py-2 text-white/70 font-semibold w-28">Observação</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.skills.map((skill) => (
                <tr key={skill.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-2 text-white/90 font-semibold align-top">{skill.name}</td>
                  <td className="px-4 py-2 text-white/70 leading-relaxed align-top">{skill.description}</td>
                  <td className="px-4 py-2 align-top">
                    {skill.isNew && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                        Nova
                      </span>
                    )}
                    {skill.isModified && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium">
                        Modificada
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {skillsWithNotes.length > 0 && (
        <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-white/10 border-b border-white/20 px-6 py-3">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Notas</h2>
          </div>
          <div className="px-6 py-4 space-y-5">
            {skillsWithNotes.map((skill) => (
              <div key={skill.name}>
                <h3 className="text-sm font-semibold text-white/90 mb-1.5">{skill.name}</h3>
                <ul className="space-y-1">
                  {skill.notes.map((note, i) => (
                    <li key={i} className="text-white/60 text-xs leading-relaxed">
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
