

const ProyectoCard = ({ proyecto, eliminarProyecto }) => {

    const { id, titulo, categoria, estado } = proyecto;
    return (
        <div className="col-md-4 mb-3">
         <div className="card shadow-sm h-100 border-light">
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{titulo}</h5>
                <p className="card-text">
                    <strong>Categoría:</strong> {categoria} <br />
                    <strong>Estado:</strong> <span className="badge bg-info text-dark">{estado}</span>
                </p>
                 <button 
                     className="btn btn-outline-danger btn-sm w-100"
                     onClick={() => eliminarProyecto(id)}
                 >
                     Eliminar Proyecto
                 </button>
            </div>
         </div>
        </div>
    );
};

export default ProyectoCard;