import { React } from "react";
import listaProductos from "./listaProductos";
import Producto from "./Producto";
export default function BiggerProductos () {
    let lista = listaProductos
    return(
        <div className="container">
          <div className="row">
              <h2>Nuestros Productos: </h2>
          </div>
          <div className="row ">
          {
            lista.map((producto)=><Producto nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} foto={producto.foto}></Producto>)
          }
          </div>
        </div>
    )
}