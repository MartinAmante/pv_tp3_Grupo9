import { eliminarProyecto, obtenerProyectos, buscarProyecto } from '../services/proyectoService';

const ListaProyectos = ({ proyectosState, setProyectos }) => {

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
            <h2 className="mb-4 text-center">Listado de Proyectos</h2>

            <div className="mb-4">
                <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Filtrar proyectos..." 
                    onChange={handleBuscar} 
                />
            </div>

            <div className="row">
                {proyectosState.map((proyecto) => (
                    <div className="col-md-4 mb-3" key={proyecto.id}>
                        <div className="card shadow-sm h-100 border-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary fw-bold">{proyecto.titulo}</h5>
                                <p className="card-text">
                                    <strong>Categoría:</strong> {proyecto.categoria} <br />
                                    <strong>Estado:</strong> <span className="badge bg-info text-dark">{proyecto.estado}</span>
                                </p>
                                <button 
                                    className="btn btn-outline-danger btn-sm w-100"
                                    onClick={() => handleEliminar(proyecto.id)}
                                >
                                    Eliminar Proyecto
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {proyectosState.length === 0 && (
                <div className="alert alert-warning mt-3 text-center">No se encontraron proyectos que coincidan.</div>
            )}
        </div>
    );
};

export default ListaProyectos;