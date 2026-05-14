let proyectos = [
    { id: 1, titulo: "Sistema de Control de Stock", categoria: "Comercio", estado: "Pendiente" },
    { id: 2, titulo: "App de Clima Jujuy", categoria: "Tecnología", estado: "En Proceso" },
    { id: 3, titulo: "Gestión de Biblioteca", categoria: "Educación", estado: "Finalizado" },
    { id: 4, titulo: "Monitor de Energía", categoria: "Tecnología", estado: "Pendiente" },
    { id: 5, titulo: "Eco-App Reciclaje", categoria: "Ambiente", estado: "En Proceso" }
];

export const obtenerProyectos = () => {
    return [...proyectos];
};

export const agregarProyecto = (nuevo) => {
    proyectos = [...proyectos, nuevo];
};

export const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
};

export const buscarProyecto = (termino) => {
    const texto = termino.toLowerCase();
    return proyectos.filter(p => p.titulo.toLowerCase().includes(texto));
};    