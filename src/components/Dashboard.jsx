
const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Bienvenido al sistema de gestión de proyectos.</p>
            <p>En esta pagina se le brindara la capasidad de cargar proyectos en nuestra plataforma </p>


            <br/>  

            <div className="card shadow-sm mb-3 border-primary">   
                <div className="card-body">
                    <h3 className="card-title text-primary">Métricas Generales</h3>
                     <ul class="list-group list-group-flush">
                        <li>Total de proyectos: 5</li>
                        <li>Proyectos disponibles: 5</li>
                        <li>Proyectos finalizados: 3</li>
                    </ul>
                </div>
            </div>

            <br/>  
        </div>
    );
};

export default Dashboard;