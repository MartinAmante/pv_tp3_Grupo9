let proyectos = [
    {   id: 1, 
        titulo: "Sistema de Control de Stock", 
        descripcion: "Sistema para administrar productos y ventas de un comercio.", 
        descripcion2: "Permite controlar el stock y organizar la información comercial.", 
        categoria: "Comercio", 
        estado: "Pendiente",
        recursos: ["PDF", "Drive", "GitHub"],
        equipo: [
            { nombre: "Matias", rol: "Frontend" },
            { nombre: "Fernando", rol: "Backend" }
        ]
    },

    {   id: 2, 
        titulo: "App de Clima Jujuy",
        descripcion: "Aplicación que muestra el clima actual de Jujuy.",
        descripcion2: "Incluye temperatura, humedad y pronóstico semanal.", 
        categoria: "Tecnología", 
        estado: "En Proceso",
        recursos: ["PDF", "Drive", "GitHub"],
        equipo: [
            { nombre: "Fernando", rol: "Diseño UI" },
            { nombre: "Tomas", rol: "Developer" }
        ]
    },

    {   id: 3, 
        titulo: "Gestión de Biblioteca",
         descripcion: "Sistema para registrar libros y préstamos de biblioteca.",
        descripcion2: "Facilita la búsqueda y control de material educativo.", 
        categoria: "Educación", 
        estado: "Finalizado",
        recursos: ["PDF", "Drive", "GitHub"],
        equipo: [
            { nombre: "Matias", rol: "Frontend" },
            { nombre: "Mauricio", rol: "Base de Datos" }
        ]
    },
    
    {   id: 4, 
        titulo: "Monitor de Energía", 
         descripcion: "Proyecto orientado al control del consumo energético.",
        descripcion2: "Permite visualizar estadísticas y optimizar el uso de energía.",
        categoria: "Tecnología", 
        estado: "Pendiente",
        recursos: ["PDF", "Drive", "GitHub"],
        equipo: [
            { nombre: "Martin", rol: "Backend" },
            { nombre: "Fernando", rol: "Tester" }
        ]
    },
    
    {   id: 5, 
        titulo: "Eco-App Reciclaje", 
         descripcion: "Aplicación para promover el reciclaje y cuidado ambiental.",
        descripcion2: "Brinda información sobre separación y reutilización de residuos.",
        categoria: "Ambiente", 
        estado: "En Proceso",
        recursos: ["PDF", "Drive", "GitHub"], 
        equipo: [
            { nombre: "Tomas", rol: "Frontend" },
            { nombre: "Mauricio", rol: "Coordinador" }
        ]
    }
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