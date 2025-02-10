import React, { useState } from 'react';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Opzione selezionata: ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Scegli una opzione:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">--Seleziona--</option>
          <option value="option1">Opzione 1</option>
          <option value="option2">Opzione 2</option>
          <option value="option3">Opzione 3</option>
        </select>
      </label>
      <br />
      <button type="submit">Invia</button>
    </form>
  );
};

export default DropdownForm;