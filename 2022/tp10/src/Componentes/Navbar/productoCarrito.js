import { CarritoContext } from "../../App";
import { useContext } from "react";

export default function ProductoCarrito(props){

    const item = useContext(CarritoContext)

    const IVA = 21
    function eliminarProducto(productoAeliminar){
        item.setProductos(
            item.productosCarrito.filter((productos)=> productos.nombre!=productoAeliminar.nombre)
        )
        console.log(item.ProductoCarrito)
    }
    return(
        <>
        
                <tbody>
                    <tr>
                    <td className="w-25">
                        <img src={props.foto} className="img-fluid img-thumbnail" alt="Sheep"/>
                    </td>
                    <td>{props.nombre}</td>
                    <td>${props.precio}</td>
                    <td>${(props.precio*IVA)/100+props.precio}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>eliminarProducto(props)}>Eliminar</button>
                    </td>
                    </tr>
                </tbody>
                </>
    )
}