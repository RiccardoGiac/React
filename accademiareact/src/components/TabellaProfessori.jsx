import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader"; // Importiamo il Loader
import "./styles.css"; 

const API_URL = "http://127.0.0.1:5002/";

const TabellaProfessori = () => {
  const [professori, setProfessori] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/professori`)
      .then(response => {
        setProfessori(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Errore nel caricamento dei dati:", error);
        setLoading(false);
      });
  }, []);

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

export default TabellaProfessori;