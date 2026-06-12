import guardado from "../components/Login";
import {useContext} from "react";
import  { UsuarioContext } from "../context/UsuarioContext";

const validar = () => {

    const {usuario} = useContext(UsuarioContext);
    const {guardar} = guardado();
    const validacion = () => {
    return new Promise((resolve, reject) => {
        const encontrado = usuario.find(
            u => u.nombre === guardar.nombre && u.contraseña === guardar.contraseña
        );
        if (encontrado) {
            resolve(encontrado);
        } else {
            reject(new Error("Credenciales inválidas"));
        }
    });
}
}

