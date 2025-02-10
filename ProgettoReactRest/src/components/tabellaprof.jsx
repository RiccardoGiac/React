import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetProf = () => {
  const [professori, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua la chiamata HTTP con axios
    axios
      .get('http://127.0.0.1:5002/professori')
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
      <h1>Elenco professori</h1>
      <ul>
        {professori.map((professori) => (
          <li key={professori.id}>{professori.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetProf;