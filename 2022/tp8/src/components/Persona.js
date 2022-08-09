import {React,useState} from "react"
import { Outlet, Link, useParams } from "react-router-dom"; 
import ListadoPesonas from "./ListadoPersonas"

 export default function Persona(){
    const [listado,setListado]=useState(ListadoPesonas);
    const{personaId}=useParams();

    return(
      <>
         <div>
            {listado.map((persona=>{
                if(persona.id==personaId){
                    return(
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div classNameName="card mx-auto" style={{width: 30+"%"}}>
                                    <div classNameName="card-body">
                                        <img style={{height: "200px",width: "300px"}} src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" className="card-img-top" alt="empleado"/>
                                        <h5>nombre: </h5><h5 classNameName="card-title">{persona.nombre +" "+ persona.apellido}</h5>
                                        <h5>edad: </h5><h5 classNameName="card-title">{ persona.edad}</h5>
                                        <h5>email: </h5><h5 classNameName="card-title">{ persona.email}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
            }))}
         </div>
      </>
    )
 }