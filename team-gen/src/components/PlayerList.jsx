function PlayerList({ players }) {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player.name} - Nota: {player.rating}
        </li>
      ))}
    </ul>
  );
}

export default PlayerList;
