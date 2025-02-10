import React, { useRef } from 'react';

const MultipleUncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${nameRef.current.value}, Email: ${emailRef.current.value}, Password: ${passwordRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          ref={nameRef}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          ref={emailRef}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          ref={passwordRef}
        />
      </label>
      <br />
      <button type="submit">Registrati</button>
    </form>
  );
};

export default MultipleUncontrolledForm;