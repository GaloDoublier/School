import {useState} from "react"
import ListadoPesonas from "./ListadoPersonas"
import { Link} from "react-router-dom";


export default function Home(){

    
const [listado,setListado]=useState(ListadoPesonas);

    return(
        <>
            <div>
                <h1>Personas</h1>
                <div className="row">
                {listado.map((persona)=> {
                    return(

                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="card" style={{width: 100+"%", margin: 5+"px",padding:"10px"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{persona.nombre +" "+ persona.apellido}</h5>
                                        <Link className="btn btn-secondary" to={'/persona/'+persona.id}>mas info</Link>
                                    </div>
                                </div>
                            </div>

                    )
                })}
                </div>
            </div>
        </>
    )
}