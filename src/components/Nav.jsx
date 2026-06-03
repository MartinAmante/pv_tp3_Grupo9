import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";

function Nav() {
    return (    
        <BrowserRouter>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/detalle">Detalle</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
        </nav>
        </BrowserRouter>
    );
}

export default Nav;
/*
    ✅ Refactorización del Menú (<Nav />)

    “Reemplazar todas las etiquetas tradicionales <a> por <Link> o <NavLink>”
*/