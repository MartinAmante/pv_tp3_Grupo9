import { useState,useEffect } from 'react';

const FormularioProyecto = ({ onAgregarProyecto }) => {
    const [titulo, setTitulo] = useState('');  
    const [categoria, setCategoria] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const [recursoPdf, setRecursoPdf] = useState('');
    const [recursoGithub, setRecursoGithub] = useState('');
    const [recursoDrive, setRecursoDrive] = useState('');

    const [nombre1, setNombre1] = useState('');
    const [rol1, setRol1] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [rol2, setRol2] = useState('');

    const [disponibilidad, setDisponibilidad] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); {/*no renderices todavia*/}

        const listaRecursos = [];
        {/*se ingreso algo en el campo recursos? */}
        if (recursoPdf) listaRecursos.push(`pdf: ${recursoPdf}`);
        if (recursoDrive) listaRecursos.push(`drive: ${recursoDrive}`);
        if (recursoGithub) listaRecursos.push(`github: ${recursoGithub}`);

        const listaEquipo = [];
        if (nombre1) {
            listaEquipo.push({ nombre: nombre1, rol: rol1 || 'Desarrollador' });
        }
        if (nombre2) {
            listaEquipo.push({ nombre: nombre2, rol: rol2 || 'Desarrollador' });
        }

        const nuevo = { //variables de los useState
            id: Date.now(),
            titulo,
            categoria,
            estado,
            disponibilidad,
            descripcion: descripcion || 'Sin descripción disponible.',
            descripcion2: '', 
            recursos: listaRecursos,
            equipo: listaEquipo
        };

        onAgregarProyecto(nuevo);
        
        setTitulo('');
        setCategoria('');
        setEstado('');
        setDisponibilidad(false);
        setDescripcion('');
        setRecursoPdf('');
        setRecursoGithub('');
        setRecursoDrive('');
        setNombre1('');
        setRol1('');
        setNombre2('');
        setRol2('');
    };
  

   

    return (
        <div className="card shadow-sm mb-5 p-4 border-primary">
            <h3 className="text-primary mb-4 text-center">Registrar Nuevo Proyecto</h3>
            <form onSubmit={handleSubmit} className="row g-3"> {/*cuando el formulario es enviado ejecutas handleSubmit */}
                
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Nombre del proyecto" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />
                </div>

                <div className="col-12">                                                                {/*value=lo que se encuentre en el cuadro de texto */}
                    <textarea className="form-control" placeholder="Descripción del proyecto" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
                </div>                                                                                                    {/*cuando el formulario cambie pasacelo a la afuncion anclada*/}

                <div className="col-12">
                    <input className="form-check-input" type="checkbox" id="checkDisponibilidad" checked={disponibilidad} onChange={(e) => setDisponibilidad(e.target.checked)} />
                    <label className="form-check-label" htmlFor="checkDisponibilidad"> Disponible</label>
                </div>
                

                {/* Sección Recursos Digitales */}
                <div className="col-12 mt-4">
                    <h5 className="text-secondary border-bottom pb-2">Recursos Digitales</h5>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="pdf: https://ejemplo.com/tareas.pdf" value={recursoPdf} onChange={(e) => setRecursoPdf(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="drive: https://drive.google.com/..." value={recursoDrive} onChange={(e) => setRecursoDrive(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="github: https://github.com/..." value={recursoGithub} onChange={(e) => setRecursoGithub(e.target.value)} />
                </div>

                <div className="col-12 mt-4">
                    <h5 className="text-secondary border-bottom pb-2">Equipo del Proyecto</h5>
                </div>
                
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nombre Integrante 1" value={nombre1} onChange={(e) => setNombre1(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Rol en el equipo (Integrante 1)" value={rol1} onChange={(e) => setRol1(e.target.value)} required />
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nombre Integrante 2" value={nombre2} onChange={(e) => setNombre2(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Rol en el equipo (Integrante 2)" value={rol2} onChange={(e) => setRol2(e.target.value)} />
                </div>

                <div className="col-12 text-end mt-4">
                    <button type="submit" className="btn btn-success px-5 fw-bold">Agregar Proyecto</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioProyecto;
