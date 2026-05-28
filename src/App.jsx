import { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, obtenerProyectoPorDisponible } from './services/proyectoService';
import Nav from './components/Nav';
import Header from './components/Header';
import FormularioProyecto from './components/FormularioProyecto';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import Footer from './components/Footer';
import './App.css';
import RegistroActividad from './components/RegistroActividad';

function App() {
  const [proyectos, setProyectos] = useState(obtenerProyectoPorDisponible());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActividad, setUltimaActividad] = useState("");
  const primeraCarga = useRef(true);
  const [actividadReal, setActividadReal] = useState(0);
  const [actividadEliminar, setActividadEliminar] = useState(0);
  const [actividadAgregar, setActividadAgregar] = useState(0);

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
  }, [actividadReal]);

  const handleAgregarProyecto = (nuevoProyecto) => {
    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectoPorDisponible());
    setActividadReal(prev => prev + 1);
    setActividadAgregar(prev => prev + 1);
  };

  const handleEliminarProyecto = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectoPorDisponible());
    setActividadReal(prev => prev + 1);
    setActividadEliminar(prev => prev + 1);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Nav />
      <main className="container my-5 flex-grow-1">
        
        <FormularioProyecto onAgregarProyecto={handleAgregarProyecto} />
        
        <hr className="my-5" />
        
        <div className="row">
          <div className="col-lg-8">
            <ListaProyectos 
              proyectosState={proyectos} 
              onEliminarProyecto={handleEliminarProyecto}  
              onVerDetalle={setProyectoSeleccionado}
              actividadEliminar={actividadEliminar}
              actividadAgregar={actividadAgregar}
            />

            <RegistroActividad fecha={ultimaActividad} />
          </div>
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '20px' }}>
              <DetalleProyecto proyecto={proyectoSeleccionado} />
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;