import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ServerActions } from './ServerActions';
import { PlayersAdmin } from './PlayersAdmin';

type AdminSection = 'server' | 'players';

interface AdminOption {
  id: AdminSection;
  label: string;
  component: React.FC;
}

const options: AdminOption[] = [
  { id: 'server', label: 'Ações do Servidor', component: ServerActions },
  { id: 'players', label: 'Jogadores', component: PlayersAdmin },
];

export const Admin: React.FC = () => {
  const { token, username } = useAuth();
  const [active, setActive] = useState<AdminSection>('server');

  if (!token) {
    return (
      <div className="max-w-3xl mx-auto w-full">
        <div className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl px-6 py-6 text-center">
          <p className="text-white/70 text-sm">
            Você precisa estar autenticado como admin para acessar esta área.
          </p>
        </div>
      </div>
    );
  }

  const ActiveComponent = options.find((o) => o.id === active)?.component ?? ServerActions;

  return (
    <div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4">
      <aside className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-white/10 border-b border-white/20 px-4 py-3">
          <h2 className="text-white text-sm font-semibold">Admin</h2>
          <p className="text-white/50 text-xs">{username}</p>
        </div>
        <nav className="p-2 space-y-1">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                active === opt.id
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="backdrop-blur-md bg-gray-800 border border-white/15 rounded-xl shadow-xl overflow-hidden">
        <ActiveComponent />
      </section>
    </div>
  );
};
