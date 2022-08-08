import logo from './logo.svg';
import './App.css';
import {Formulario} from "./components/formulario.js"
import ListadoCitas from './components/listadoCitas';
import {useState} from "react"

function App() {
  const [citas, setCitas]= useState([{Mascota:"Nina",Duenio:"Martin",Fecha:"2021-08-05",Hora:"08:20",Sintomas:"Le duele la pierna", Id: 0},]);
  return (
    <div id="root">
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className="container">
      <div className="row">
        <Formulario listado={citas} setCitas={setCitas}/>
        <ListadoCitas listado={citas} setCitas={setCitas}/>
        </div>
      </div>
    </div>
  );
}

export default App;
