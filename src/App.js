import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Calc from './Calc';
import Docs from './Docs';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <nav>
                <button>
                  <Link to="/">Home</Link>
                </button>
                <button>
                  <Link to="/calc">Kalkulator</Link>
                </button>
                <button>
                  <Link to="/docs">Dokumentacja</Link>
                </button>

                  

                  

            </nav>
            <Routes>
              <Route path="/calc" element={<Calc/>}/>

              <Route path="/docs" element={<Docs/>}/>

              <Route path="/" element={<Home/>}/>

            </Routes>
              

          </div>
        </BrowserRouter>
        <footer>
          Realizacja zadania nr1 w ramach laboratorium PFSwCO Adriana Osmulska
        </footer>

    </div>
  );
}

export default App;
