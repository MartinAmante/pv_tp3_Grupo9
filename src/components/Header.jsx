import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const Header = () => {

    const {usuario} = useContext(UsuarioContext);

    return (
        <header className= "header">
        <h2>Grup 9</h2>
        
        <div>
            {usuario.nombre} | {usuario.rol}
        </div>
        </header>
    );
};

export default Header;