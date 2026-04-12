import React, { useCallback, useEffect, useState } from 'react';
import {
  fetchServerStatus,
  serverAction,
  updateNwsync,
} from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

type Action = 'start' | 'stop' | 'restart' | 'nwsync';

const actionLabels: Record<Action, string> = {
  start: 'Iniciar',
  stop: 'Parar',
  restart: 'Reiniciar',
  nwsync: 'Atualizar nwsync',
};

export const ServerActions: React.FC = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState<Action | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [running, setRunning] = useState<boolean | null>(null);
  const [refreshingStatus, setRefreshingStatus] = useState(false);

  const refreshStatus = useCallback(async () => {
    if (!token) return;
    setRefreshingStatus(true);
    try {
      const s = await fetchServerStatus(token);
      setRunning(s.running);
    } catch {
      setRunning(null);
    } finally {
      setRefreshingStatus(false);
    }
  }, [token]);

  useEffect(() => {
    refreshStatus();
  }, [refreshStatus]);

  const handleAction = async (action: Action) => {
    if (!token) return;
    setMessage(null);
    setLoading(action);
    try {
      if (action === 'nwsync') {
        const r = await updateNwsync(token);
        setMessage({ type: 'success', text: r.message });
      } else {
        await serverAction(action, token);
        setMessage({
          type: 'success',
          text: `Comando "${actionLabels[action]}" enviado com sucesso.`,
        });
      }
      await refreshStatus();
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ??
        `Falha ao executar "${actionLabels[action]}".`;
      setMessage({ type: 'error', text: msg });
    } finally {
      setLoading(null);
    }
  };

  const statusLabel =
    running === null
      ? 'Desconhecido'
      : running
        ? 'Rodando'
        : 'Parado';
  const statusColor =
    running === null
      ? 'text-white/60'
      : running
        ? 'text-emerald-400'
        : 'text-red-400';

  return (
    <div>
      <div className="bg-white/10 border-b border-white/20 px-6 py-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Ações do Servidor</h2>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-white/50">Status:</span>
          <span className={`font-semibold ${statusColor}`}>
            {refreshingStatus ? '...' : statusLabel}
          </span>
          <button
            onClick={refreshStatus}
            disabled={refreshingStatus}
            className="ml-2 px-2 py-1 rounded-md text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 disabled:opacity-50"
          >
            Atualizar
          </button>
        </div>
      </div>
      <div className="px-6 py-6 space-y-4">
        <p className="text-white/60 text-xs">
          Controle o estado do servidor de jogo. Ações são registradas e exigem autenticação.
        </p>

        <div className="flex flex-wrap gap-3">
          {(Object.keys(actionLabels) as Action[]).map((action) => {
            const isDisabled =
              loading !== null ||
              (action === 'start' && running === true) ||
              (action === 'stop' && running === false);
            return (
              <button
                key={action}
                onClick={() => handleAction(action)}
                disabled={isDisabled}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  action === 'stop'
                    ? 'bg-red-500/20 hover:bg-red-500/30 border-red-500/30 text-red-200'
                    : action === 'nwsync'
                      ? 'bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30 text-blue-200'
                      : 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                }`}
              >
                {loading === action ? '...' : actionLabels[action]}
              </button>
            );
          })}
        </div>

        {message && (
          <p
            className={`text-xs ${
              message.type === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};
