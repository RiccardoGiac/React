import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Esegui una richiesta API quando il componente viene montato
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Errore:', error));
  }, []);  // L'effetto viene eseguito solo una volta (all'inizializzazione del componente)

  return (
    <div>
      <h1>Data Fetcher</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default DataFetcher;