import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Funzione di cleanup per fermare il timer quando il componente viene smontato
    return () => clearInterval(interval);
  }, []);  // L'effetto viene eseguito solo una volta al montaggio

  return (
    <div>
      <h1>Tempo trascorso: {time}s</h1>
    </div>
  );
};

export default Timer;