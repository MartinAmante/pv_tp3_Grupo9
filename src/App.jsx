import { useState, useEffect, useRef } from 'react';
import { 
  obtenerProyectos, 
  agregarProyecto, 
  eliminarProyecto, 
  obtenerProyectoPorDisponible, 
  obtenerProyectosPorId 
} from './services/proyectoService';

import Nav from './components/Nav';
import Header from './components/Header';
import FormularioProyecto from './components/FormularioProyecto';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import Footer from './components/Footer';
import RegistroActividad from './components/RegistroActividad';
import { Routes, Route, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PerfilUsuario from './components/PerfilUsuario';
import './App.css';

function App() {
  const [proyectos, setProyectos] = useState(() => obtenerProyectoPorDisponible());
  const [ultimaActividad, setUltimaActividad] = useState("");
  const primeraCarga = useRef(true);
  const [actividadReal, setActividadReal] = useState(0);
  const [actividadEliminar, setActividadEliminar] = useState(0);
  const [actividadAgregar, setActividadAgregar] = useState(0);

  const ProyectoDetalleWrapper = () => {
    const { id } = useParams();
    const proyecto = obtenerProyectosPorId(Number(id));
    return <DetalleProyecto proyecto={proyecto} />;
  };

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }

    const fechaActual = new Date();
    const fecha = fechaActual.toLocaleDateString();
    const hora = fechaActual.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    setUltimaActividad(`${fecha} a las ${hora} hs.`);
  }, [actividadReal]);// declara la hora y fecha actual

  const handleAgregarProyecto = (nuevoProyecto) => { // manejar Agregar proyecto
    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectoPorDisponible());
    setActividadReal(prev => prev + 1);
    setActividadAgregar(prev => prev + 1);
  };

  const handleEliminarProyecto = (id) => { // manejar Eliminar proyecto
    eliminarProyecto(id);
    setProyectos(obtenerProyectoPorDisponible());
    setActividadReal(prev => prev + 1);
    setActividadEliminar(prev => prev + 1);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">{/*“Creá un contenedor flex vertical que ocupe toda la altura de la pantalla*/}
      <Header />
      <Nav />
      <main className="container my-5 flex-grow-1">

        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/proyectos"
            element={
              <>
                <FormularioProyecto
                  onAgregarProyecto={handleAgregarProyecto}
                />

                <hr className="my-5" />

                <ListaProyectos
                  proyectosState={proyectos}
                  onEliminarProyecto={handleEliminarProyecto}
                  actividadEliminar={actividadEliminar}
                  actividadAgregar={actividadAgregar}
                />

                <RegistroActividad fecha={ultimaActividad} />
              </>
            }
          />

          <Route
            path="/proyectos/:id"
            element={<ProyectoDetalleWrapper />}
          />

          <Route
            path="/perfil"
            element={<PerfilUsuario />}
          />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
/*
    sección 1: React Router
    

    ✅ Botón “Ver Detalle”

    Dentro de:

    ProyectoCard

    Modificar:

    “Ver detalle”

    Para usar:

    <Link to={/proyectos/${id}}>

    Porque el TP lo pide explícitamente en:

    “El botón ‘Ver Detalle’ de las tarjetas ahora debe cambiar para utilizar los enlaces de React Router.”

    Además debería encargarse de:
    navegación SPA
    
    menú visual
    active links
    responsive navbar (si quieren sumar puntos)
*/