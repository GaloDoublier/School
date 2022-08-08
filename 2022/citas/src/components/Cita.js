import { PROPERTY_TYPES } from "@babel/types";
import {React} from "react";
import {} from "../App"


export default function cita({props}){

    return(
    <div className="cita">
            <p>Mascota: <span>{props.c.Mascota}</span></p>
            <p>Dueño: <span>{props.c.Duenio}</span></p>
            <p>Fecha: <span>{props.c.Fecha}</span></p>
            <p>Hora: <span>{props.c.Hora}</span></p>
            <p>Sintomas: <span>{props.c.Sintomas}</span></p><button onClick={()=>{props.eliminarCita(props.c.Id)}} className="button elimnar u-full-width">Eliminar
              ×</button>
          </div>
    )
}