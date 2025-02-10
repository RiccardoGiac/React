import React, { useState, useEffect } from 'react';

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Il contatore è cambiato:', count);
  }, [count]);  // L'effetto si esegue solo quando 'count' cambia

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};

export default Counter2;