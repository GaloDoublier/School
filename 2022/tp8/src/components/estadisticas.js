import React from "react"
import ListadoPesonas from "./ListadoPersonas"
import { Link} from "react-router-dom";

 export default function Estadisticas(){
   let listado= ListadoPesonas
   let mayores35 = listado.filter((persona)=>persona.edad>35)
   let mayorEdad = 0
   let mayores =[]
   let menorEdad = 1000
   let menores = []
   
    return(
      <>            
            <h1>estadisticas</h1>
            <h4>mayores de 35 años:</h4>
            <div className="row">


            {mayores35.map((mayor)=>{
               return(
               <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="card" style={{width: 100+"%", margin: 5+"px",padding:"10px"}}>
                     <div className="card-body">
                        <h5 className="card-title">{mayor.nombre+ " "+ mayor.apellido}</h5>
                        <Link className="btn btn-secondary" to={'/persona/'+mayor.id}>mas info</Link>
                     </div>
                  </div>
            </div>
            )})}
            {
               listado.map((mayor)=>{
                  if(mayor.edad>mayorEdad){
                     mayores = [mayor]
                     mayorEdad = mayor.edad  
                  } else if( mayor.edad == mayorEdad){
                     mayores.push(mayor)
                  }

               })
               
            }
            {
               listado.map((menor)=>{
                  if(menor.edad<menorEdad){
                     menores = [menor]
                     menorEdad = menor.edad  
                  } else if( menor.edad == menorEdad){
                     menores.push(menor)
                  }

               })
               
            }
            <h4>personas mas ancianas: {mayores.map((mayores)=> {return(
               <div className="col-lg-3 col-md-3 col-sm-6">
               <div className="card" style={{width: 100+"%", margin: 5+"px",padding:"10px"}}>
                  <div className="card-body">
                     <h5 className="card-title">{mayores.nombre+ " "+ mayores.apellido}</h5>
                     <Link className="btn btn-secondary" to={'/persona/'+mayores.id}>mas info</Link>
                  </div>
               </div>
         </div>
            )})}</h4>
            <h4>personas mas jovenes: {menores.map((menores)=> {return(
               <div className="col-lg-3 col-md-3 col-sm-6">
               <div className="card" style={{width: 100+"%", margin: 5+"px",padding:"10px"}}>
                  <div className="card-body">
                     <h5 className="card-title">{menores.nombre+ " "+ menores.apellido}</h5>
                     <Link className="btn btn-secondary" to={'/persona/'+menores.id}>mas info</Link>
                  </div>
               </div>
         </div>
               )})}</h4>
            {console.log(menores)}
         </div>
      </>
    )
 }
