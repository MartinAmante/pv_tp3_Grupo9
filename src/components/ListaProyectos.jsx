import { useState } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());

    const handleEliminar = (id) => {
        eliminarProyecto(id);
        setProyectos(obtenerProyectos());
    };

    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectos(resultados);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Listado de Proyectos</h2>

            <div className="mb-4">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar por título..." 
                    onChange={handleBuscar} 
                />
            </div>

            <div className="row">
                {proyectos.map((proyecto) => (
                    <div className="col-md-4 mb-3" key={proyecto.id}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{proyecto.titulo}</h5>
                                <p className="card-text">
                                    <strong>Categoría:</strong> {proyecto.categoria} <br />
                                    <strong>Estado:</strong> {proyecto.estado}
                                </p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleEliminar(proyecto.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {proyectos.length === 0 && (
                <div className="alert alert-warning mt-3">No se encontraron proyectos.</div>
            )}
        </div>
    );
};

export default ListaProyectos;