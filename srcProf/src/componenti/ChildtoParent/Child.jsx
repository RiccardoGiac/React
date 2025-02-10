import React from 'react';

function Child({ onMessage })  {
  const sendMessageToParent = () => {
    // Invia il messaggio al parent tramite la funzione onMessage
    onMessage('Ciao dal componente Child!');
  };

  return (
    <div>
      <button onClick={sendMessageToParent}>Invia messaggio al Parent</button>
    </div>
  );
};

export default Child;