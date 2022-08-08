import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Estadisticas from "./components/estadisticas"
import Contacto from "./components/contacto"
import Home from "./components/Home"
import Persona from "./components/Persona"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/persona/:personaId" element={<Persona/>}></Route>
          <Route path="/estadisticas" element={<Estadisticas/>}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<h1 style={{color:"#000"}}>404</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
