import React, { useState } from 'react';
import Child from './Child3';

const Parent4 = () => {
  const [items, setItems] = useState([]);

  // Funzione per aggiungere elementi all'array
  const handleAddItems = (newItems) => {
    setItems([...items, ...newItems]);
  };

  return (
    <div>
      <h1>Elenco Elementi</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Child addItem={handleAddItems} />
    </div>
  );
};

export default Parent4;