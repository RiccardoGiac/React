import React, { useState, useEffect } from 'react';

function FetchExample(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua una chiamata HTTP con fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json(); // Converte la risposta in formato JSON
      })
      .then((data) => {
        setUsers(data);  // Imposta lo stato con i dati ricevuti
        setLoading(false); // Rimuove il caricamento
      })
      .catch((error) => {
        setError(error.message); // Gestisce gli errori
        setLoading(false);
      });
  }, []); // L'array vuoto significa che la chiamata HTTP avviene una sola volta, al primo render

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Elenco Utenti</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;