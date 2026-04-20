import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { PlayerList } from './components/PlayerList/PlayerList';
import { NavCards } from './components/NavCards/NavCards';
import { Regras } from './components/Regras/Regras';
import { Racas } from './components/Racas/Racas';
import { Classes } from './components/Classes/Classes';
import nordockMap from './media/img/mapas/mundo/Nordock.webp';
import { Page } from './types';
import { Skills } from './components/Skills/Skills';
import { Feats } from './components/Feats/Feats';
import { Admin } from './components/Admin/Admin';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <AuthProvider>
      <link rel="preload" href={nordockMap} as="image" />
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: `url(${nordockMap})` }}
        />
        <div className="fixed inset-0 bg-black/50" />
        <div className="relative z-10">
          <Header page={page} onNavigate={setPage} />
          <main className="flex flex-col items-center pt-28 px-6">
            {page === 'home' && <>
            <PlayerList />
            <NavCards onNavigate={setPage} />
          </>}
            {page === 'regras' && <Regras onNavigate={setPage} />}
            {page === 'racas' && <Racas />}
            {page === 'classes' && <Classes />}
            {page === 'skills' && <Skills />}
            {page === 'feats' && <Feats />}
            {page === 'admin' && <Admin />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
