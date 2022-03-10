import './App.css';
import Bloque1 from './assets/components/Bloque1';
import Cards from './assets/components/Cards';
import NavBar from './assets/components/NavBar';
import Products from './assets/components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import githubsvg from "./github.svg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Bloque1/>
      <Cards/>
      <Products/>
      <div className='footer'>
        <img src={githubsvg} alt="githublogo" className='github'/>
        <p className='footerText'>View this repository</p>
      </div>
    </div>
  );
}

export default App;
