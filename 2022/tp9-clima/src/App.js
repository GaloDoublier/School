import logo from './logo.svg';
import { useState } from 'react';
import axios from "axios"
import './App.css';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Clima from "./components/Clima"

function App() {
  const [temp,setTemp] = useState("")
  const [tempMin,setTempMin]=useState("")
  const [tempMax,setTempMax]=useState("")
  const [humedad,setHumedad]=useState("")
  const [clima,setClima] =useState("")
  
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='row formulario'>    
          <Formulario className="formulario" setTemp={setTemp} setTempMax={setTempMax} setTempMin={setTempMin} setClima={setClima} setHumedad={setHumedad}/>
          <Clima temp={temp} tempMax={tempMax} tempMin={tempMin} humedad={humedad} clima={clima}/>
        </div>
      </div>
    </>
  );
}

export default App;
