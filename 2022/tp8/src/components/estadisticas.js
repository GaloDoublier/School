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
         <div>
            <h1>estadisticas</h1>
            <h4>mayores de 35 años:</h4>
            {mayores35.map((mayor)=>{
               return(
               <div className="card" style={{width: 30+"%"}}>
               <div className="card-body">
                   <h5 className="card-title">{mayor.nombre+ " "+ mayor.apellido}</h5>
                   <Link className="btn btn-primary" to={'/persona/'+mayor.id}>mas info</Link>
               </div>
           </div>
            )})}
            <h4>gente con la mayor edad:</h4>
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
            <h5>personas con mas edad: {mayores.map((mayores)=> {return(mayores.nombre +" "+mayores.edad+" años")})}</h5>
            <h5>personas con menos edad: {menores.map((menores)=> {return(menores.nombre +" "+menores.edad+" años")})}</h5>
            {console.log(menores)}
         </div>
      </>
    )
 }
