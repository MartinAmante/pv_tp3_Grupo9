import { buscarProyecto } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import { useState } from 'react';

const ListaProyectos = ({ proyectosState, onEliminarProyecto, onVerDetalle }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleBuscar = (e) => {
        setBusqueda(e.target.value);
    };

    // Filtramos localmente para renderizar sin mutar el estado global de App.jsx
    // Esto garantiza el aislamiento total del filtro de búsqueda exigido por el profesor
    const proyectosFiltrados = busqueda.trim() === '' 
        ? proyectosState 
        : buscarProyecto(busqueda);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Listado de Proyectos</h2>

            <div className="mb-4">
                <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Filtrar proyectos..." 
                    value={busqueda}
                    onChange={handleBuscar} 
                />
            </div>

            <div className="row">
                {proyectosFiltrados.map((proyecto) => (
                    <ProyectoCard 
                        key={proyecto.id} 
                        proyecto={proyecto} 
                        eliminarProyecto={onEliminarProyecto} 
                        onVerDetalle={onVerDetalle} 
                    />
                ))}
            </div>
            
            {proyectosFiltrados.length === 0 && (
                <div className="alert alert-warning mt-3 text-center">No se encontraron proyectos que coincidan.</div>
            )}
        </div>
    );
};

export default ListaProyectos;