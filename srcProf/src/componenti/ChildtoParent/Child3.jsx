import React from 'react';

const Child3 = ({ addItem }) => {
  const addItemsToParent = () => {
    const newItems = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
    // Passa l'array di nuovi elementi al parent
    addItem(newItems);
  };

  return (
    <div>
      <button onClick={addItemsToParent}>Aggiungi Elementi</button>
    </div>
  );
};

export default Child3;