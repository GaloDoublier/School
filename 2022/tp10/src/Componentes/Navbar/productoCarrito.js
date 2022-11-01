import { CarritoContext } from "../../App";
import { useContext,useState } from "react";

export default function ProductoCarrito(props){

    const item = useContext(CarritoContext)
    const [cantidad,setCantidad]=useState(props.cantidad);

    const IVA = 21
    function eliminarProducto(productoAeliminar){
        item.setProductos(
            item.productosCarrito.filter((productos)=> productos.nombre!=productoAeliminar.nombre)
        )
        console.log(item.ProductoCarrito)
    }

    function cambioCant(e){
        console.log(e.target.value)
        setCantidad(e.target.value)
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
                    <td>
                        <select name="select" onChange={(e)=>cambioCant(e)}>
                            <option value={1} selected>{cantidad}</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </td>
                    <td>${(props.precio*IVA)/100+props.precio}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>eliminarProducto(props)}>Eliminar</button>
                    </td>
                    </tr>
                </tbody>
                </>
    )
}