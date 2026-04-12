import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  AdminCharacter,
  AdminPlayer,
  deleteAdminCharacter,
  fetchAdminPlayerCharacters,
  fetchAdminPlayers,
} from '../../services/api';

export const PlayersAdmin: React.FC = () => {
  const { token } = useAuth();
  const [players, setPlayers] = useState<AdminPlayer[]>([]);
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [playersError, setPlayersError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<AdminPlayer | null>(null);
  const [characters, setCharacters] = useState<AdminCharacter[]>([]);
  const [loadingChars, setLoadingChars] = useState(false);
  const [charsError, setCharsError] = useState<string | null>(null);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    setLoadingPlayers(true);
    setPlayersError(null);
    fetchAdminPlayers(token)
      .then(setPlayers)
      .catch((e) => setPlayersError(e?.response?.data?.message ?? 'Erro ao carregar jogadores'))
      .finally(() => setLoadingPlayers(false));
  }, [token]);

  const loadCharacters = useCallback(
    (player: AdminPlayer) => {
      if (!token) return;
      setSelected(player);
      setCharacters([]);
      setCharsError(null);
      setLoadingChars(true);
      fetchAdminPlayerCharacters(player.serial_key, token)
        .then(setCharacters)
        .catch((e) =>
          setCharsError(e?.response?.data?.message ?? 'Erro ao carregar personagens'),
        )
        .finally(() => setLoadingChars(false));
    },
    [token],
  );

  const handleDelete = useCallback(
    async (char: AdminCharacter) => {
      if (!token || !selected) return;
      const confirmed = window.confirm(
        `Tem certeza que deseja apagar "${char.name}" (${char.file})?\n\nO arquivo será movido para a pasta de backup e pode ser restaurado.`,
      );
      if (!confirmed) return;
      setDeletingFile(char.file);
      try {
        await deleteAdminCharacter(selected.serial_key, char.file, token);
        setCharacters((prev) => prev.filter((c) => c.file !== char.file));
      } catch (e: any) {
        alert(e?.response?.data?.message ?? 'Erro ao apagar personagem');
      } finally {
        setDeletingFile(null);
      }
    },
    [token, selected],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return players;
    return players.filter(
      (p) =>
        p.account_name.toLowerCase().includes(q) ||
        p.serial_key.toLowerCase().includes(q),
    );
  }, [players, search]);

  return (
    <div>
      <div className="bg-white/10 border-b border-white/20 px-6 py-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Jogadores</h2>
        <span className="text-[11px] text-white/60">
          Total:{' '}
          <span className="font-semibold text-white">{players.length}</span>
          {search.trim() && (
            <>
              {' '}
              · Filtrados:{' '}
              <span className="font-semibold text-white">{filtered.length}</span>
            </>
          )}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
        <aside className="border-b md:border-b-0 md:border-r border-white/10 px-4 py-4">
          <input
            type="text"
            placeholder="Buscar por nome ou serial key"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/30"
          />

          {loadingPlayers && (
            <p className="text-white/50 text-xs">Carregando jogadores...</p>
          )}
          {playersError && (
            <p className="text-red-400 text-xs">{playersError}</p>
          )}
          {!loadingPlayers && !playersError && filtered.length === 0 && (
            <p className="text-white/50 text-xs">Nenhum jogador encontrado.</p>
          )}

          <ul className="space-y-1 max-h-[480px] overflow-y-auto pr-1">
            {filtered.map((p) => {
              const isActive = selected?.serial_key === p.serial_key;
              return (
                <li key={p.serial_key}>
                  <button
                    onClick={() => loadCharacters(p)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="font-medium">{p.account_name}</div>
                    <div className="text-white/40 text-[10px] font-mono">
                      {p.serial_key}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="px-6 py-6">
          {!selected && (
            <p className="text-white/50 text-xs">
              Selecione um jogador para visualizar os personagens.
            </p>
          )}
          {selected && (
            <>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white text-sm font-semibold">
                    {selected.account_name}
                  </h3>
                  <p className="text-white/40 text-[11px] font-mono">
                    {selected.serial_key}
                  </p>
                </div>
                {!loadingChars && !charsError && (
                  <span className="shrink-0 text-[11px] text-white/60">
                    Personagens:{' '}
                    <span className="font-semibold text-white">
                      {characters.length}
                    </span>
                  </span>
                )}
              </div>

              {loadingChars && (
                <p className="text-white/50 text-xs">Carregando personagens...</p>
              )}
              {charsError && (
                <p className="text-red-400 text-xs">{charsError}</p>
              )}
              {!loadingChars && !charsError && characters.length === 0 && (
                <p className="text-white/50 text-xs">
                  Este jogador não possui personagens.
                </p>
              )}

              {characters.length > 0 && (
                <ul className="divide-y divide-white/10 border border-white/10 rounded-lg overflow-hidden">
                  {characters.map((c) => (
                    <li
                      key={c.file}
                      className="px-4 py-2 flex items-center justify-between gap-3 hover:bg-white/5"
                    >
                      <div className="flex-1 min-w-0 flex items-center gap-2">
                        <span className="shrink-0 inline-flex items-center justify-center min-w-[28px] h-5 px-1.5 rounded-md text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {c.level}
                        </span>
                        <div className="min-w-0">
                          <div className="text-white text-xs font-medium truncate">
                            {c.name}
                          </div>
                          <div className="text-white/40 text-[10px] font-mono truncate">
                            {c.file}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(c)}
                        disabled={deletingFile === c.file}
                        className="shrink-0 px-3 py-1 rounded-md text-[11px] font-medium bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {deletingFile === c.file ? 'Apagando...' : 'Apagar'}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};
