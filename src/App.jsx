import Nav from './components/Nav';
import ListaProyectos from './components/ListaProyectos';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* PUNTO 3: Barra de navegación subida por tu compañero */}
      <Nav />
      
      <main className="container mt-4">
        {/* Título principal solicitado en el layout */}
        <h1 className="text-center mb-4">Gestión de Proyectos Educativos</h1>
        
        {/* PUNTO 4: Tu componente de listado, búsqueda y borrado */}
        <ListaProyectos />
      </main>
    </div>
  );
}

export default App;