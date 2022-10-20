import {useContext} from "react";
import { CarritoContext } from "../../App";

export default function Producto(props){

        const a = useContext(CarritoContext)
        



    return(
        <div className="col-md-4 carta">
                  <div className="card tarjeta" /*style=" margin-top: 20px;"*/>
                      <img src={props.foto} style={{width:100+"%",height:300}} className="card-img-top tarjeta2" /*style="padding: 8px;"*/ alt="lavatorios"/>
                      <div className="card-body text-center">
                          <b className="card-title ">{props.nombre}</b>
                          <p className="card-text">${props.precio}</p>
                          <p className="card-text">{props.descripcion}</p>
                          <button class="btn btn-primary" onClick={()=>{
                            let datos ={
                                nombre:props.nombre,
                                precio:props.precio,
                                descripcion:props.descripcion,
                                foto:props.foto
                            }
                            a.setProductos([...a.productosCarrito,datos])
                          }}>agregar</button>
                      </div>
                  </div>
              </div>
    )
}