

const ProyectoCard = ({ proyecto, eliminarProyecto, onVerDetalle }) => {

    const { id, titulo, categoria, estado } = proyecto;
    return (
        <div className="col-md-4 mb-3">
         <div className="card shadow-sm h-100 border-light">
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-primary fw-bold">{titulo}</h5>
                    <p className="card-text">
                        <strong>Categoría:</strong> {categoria} <br />
                        <strong>Estado:</strong> <span className="badge bg-info text-dark">{estado}</span>
                    </p>
                </div>
                <div className="mt-3">
                    <button 
                        className="btn btn-primary btn-sm w-100 mb-2"
                        onClick={() => onVerDetalle(proyecto)}
                    >
                        Ver Detalle
                    </button>
                    <button 
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => eliminarProyecto(id)}
                    >
                        Eliminar Proyecto
                    </button>
                </div>
            </div>
         </div>
        </div>
    );
};

export default ProyectoCard;