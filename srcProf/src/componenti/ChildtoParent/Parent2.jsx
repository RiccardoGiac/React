import React, { useState } from 'react';

const Parent = () => {
  const [data, setData] = useState(null);

  const handleDataFromChild = (receivedData) => {
    setData(receivedData);
  };

  return (
    <div>
      <h1>Dati ricevuti dal Child: {data}</h1>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
};

const Child = ({ sendDataToParent }) => {
  const fetchData = async () => {
    // Simuliamo una chiamata API asincrona
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve('Dati ricevuti dall\'API'), 2000)
    );
    // Invia il risultato della chiamata API al parent
    sendDataToParent(response);
  };

  return (
    <div>
      <button onClick={fetchData}>Ottieni Dati Asincroni</button>
    </div>
  );
};

export default Parent;