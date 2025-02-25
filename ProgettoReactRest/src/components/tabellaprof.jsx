import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles.css";
import Loader from "./Loader";

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

  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="tabella-container">
      <h2>Lista Professori</h2>
      {loading ? (
        <Loader />  // Qui mostriamo il loader durante il caricamento
      ) : (
        <table className="tabella">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cognome</th>
            </tr>
          </thead>
          <tbody>
            {professori.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.cognome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetProf;