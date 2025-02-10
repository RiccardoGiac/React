import React, { useState } from 'react';

function UserProfile2() {
  const [profile, setProfile] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile, // Copia i valori precedenti
      [name]: value    // Aggiorna solo la proprietà modificata
    }));
  };

  return (
    <div>
      <label>
        Nome:
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
      </label>
      <h3>Dati inseriti:</h3>
      <p>Nome: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserProfile2;