import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome inviato: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          ref={nameRef} // Usa ref per accedere al valore del campo
        />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
};

export default UncontrolledForm;