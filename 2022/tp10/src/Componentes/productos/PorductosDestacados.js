import { React } from "react";
import Producto from "./Producto";
import listaProductos from "./listaProductos";


export default function ProductosDestacados () {
    let lista = listaProductos
    return(
        <div className="container">
          <div className="row">
              <b className="tituloPD"/*style="font-size: large;"*/>Productos destacados</b>
          </div>
          <div className="row ">
          {
            lista.map((producto)=><Producto nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} foto={producto.foto}></Producto>)
          }
            </div>

        </div>
    )
}