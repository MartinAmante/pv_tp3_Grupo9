import { useParams } from "react-router-dom";
import { obtenerProyectosPorId } from "../services/proyectoService";

const DetalleProyecto = () => {
    const {id} = useParams();

    const proyecto = obtenerProyectosPorId(Number(id));

    if (!proyecto) {
        return <div>Proyecto no encontrado</div>;
    }

    const {
        titulo,
        categoria,
        estado,
        descripcion,
        descripcion2,
        recursos,
        equipo
    } = proyecto;

    return (
        <div>
            <h2>{titulo}</h2>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
            <hr />
            <h4>Descripción</h4>
            <p>{descripcion}</p>
            <p>{descripcion2}</p>
            <hr /> 
            <h4>Recursos</h4>
            <ul>
                {recursos.map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>
            <hr />
            <h4>Equipo</h4>
            <ul>
                {equipo.map(( e, i) => (
                    <li key={i}>
                        {e.nombre} - {e.rol}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetalleProyecto;
