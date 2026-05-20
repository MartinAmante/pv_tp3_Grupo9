import { useState } from 'react';
import { obtenerProyectos } from './services/proyectoService';
import Nav from './components/Nav';
import Header from './components/Header';
import FormularioProyecto from './components/FormularioProyecto';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [proyectos, setProyectos] = useState(obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Nav />
      <main className="container my-5 flex-grow-1">
        
        <FormularioProyecto setProyectos={setProyectos} />
        
        <hr className="my-5" />
        
        <div className="row">
          <div className="col-lg-8">
            <ListaProyectos 
              proyectosState={proyectos} 
              setProyectos={setProyectos}  
              onVerDetalle={setProyectoSeleccionado} 
            />
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