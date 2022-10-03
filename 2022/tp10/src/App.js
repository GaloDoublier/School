import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './Componentes/Contacto';
import BiggerProductos from './Componentes/productos/BiggerProductos';
import Nosotros from './Componentes/Nosotros';
import Home from './Componentes/Home';
import Layout from "./Componentes/Layout"
import styles from "./styles.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/quienes-somos" element={<Nosotros />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/productos" element={<BiggerProductos />}></Route>
          <Route path="/carrito"></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
