
import { eliminarProyecto, obtenerProyectos, buscarProyecto, obtenerProyectoPorDisponible  } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import { useState, useEffect } from 'react';


const ListaProyectos = ({ proyectosState, onEliminarProyecto, onVerDetalle, setActividadReal, actividadAgregar, actividadEliminar }) => {
    const [busqueda, setBusqueda] = useState('');
    const[contador, setContador] = useState(0);

    const handleBuscar = (e) => {
        setBusqueda(e.target.value);
    };
  
    const proyectosFiltrados = busqueda.trim() === '' 
        ? proyectosState 
        : buscarProyecto(busqueda);
  
  
  useEffect(() => {
            if (actividadEliminar === 0) return; // Evitar log en la primera carga
            console.log('Se elimino un proyecto: ', new Date());
        }, [actividadEliminar]);

 useEffect(() => {
        if (actividadAgregar === 0) return; // Evitar log en la primera carga
        console.log('Se creo un proyecto: ', new Date());
    }, [actividadAgregar]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Listado de Pr
                oyectos</h2>

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