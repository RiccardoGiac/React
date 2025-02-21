import { Link } from "react-router-dom";

function Navbar(){
    return (
      <div>
      <button><Link to="/">Home</Link></button>
      <p>Seleziona Lista da Visualizzare</p>
      <ul className="flex space-x-4 text-white">
          
          <li>
            <Link to="/professori">Lista Professori</Link>
          </li>
          <li>
            <Link to="/ricercatori">Lista Ricercatori</Link>
          </li>
        </ul>
      </div>
    )
  }
  export default Navbar