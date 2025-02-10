import React, { useState } from 'react';

function Counter2()  {
  const [count, setCount] = useState(5);

  // Funzione per incrementare il contatore usando il valore precedente
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
    </div>
  );
};

export default Counter2;