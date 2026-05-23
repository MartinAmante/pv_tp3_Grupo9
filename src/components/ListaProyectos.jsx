import { eliminarProyecto, obtenerProyectos, buscarProyecto } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = ({ proyectosState, setProyectos, onVerDetalle }) => {

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
                    <ProyectoCard 
                        key={proyecto.id} 
                        proyecto={proyecto} 
                        eliminarProyecto={handleEliminar} 
                        onVerDetalle={onVerDetalle} 
                    />
                ))}
            </div>
            
            {proyectosState.length === 0 && (
                <div className="alert alert-warning mt-3 text-center">No se encontraron proyectos que coincidan.</div>
            )}
        </div>
    );
};

export default ListaProyectos;