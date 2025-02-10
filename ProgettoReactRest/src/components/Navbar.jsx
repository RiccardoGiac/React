import { Link } from "react-router-dom";

function Navbar(){
    return (
        
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/professori">Lista Professori</Link>
          </li>
          <li>
            <Link to="/ricercatori">Lista Ricercatori</Link>
          </li>
        </ul>
      
    )
  }
  export default Navbar