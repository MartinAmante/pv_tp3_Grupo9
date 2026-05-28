import { useState,useEffect } from 'react';
import { agregarProyecto, obtenerProyectos } from '../services/proyectoService';

const FormularioProyecto = ({ setProyectos }) => {

    const [datos, setDatos] = useState({
        titulo: '',
        categoria: '',
        estado: '',
        descripcion: '',
        descripcion2: ' ',
        recursos: [],
        equipo:[]
    });

    const { titulo, categoria, estado, descripcion, descripcion2 ,recursos, equipo} = datos;/*objeto que contiene los datos*/

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevo = {
            id: Date.now(),
            titulo,
            categoria,
            estado,
            descripcion,
            descripcion2: ' ',
            recursos,
            equipo:[
                    { nombre: "", rol: "" },  { nombre: "", rol: "" }
            ]
        };
        agregarProyecto(nuevo);
        setProyectos(obtenerProyectos());
        setDatos({ titulo: '', categoria: '', estado: '', descripcion: '', descripcion2: ' ' ,recursos: [null], equipo});
    };
   const[contador, setContador] = useState(0);

    useEffect(() => {
        console.log('Se creo un proyecto a las: ', new Date());
    }, [contador]);

    return (
        <div className="card shadow-sm mb-5 p-4 border-primary">
            <h3 className="text-primary mb-3 text-center">Registrar Nuevo Proyecto</h3>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-5">
                    <input 
                        type="text"
                        name="titulo"
                        className="form-control"
                        placeholder="Nombre del proyecto"
                        value={titulo} 
                        onChange={(e) => setDatos({...datos, titulo: e.target.value})} 
                        required />
                </div>
                <div className="col-md-5">
                    <input 
                        type="text" 
                        name="categoria" 
                        className="form-control" 
                        placeholder="Categoría" 
                        value={categoria} 
                        onChange={(e) => setDatos({...datos, categoria: e.target.value})} 
                        required />
                </div>
                <div className="col-md-5">
                    <input 
                        type="text" 
                        name="estado" 
                        className="form-control" 
                        placeholder="Estado" 
                        value={estado} 
                        onChange={(e) => setDatos({...datos, estado: e.target.value})} 
                        required />
                </div>
                <div className="col-md-5">
                    <input 
                        type="text" 
                        name="descripcion" 
                        className="form-control" 
                        placeholder="descripcion" 
                        value={descripcion} 
                        onChange={(e) => setDatos({...datos, descripcion: e.target.value})} 
                        /* “Cuando el input cambie,tomá el valor escrito por el usuario,copiá el objeto datos actual,
                        reemplazá la propiedad descripcion con el nuevo valor,y actualizá el estado React.”*/
                        required />
                </div>
                <div className="col-md-5">
                    <input 
                        type="text" 
                        name="recursos" 
                        className="form-control" 
                        placeholder="recursos" 
                        value={recursos} 
                        onChange={(e) => setDatos({...datos, recursos: [e.target.value]})} 
                        required />
                </div> 
                 <div className="col-md-2">
                    <button type="submit" className="btn btn-success w-100 fw-bold" onClick={() => setContador(contador + 1)}>Agregar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioProyecto;

/*<div className="col-md-5">
                    <input 
                        type="text" 
                        name="equipo" 
                        className="form-control" 
                        placeholder="Equipo" 
                        value={equipo} 
                        onChange={(e) => setDatos({...datos,  ...equipo,nombre: e.target.value})} 
                        required />
                </div>  
                <div className="col-md-5">
                    <input 
                        type="text" 
                        name="rol" 
                        className="form-control" 
                        placeholder="Rol" 
                        value={rol} 
                        onChange={(e) => setDatos({...datos, ...equipo, rol: e.target.value})} 
                        required />
                </div> 
               */