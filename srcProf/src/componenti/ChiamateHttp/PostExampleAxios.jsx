import React, { useState } from 'react';
import axios from 'axios';

const PostExampleAxios = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://jsonplaceholder.typicode.com/posts', { name })
      .then((response) => setMessage(`Dati inviati con successo: ${response.data.id}`))
      .catch((error) => setMessage(`Errore: ${error.message}`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Inserisci il nome"
        />
        <button type="submit">Invia</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostExampleAxios;