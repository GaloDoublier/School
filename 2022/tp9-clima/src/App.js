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
  const [foto,setFoto]=useState("https://camo.githubusercontent.com/fb8b72757a602dbcee0e2fe2a3c7db9f4963be0f2739bb9fe84ca598edbd5266/68747470733a2f2f6272616e64732e686f6d652d617373697374616e742e696f2f5f2f6f70656e776561746865726d61702f6c6f676f2e706e67")
  
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='row formulario'>    
          <Formulario className="formulario" setTemp={setTemp} setFoto={setFoto} setTempMax={setTempMax} setTempMin={setTempMin} setClima={setClima} setHumedad={setHumedad}/>
          <Clima temp={temp} foto={foto} tempMax={tempMax} tempMin={tempMin} humedad={humedad} clima={clima}/>
        </div>
      </div>
    </>
  );
}

export default App;
