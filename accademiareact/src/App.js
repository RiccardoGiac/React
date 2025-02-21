import React from 'react'
import TabellaRicercatori from "./components/TabellaRicercatori";
import TabellaProfessori from "./components/TabellaProfessori";

function App() {
  return (
    <div>
      <h1>Visualizza Ricercatori</h1>
      <TabellaRicercatori />

      <br></br>

      <h1>Visualizza Professori</h1>
      <TabellaProfessori />

      </div>
  );
}

export default App