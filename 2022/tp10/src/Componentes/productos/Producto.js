import {useContext, useEffect, useState} from "react";
import { CarritoContext } from "../../App";

export default function Producto(props){

        const a = useContext(CarritoContext)
        const [compra,setCompra]=useState(false)
        const [contador,setContador]=useState(a.productosCarrito.length)

        let datos ={
            nombre:props.nombre,
            precio:props.precio,
            descripcion:props.descripcion,
            foto:props.foto
        }


        function agregar(){
            setCompra(true)
            setContador(contador+1)
            a.setProductos([...a.productosCarrito,datos])
        }
        
        function Eliminar(){
            setContador(contador-1)
            a.setProductos(
                a.productosCarrito.filter((productos,item)=> a.productosCarrito.indexOf(item)!=item)
            )
        }

        useEffect(()=>{
            if(contador==0){
                setCompra(false)
            }
        },[contador])


    if(compra){
        return(
            <div className="col-md-4 carta">
                      <div className="card tarjeta" /*style=" margin-top: 20px;"*/>
                          <img src={props.foto} style={{width:100+"%",height:300}} className="card-img-top tarjeta2" /*style="padding: 8px;"*/ alt="lavatorios"/>
                          <div className="card-body text-center">
                              <b className="card-title ">{props.nombre}</b>
                              <p className="card-text">${props.precio}</p>
                              <p className="card-text">{props.descripcion}</p>
                              <div style={{display:"inline"}}>
                                <p>agregado</p><button class="btn btn-primary" onClick={()=>agregar()}>+</button><span>{contador}</span><button class="btn btn-primary" onClick={()=>Eliminar()}>-</button>
                              </div>  
                          </div>
                      </div>
                  </div>
        )
    }
    else{
        return(
            <div className="col-md-4 carta">
                      <div className="card tarjeta" /*style=" margin-top: 20px;"*/>
                          <img src={props.foto} style={{width:100+"%",height:300}} className="card-img-top tarjeta2" /*style="padding: 8px;"*/ alt="lavatorios"/>
                          <div className="card-body text-center">
                              <b className="card-title ">{props.nombre}</b>
                              <p className="card-text">${props.precio}</p>
                              <p className="card-text">{props.descripcion}</p>
                              <button class="btn btn-primary" onClick={()=>agregar()}>agregar</button>
                          </div>
                      </div>
                  </div>
        )
    }
    
}