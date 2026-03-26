import React from 'react';
import { Header } from './components/Header/Header';
import { PlayerList } from './components/PlayerList/PlayerList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Header />
      <main className="flex flex-col items-center pt-28 px-6">
        <PlayerList />
      </main>
    </div>
  );
}

export default App;
