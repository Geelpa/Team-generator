import { useState } from "react";

function PlayerForm({ onAddPlayer }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating) return;

    onAddPlayer({ name, rating: parseFloat(rating) });
    setName("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do jogador"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default PlayerForm;
