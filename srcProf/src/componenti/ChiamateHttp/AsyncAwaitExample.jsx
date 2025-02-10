import React, { useState, useEffect } from 'react';

const AsyncAwaitExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Chiamata HTTP
  }, []);

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

export default AsyncAwaitExample;