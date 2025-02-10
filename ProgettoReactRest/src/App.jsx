
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetProf from './components/tabellaprof';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar>
      

    </Navbar>
    <Routes>
      <Route path = "/" element={<home />} />
      <Route path = "/professori" element={<GetProf />} />
      <Route path = "/ricercatori" element={<tabellaric />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
