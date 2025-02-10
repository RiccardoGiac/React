import React, { useState } from 'react';

const PostExample = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }), // Invia il nome come corpo della richiesta
    })
      .then((response) => response.json())
      .then((data) => setMessage(`Dati inviati con successo: ${data.id}`))
      .

catch((error) => setMessage(`Errore: ${error.message}`));
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

export default PostExample;