import './App.css';
import Bloque1 from './assets/components/Bloque1';
import Cards from './assets/components/Cards';
import NavBar from './assets/components/NavBar';
import Products from './assets/components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Bloque1/>
      <Cards/>
      <Products/>
    </div>
  );
}

export default App;
