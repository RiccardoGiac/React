import React, { useState } from 'react';
import Navbar from '../Navbar';

const ValidatedForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Email non valida');
    } else {
      setError('');
      alert(`Email inviata: ${email}`);
    }
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Invia</button>
    </form>
   </>
  );
};

export default ValidatedForm;