import { useState, useEffect } from "react";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";

function App() {
  const [players, setPlayers] = useState([]);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  // Salva no localStorage toda vez que os players mudarem
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <div>
      <h1>Time de Futebol</h1>
      <PlayerForm onAddPlayer={addPlayer} />
      <PlayerList players={players} />
    </div>
  );
}

export default App;
