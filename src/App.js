import './App.css';
import Bloque1 from './assets/components/Bloque1';
import Cards from './assets/components/Cards';
import NavBar from './assets/components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Bloque1/>
      <Cards/>
    </div>
  );
}

export default App;
