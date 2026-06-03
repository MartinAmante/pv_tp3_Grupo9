import { Link } from 'react-router-dom';

const ProyectoCard = ({ proyecto, eliminarProyecto }) => {

    const { id, titulo, categoria, estado, disponibilidad } = proyecto;
    return (
        <div className="col-md-4 mb-3">
         <div className="card shadow-sm h-100 border-light">
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-primary fw-bold">{titulo}</h5>
                    <p className="card-text">
                        <strong>Categoría:</strong> {categoria} <br />
                        <strong>Estado:</strong> <span className="badge bg-info text-dark">{estado}</span> <br />
                        <strong>Disponibilidad:</strong>{' '}
                            <span className={`badge ${disponibilidad ? 'bg-success' : 'bg-secondary'}`}>
                                {disponibilidad ? '✅ ' : '❌ '}
                            </span>
                    </p>
                </div>
                <div className="mt-3">
                    <Link
                        to={`/proyectos/${id}`}
                        className="btn btn-primary btn-sm w-100 mb-2"
                    >
                        Ver Detalle
                    </Link>
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