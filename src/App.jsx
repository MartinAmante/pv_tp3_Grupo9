import { useState } from 'react';
import { obtenerProyectos } from './services/proyectoService';
import Nav from './components/Nav';
import Header from './components/Header';
import FormularioProyecto from './components/FormularioProyecto';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [proyectos, setProyectos] = useState(obtenerProyectos());

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Nav />
      <main className="container my-5 flex-grow-1">
        {/* AQUÍ ESTÁ EL AGREGAR QUE TE FALTA */}
        <FormularioProyecto setProyectos={setProyectos} />
        
        <hr className="my-5" />
        
        <ListaProyectos proyectosState={proyectos} setProyectos={setProyectos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;