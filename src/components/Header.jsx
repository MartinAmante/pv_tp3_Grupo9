<<<<<<< HEAD
import React, { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';


export const Header = () => {

    const { usuario } = useContext(UsuarioContext);
    const { nombre, rol } = usuario;
    return (

    <div >
            
        <header className="container " >
            <title>Grup 9</title>
              <section className="d-flex justify-content-between align-items-center">      
            <span >
                {nombre}
            </span>

            <span className= "justify-content-end">
                {rol}  

            </span>
            </section>

            {/* Aquí podrías agregar un avatar o icono de usuario */}
            <link rel="#"href="#" rel="#"/>
            <link href="#" rel="#"/>


=======
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
>>>>>>> 5654d7e678bfdf7eb96d0394d0f6a8a5e295fd29
        </header>
    );
};

export default Header;/*
👤 Fernando → Header dinámico
Punto 2: Consumo del Estado Global en <Header />
Le corresponde:
✅ Conectar <Header /> al contexto

Usando:

useContext()
✅ Mostrar dinámicamente:
nombre usuario
rol

En el encabezado.

Además puede encargarse de:
estilos del Header
avatar/icono usuario
responsive del encabezado*/