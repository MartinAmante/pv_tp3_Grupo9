import { eliminarProyecto, obtenerProyectos, buscarProyecto, obtenerProyectoPorDisponible  } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import { useState, useEffect } from 'react';

const ListaProyectos = ({ proyectosState, setProyectos, onVerDetalle,  setActividadReal }) => {


    const[contador, setContador] = useState(0);
    
    const handleEliminar = (id) => {
        eliminarProyecto(id);
        setProyectos(obtenerProyectoPorDisponible());
        setActividadReal(prev => prev + 1);
        setContador(prev => prev + 1);
    };

    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectos(resultados);
    };
    

        useEffect(() => {
            if (contador === 0) return; // Evitar log en la primera carga
            console.log('Se elimino un proyecto a las: ', new Date());
        }, [contador]);

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