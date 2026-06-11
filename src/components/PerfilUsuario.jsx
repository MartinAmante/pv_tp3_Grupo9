import React, { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);
    const [formValues, setFormValues] = useState({ ...usuario });

    useEffect(() => {
        setFormValues({ ...usuario });
    }, [usuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actualizarPerfil(formValues);
        setEditando(false);
    };

    return (
        <div className="container d-flex justify-content-center mt-4">
            {/* Mantenemos la tarjeta de tu compañero pero centrada y con un ancho máximo */}
            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-primary" style={{ maxWidth: "500px", width: "100%" }}>
                <div className="card-body">
                    {/* Título estilizado con tipografía Bootstrap */}
                    <h2 className="card-title h4 fw-bold mb-4 text-primary">Perfil de Profesor</h2>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Transformamos los párrafos en una lista limpia y elegante */}
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item px-0 py-2 border-0">
                                <div className="text-muted small">Nombre</div>
                                {editando ? (
                                    <input 
                                        type="text" 
                                        className="form-control mt-1" 
                                        name="nombre"
                                        value={formValues.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <div className="fw-semibold text-dark">{usuario.nombre}</div>
                                )}
                            </li>

                            <li className="list-group-item px-0 py-2 border-0">
                                <div className="text-muted small">DNI</div>
                                {editando ? (
                                    <input 
                                        type="text" 
                                        className="form-control mt-1" 
                                        name="dni"
                                        value={formValues.dni}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <div className="fw-semibold text-dark">{usuario.dni}</div>
                                )}
                            </li>

                            <li className="list-group-item px-0 py-2 border-0">
                                <div className="text-muted small">Rol</div>
                                {editando ? (
                                    <select 
                                        className="form-select mt-1" 
                                        name="rol"
                                        value={formValues.rol}
                                        onChange={handleChange}
                                    >
                                        <option value="Alumno">Alumno</option>
                                        <option value="Docente">Docente</option>
                                    </select>
                                ) : (
                                    <div className="fw-semibold text-dark">{usuario.rol}</div>
                                )}
                            </li>

                            <li className="list-group-item px-0 py-2 border-0">
                                <div className="text-muted small">Institución</div>
                                {editando ? (
                                    <input 
                                        type="text" 
                                        className="form-control mt-1" 
                                        name="institucion"
                                        value={formValues.institucion}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <div className="fw-semibold text-dark">{usuario.institucion}</div>
                                )}
                            </li>
                        </ul>

                        <div className="d-flex justify-content-end gap-2">
                            {editando ? (
                                <>
                                    <button type="submit" className="btn btn-success px-4 shadow-sm">
                                        Guardar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary px-4"
                                        onClick={() => { 
                                            setEditando(false); 
                                            setFormValues({ ...usuario });
                                        }}
                                    >
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <button 
                                    type="button" 
                                    className="btn btn-primary px-4 shadow-sm" 
                                    onClick={() => setEditando(true)}
                                >
                                    Editar Perfil
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PerfilUsuario;
