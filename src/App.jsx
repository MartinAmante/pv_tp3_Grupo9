import Nav from './components/Nav';
import ListaProyectos from './components/ListaProyectos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <main className="container mt-4">
        <h1 className="text-center mb-4">Gestión de Proyectos Educativos</h1>
        <ListaProyectos />
      </main>
    </div>
  );
}

export default App;