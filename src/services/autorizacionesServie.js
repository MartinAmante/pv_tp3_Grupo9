const autorizacionesService = (() => {
const autorizaciones = [{
        nombre: 'Tomas Vilte',
        dni: '12345678',
        rol: 'Alumno',
        institucion: 'Facultad de Ingeniería',
        password: '123457'}];

const login = (nombre,password) =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const encontrado = autorizaciones.find( usuario =>
            usuario.nombre === nombre && usuario.password ===password
        );
        if (encontrado){
            resolve ({nombre: encontrado.nombre,password: encontrado.password });
        }else {
            reject (new Error('Usuario o contrasenia incorrectos'));
        }


    } ,1200);
    });


}

    return { login };
})();

export default autorizacionesService;