import React, { useState, useEffect } from 'react';

function LocationTracker() {
  const [location, setLocation] = useState(window.location.href);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.href);
    };

    // Aggiungi un listener per il cambiamento dell'URL
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup: rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // Esegui solo una volta

  return (
    <div>
      <h1>URL Attuale: {location}</h1>
    </div>
  );
};

export default LocationTracker;