import React from 'react';
import { Char } from '../../types/Char';
import { PlayerRow } from './PlayerRow';

interface PlayerTableProps {
  players: Char[];
}

export const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/15 rounded-xl overflow-hidden shadow-xl">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="border-b border-white/20 bg-white/10">
            <th className="px-6 py-3 text-left text-sm font-semibold text-white/90">Personagem</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white/90">Jogador</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-white/90">Nível</th>
          </tr>
        </thead>
        <tbody>
          {players.map((char) => (
            <PlayerRow key={char.id} char={char} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
