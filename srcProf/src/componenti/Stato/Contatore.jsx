import React, { useState } from 'react';

function Counter() {
  // Inizializziamo lo stato 'count' a 0
  const [count, setCount] = useState(0);

  // Funzione per incrementare il contatore
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
    </div>
  );
};

export default Counter;