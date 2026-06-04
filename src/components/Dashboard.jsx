const Dashboard = () => {
    return (
        <div className="container-fluid">
            {/* Título y textos principales con tipografía de Bootstrap */}
            <h2 className="display-6 fw-bold mb-3">Dashboard</h2>
            <p className="lead text-muted">Bienvenido al sistema de gestión de proyectos.</p>
            <p className="text-secondary">En esta pagina se le brindara la capasidad de cargar proyectos en nuestra plataforma </p>

            <br/>  

            {/* Tarjeta de métricas que armó tu compañero con estilos mejorados */}
            <div className="card shadow-sm mb-3 border-primary" style={{ maxWidth: "500px" }}>   
                <div className="card-body">
                    <h3 className="card-title text-primary h4 fw-bold mb-3">Métricas Generales</h3>
                    
                    {/* Lista estilizada con alineación flex y badges (pastillas) redondas de colores */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span>Total de proyectos:</span>
                            <span className="badge bg-primary rounded-pill">5</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span>Proyectos disponibles:</span>
                            <span className="badge bg-success rounded-pill">5</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span>Proyectos finalizados:</span>
                            <span className="badge bg-secondary rounded-pill">3</span>
                        </li>
                    </ul>
                </div>
            </div>

            <br/>  
        </div>
    );
};

export default Dashboard;