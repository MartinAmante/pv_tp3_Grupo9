import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({
        nombre: 'Tomas Vilte',
        dni: '12345678',
        rol: 'Alumno',
        institucion: 'Facultad de Ingeniería',
        contraseña: '123457'
    }

    );

   const [guardarUsuario , setGuardarUsuario] = useState({})
   const actualizarPerfil = (nuevosDatos) => { //juan
    setUsuario({
        ...usuario, //todo el onjeto usuario
        ...nuevosDatos // juan
    }); // al desestructurar todo y repetirse el campo "nombre" react se queda con la ultima desestructuracion
        // como solo se repite nombre, solo cambia eso. lo mmismo si fueran otros datos
};

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                actualizarPerfil,
                guardarUsuario,
                setGuardarUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};