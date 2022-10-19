import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {React,createContext, useState}from "react"
import Contacto from './Componentes/Contacto';
import BiggerProductos from './Componentes/productos/BiggerProductos';
import Nosotros from './Componentes/Nosotros';
import Home from './Componentes/Home';
import Layout from "./Componentes/Layout"
import styles from "./styles.css"


export const CarritoContext = createContext();

function App() {
  const [productosCarrito,setProductos]=useState(["holaaa","chauuu"]);
  return (
    <BrowserRouter>
        <CarritoContext.Provider value={{productosCarrito,setProductos}}>
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
      </CarritoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
