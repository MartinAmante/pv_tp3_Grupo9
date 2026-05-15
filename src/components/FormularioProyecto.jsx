import { useState } from 'react';
import { agregarProyecto, obtenerProyectos } from '../services/proyectoService';

const FormularioProyecto = ({ setProyectos }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevo = {
            id: Date.now(),
            titulo,
            categoria,
            estado: 'Pendiente'
        };
        agregarProyecto(nuevo);
        setProyectos(obtenerProyectos());
        setTitulo('');
        setCategoria('');
    };

    return (
        <div className="card shadow-sm mb-5 p-4 border-primary">
            <h3 className="text-primary mb-3 text-center">Registrar Nuevo Proyecto</h3>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-5">
                    <input type="text" className="form-control" placeholder="Nombre del proyecto" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div className="col-md-5">
                    <input type="text" className="form-control" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-success w-100 fw-bold">Agregar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioProyecto;