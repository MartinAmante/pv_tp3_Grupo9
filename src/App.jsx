import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import ListaProyectos from './components/ListaProyectos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      
      <main className="container mt-4">
        <h1 className="text-center mb-4">Gestión de Proyectos Educativos</h1>
        <ListaProyectos />  
      </main>

      <Footer />
    </div>
  );
}

export default App;