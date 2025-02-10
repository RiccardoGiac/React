import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Il componente è stato aggiornato!');
  });

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};

export default Counter;