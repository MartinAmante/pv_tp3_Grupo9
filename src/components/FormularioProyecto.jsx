import { useState } from 'react';
import { agregarProyecto, obtenerProyectos } from '../services/proyectoService';

const FormularioProyecto = ({ setProyectos }) => {

    const [datos, setDatos] = useState({
        titulo: '',
        categoria: '',
        estado: ''
    });

    const { titulo, categoria, estado } = datos;

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevo = {
            id: Date.now(),
            titulo,
            categoria,
            estado
        };
        agregarProyecto(nuevo);
        setProyectos(obtenerProyectos());
        setDatos({ titulo: '', categoria: '', estado: '' });
    };

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
                <div className="col-md-2">
                    <button type="submit" className="btn btn-success w-100 fw-bold">Agregar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioProyecto;