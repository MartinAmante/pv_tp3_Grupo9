import React, { useContext,useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const Login = () => {

   export const guardado = () => {
    const [guardar, setGuardar] = useState({ });
}

    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


            const nuevo = {
                nombre,
                contraseña
            };
        setGuardar(nuevo);
           setNombre('')
           setContraseña('')
           }


    return (
            <div className="card shadow-sm mb-3 border-primary " >   
              <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}   >
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        value= {nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    
                </div>
                <br />
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="contraseña"
                        value= {contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                
                </div>
                <br />
                <button type="submit" 
                
                >Iniciar Sesión</button>
                
            </form>

        </div>
    );
};

export default Login;

/* 
    le gusta el ketchup
*/