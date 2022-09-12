import { useState } from 'react';
export default function (props){
    const [ciudad,setCiudad] = useState("Madrid")
    const [pais,setPais] = useState("España")
    const  traerInfo = (c,p) => {
            props.setTemp("Cargando...")
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+c+","+p+"&APPID=467eb2e2a1738c82e813a30610d7c354")
          .then(res=>res.json())
          .then(data=>{
            if(data.cod=="404"){
                alert("Localidad no encontrada")
            }
            else{
            console.log(data)
            props.setTemp((data.main.temp-273.15).toFixed(2))
            props.setTempMax((data.main.temp_max-273.15).toFixed(2))
            props.setTempMin((data.main.temp_min-273.15).toFixed(2))
            props.setHumedad(data.main.humidity)
            props.setClima(data.weather[0].description)
            props.setFoto("http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png")
            }
          })
       }
    return(
        <>

            <div className='col-6'>
            <h2>Ciudad</h2>
            <input className="input" onChange={(t) => setCiudad(t.target.value)} type="text" placeholder='ingrese la ciudad'></input>
            <h2>País</h2>
            
            <input className="input" onChange={(t) => setPais(t.target.value)} type="text" placeholder='ingrese el pais'></input>
            <button onClick={() => {
                if (ciudad == "" || pais == "") {
                    alert("ingresa los datos crack")
                }
                else {
                    traerInfo(ciudad, pais)
                }

            }}>buscar</button>
            </div>
        </>
    )
}