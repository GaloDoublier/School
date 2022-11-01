import { CarritoContext } from "../../App";
import { useContext,useState } from "react";

export default function ProductoCarrito(props){
    const IVA = 21

    const item = useContext(CarritoContext)
    const [cantidad,setCantidad]=useState(props.cantidad)

    const [precio,setPrecio]=useState(((props.precio*IVA)/100+props.precio)*cantidad);

    
    function eliminarProducto(productoAeliminar){
        item.setProductos(
            item.productosCarrito.filter((productos)=> productos.nombre!=productoAeliminar.nombre)
        )
        console.log(item.ProductoCarrito)
    }

    function cambioCant(e){

        let data = item.productosCarrito

        setCantidad(e.target.value)

        const nuevoProducto = data.map(obj => {

            if (obj.nombre == props.nombre) {
              return {...obj, cantidad: e.target.value};
            }

            return obj;
          });

          item.setProductos(nuevoProducto)
          setPrecio(((props.precio*IVA)/100+props.precio)*e.target.value)

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
                        <select class="form-select" style={{width:60}} name="select" onChange={(e)=>cambioCant(e)}>
                            <option value={1} hidden selected>{cantidad}</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>
                    </td>
                    <td>${precio}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>eliminarProducto(props)}>Eliminar</button>
                    </td>
                    </tr>
                </tbody>
                </>
    )
}