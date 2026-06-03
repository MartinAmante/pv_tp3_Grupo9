const DetalleProyecto = ({ proyecto }) => {

    if (!proyecto) {
        return (
            <div>Seleccione un proyecto para ver el detalle</div>
        );
    }

    const {
        titulo,
        categoria,
        estado,
        descripcion,
        descripcion2,
        recursos,
        equipo
    } = proyecto;

    return (
        <div>
            <br/>
            <h2>{titulo}</h2>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
            <hr />
            <h4>Descripción</h4>
            <p>{descripcion}</p>
            <p>{descripcion2}</p>
            <hr /> 
            <h4>Recursos</h4>
           <ul>{/*index=indice  key=nombre de li "debe ser unico"*/}
                {recursos.map((recurso, index) => ( 
                    <li key={index}>{recurso}</li>
                ))}
            </ul>
            <hr />
           <h4>Equipo</h4>
            <ul>{/*Recorré el array equipo, sacá nombre y rol de cada objeto y mostralos en una lista.”*/}
                {equipo.map(({ nombre, rol }, index) => (
                    <li key={index}>
                        {nombre} - {rol}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetalleProyecto;
