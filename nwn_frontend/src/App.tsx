import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Char {
  id: number;
  name: string;
  level: number;
  race: number;
  xp: number;
  class_1: number;
  is_on: number;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function App() {
  const [players, setPlayers] = useState<Char[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Char[]>(`${API_URL}/chars/online/1`)
      .then((response) => {
        setPlayers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar jogadores online.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogadores Online</h1>

        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && players.length === 0 && (
          <p>Nenhum jogador online no momento.</p>
        )}

        {players.length > 0 && (
          <table className="players-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nível</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
