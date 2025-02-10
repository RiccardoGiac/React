import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua la chiamata HTTP con axios
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);  // Imposta i dati nel state
        setLoading(false);         // Rimuove il caricamento
      })
      .catch((error) => {
        setError(error.message);  // Gestisce gli errori
        setLoading(false);
      });
  }, []); // L'array vuoto fa sì che la chiamata HTTP venga eseguita solo una volta

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Elenco Utenti</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosExample;