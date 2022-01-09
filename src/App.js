import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";


import './styles.css';

// https://sujeitoprogramador.com/r-api/?api=filmes/
 
function App() {
  return (
    <div className="App">
      
      <Outlet />
    </div>
  );
}

export default App;
