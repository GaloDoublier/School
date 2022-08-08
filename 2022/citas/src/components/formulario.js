import {React, useState} from "react";
import Error from './Error'


export function Formulario(props){
    let contador = 1;
    const [duenio,setDuenio]=useState("");
    const [fecha,setFecha]=useState("");
    const [hora,setHora]=useState("");
    const [sintomas,setSintomas]=useState("");
    const [mascota,setMascota]=useState("");
    const [Id,setId]=useState(1);

    return(
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width"
              placeholder="Nombre Mascota"   onChange={(rta)=>{setMascota(rta.target.value)}}/>
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(rta)=>{setDuenio(rta.target.value)}}/>
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width" onChange={(rta)=>{setFecha(rta.target.value)}}/>
              <label>hora</label>
              <input type="time" name="hora" className="u-full-width" onChange={(rta)=>{setHora(rta.target.value)}}/>
              <label>Sintomas</label>
              <textarea name="sintomas" classnasme="u-full-width" onChange={(rta)=>{setSintomas(rta.target.value)}}></textarea>
              <button onClick={()=>{
                  setId(Id + 1);
                  contador++
                  let datos= {Mascota:mascota, Duenio:duenio, Fecha:fecha, Hora:hora,Sintomas:sintomas, Id: Id};
                  let valid = true;
                  console.log(props.listado);
                  props.listado.forEach(element => {

                      if(element.Hora == datos.Hora && element.Fecha == datos.Fecha){
                            Error()
                            valid=false
                      }
                  });
                  if(valid){
                    props.setCitas([...props.listado,datos])
                    console.log(props.listado);
                  }

                }} className="u-full-width button-primary">Agregar Cita</button>
                
        </div>
    )
}