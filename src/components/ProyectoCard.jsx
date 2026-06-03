import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';

const ProyectoCard = ({ proyecto, eliminarProyecto }) => {

    const { id, titulo, categoria, estado, disponibilidad } = proyecto;
    return (
        <div className="col-md-4 mb-3">
        <Card className="shadow-sm h-100 border-light">
            <CardBody className="d-flex flex-column justify-content-between">
                <div>
                    <CardTitle className="text-primary fw-bold">{titulo}</CardTitle>
                    <CardText>
                        <strong>Categoría:</strong> {categoria} <br />
                        <strong>Estado:</strong> <span className="badge bg-info text-dark">{estado}</span> <br />
                        <strong>Disponibilidad:</strong>{' '}
                            <span className={`badge ${disponibilidad ? 'bg-success' : 'bg-secondary'}`}>
                                {disponibilidad ? '✅ ' : '❌ '}
                            </span>
                    </CardText>
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
            </CardBody>
            </Card>
            </div>
    );
};

export default ProyectoCard;