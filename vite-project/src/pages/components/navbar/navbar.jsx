import { Link } from "react-router-dom"
import './navbar.css'
function Navbar(){
    return(
        <div className="navbar-paginaprincipal">
            <ul className="ul-paginaprincipal">
                <li className="li-paginaprincipal">
                    <Link to='/' >Inicial</Link>
                </li>
                <li className="li-paginaprincipal">
                    <Link to='/pagina-principal' >Principal</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar