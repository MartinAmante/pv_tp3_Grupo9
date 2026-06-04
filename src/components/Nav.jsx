import { NavLink } from 'react-router-dom';
import "../assets/css/nav.css";

function Nav() {
    return (    
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>

                <li>
                    <NavLink to="/proyectos">Proyectos</NavLink>
                </li>

                <li>
                    <NavLink to="/perfil">Perfil</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
/*
    Refactorización del Menú (<Nav />)

    “Reemplazar todas las etiquetas tradicionales <a> por <Link> o <NavLink>”
*/