import React from 'react';
import { Char } from '../../types/Char';

interface PlayerRowProps {
  char: Char;
}

export const PlayerRow: React.FC<PlayerRowProps> = ({ char }) => {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-150">
      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base text-white/90">{char.name}</td>
      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base text-white/70 hidden sm:table-cell">{char.player?.account_name ?? '—'}</td>
      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base text-white/70 text-center">{char.level}</td>
    </tr>
  );
};
