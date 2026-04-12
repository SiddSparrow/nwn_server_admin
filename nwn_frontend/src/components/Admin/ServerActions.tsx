import React, { useState } from 'react';
import { serverAction } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

type Action = 'start' | 'stop' | 'restart';

const actionLabels: Record<Action, string> = {
  start: 'Iniciar',
  stop: 'Parar',
  restart: 'Reiniciar',
};

export const ServerActions: React.FC = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState<Action | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleAction = async (action: Action) => {
    if (!token) return;
    setMessage(null);
    setLoading(action);
    try {
      await serverAction(action, token);
      setMessage({ type: 'success', text: `Comando "${actionLabels[action]}" enviado com sucesso.` });
    } catch {
      setMessage({ type: 'error', text: `Falha ao executar "${actionLabels[action]}".` });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div>
      <div className="bg-white/10 border-b border-white/20 px-6 py-3">
        <h2 className="text-lg font-semibold text-white">Ações do Servidor</h2>
      </div>
      <div className="px-6 py-6 space-y-4">
        <p className="text-white/60 text-xs">
          Controle o estado do servidor de jogo. Ações são registradas e exigem autenticação.
        </p>

        <div className="flex flex-wrap gap-3">
          {(Object.keys(actionLabels) as Action[]).map((action) => (
            <button
              key={action}
              onClick={() => handleAction(action)}
              disabled={loading !== null}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold transition-colors disabled:opacity-50"
            >
              {loading === action ? '...' : actionLabels[action]}
            </button>
          ))}
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
