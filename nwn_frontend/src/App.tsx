import React from 'react';
import { Header } from './components/Header/Header';
import { PlayerList } from './components/PlayerList/PlayerList';
import nordockMap from './media/Nordock.jpg';

function App() {
  return (
    <>
      <link rel="preload" href={nordockMap} as="image" />
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: `url(${nordockMap})` }}
        />
        <div className="fixed inset-0 bg-black/50" />
        <div className="relative z-10">
          <Header />
          <main className="flex flex-col items-center pt-28 px-6">
            <PlayerList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
