import { Link } from "react-router-dom";

function Navbar(){
    return (
        
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Chi siamo</Link>
          </li>
          <li>
            <Link to="/products">Prodotti</Link>
          </li>
        </ul>
      
    )
  }
  export default Navbar
