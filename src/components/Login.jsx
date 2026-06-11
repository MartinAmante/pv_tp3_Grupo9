import React, { useContext,useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const Login = () => {

    const [datosUsuario, setDatosUsuario] = useState({
        
        nombre: '',
        constraseña: ''

    });

    return (
            <div className="card shadow-sm mb-3 border-primary " >   
              <h2>Iniciar Sesión</h2>
            <form  >
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                    />
                    
                </div>
                <br />
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                                        
                    />
                
                </div>
                <br />
                <button type="submit">Iniciar Sesión</button>
                
            </form>
        </div>
    );
};

export default Login;