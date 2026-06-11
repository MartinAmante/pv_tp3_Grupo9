const PerfilUsuario = () => {

    return (
        <div className="container d-flex justify-content-center">
            {/* Mantenemos la tarjeta de tu compañero pero centrada y con un ancho máximo */}
            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-primary" style={{ maxWidth: "500px", width: "100%" }}>
                <div className="card-body">
                    {/* Título estilizado con tipografía Bootstrap */}
                    <h2 className="card-title h4 fw-bold mb-4 text-primary">Perfil de Profesor</h2>
                    
                    {/* Transformamos los párrafos en una lista limpia y elegante */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 py-2">
                            <div className="text-muted small">Nombre</div>
                            <div className="fw-semibold text-dark">Gustvo Sosa</div>
                        </li>
                        <li className="list-group-item px-0 py-2">
                            <div className="text-muted small">Rol</div>
                            <div className="fw-semibold text-dark">Profesor</div>
                        </li>
                        <li className="list-group-item px-0 py-2">
                            <div className="text-muted small">Institución</div>
                            <div className="fw-semibold text-dark">Facultad de Ingeniería</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PerfilUsuario;
