import {React} from "react";  
import Cita from "./Cita"

export default function ListadoCitas(props){
  function eliminarCita(id){
    let NuevaLista = props.listado.filter(cita => id !== props.listado.Id)
    props.setCitas(NuevaLista);
    console.log("asd "+NuevaLista)
  }
    return(
        <div className="one-half column">
          { props.listado.map((c) => <Cita props={{c,eliminarCita}} Id={c.Id} mascota={c.Mascota} duenio={c.Duenio} fecha={c.Fecha} hora={c.Hora} sintomas={c.Sintomas}/>)}
        </div>
    )
}