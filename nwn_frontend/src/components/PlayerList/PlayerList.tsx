import React, { useEffect, useState } from 'react';
import { Char } from '../../types/Char';
import { fetchOnlinePlayers } from '../../services/api';
import { PlayerTable } from './PlayerTable';

export const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Char[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOnlinePlayers()
      .then(setPlayers)
      .catch(() => setError('Erro ao buscar jogadores online.'))
      .finally(() => setLoading(false));
  }, []);  

  if (loading) {
    return <p className="text-white/60 text-lg">Carregando...</p>;
  }

  if (error) {
    return <p className="text-red-400 text-lg">{error}</p>;
  }

  if (players.length === 0) {
    return <p className="text-white/60 text-lg">Nenhum jogador online no momento.</p>;
  }

  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center gap-2.5 mb-3.5">
        <h2 className="text-lg font-semibold text-white/90 font-serif m-0">
          Jogadores Online
        </h2>
        <span className="text-xs font-semibold font-sans bg-white/10 border border-white/15 rounded-full px-2.5 py-0.5 text-white/70">
          {players.length}
        </span>
        <span className="ml-auto text-xs font-sans text-[#4ade80] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
          Servidor Online
        </span>
      </div>
      <PlayerTable players={players} />
    </div>
  );
};
