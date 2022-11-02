import {useContext, useEffect, useState} from "react";
import { CarritoContext } from "../../App";

export default function Producto(props){

        const a = useContext(CarritoContext)
        const [compra,setCompra]=useState(false)
        const [contador,setContador]=useState(a.productosCarrito.length)

        let cant = 1;

        let datos ={
            nombre:props.nombre,
            precio:props.precio,
            descripcion:props.descripcion,
            foto:props.foto,
            cantidad:cant
        }


        function agregar(){
            setCompra(true)
            setContador(contador+1)
            a.setProductos([...a.productosCarrito,datos])
        }
        
        function Eliminar(){
            setCompra(false)
            setContador(contador-1)
            a.setProductos(
                a.productosCarrito.filter((productos)=> productos.nombre!=datos.nombre)
            )
        }


        //chequear el estado de la compra cuando inicia una pagina
        useEffect(()=>{
            setCompra(false);

            a.productosCarrito.forEach(producto => {
                if(producto.nombre==datos.nombre){
                    setCompra(true)
                }
            });
        },[a.productosCarrito])


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
                              <button class="btn btn-primary" disabled onClick={()=>agregar()}>agregado</button><button class="btn btn-danger" onClick={()=>Eliminar()}>X</button>
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