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
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
        Jogadores Online — {players.length}
      </h2>
      <PlayerTable players={players} />
    </div>
  );
};
