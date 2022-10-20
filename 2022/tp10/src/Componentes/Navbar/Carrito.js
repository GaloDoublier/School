import { useState,useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CarritoContext } from "../../App";
import ProductoCarrito from './productoCarrito';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Carrito(){

    const MySwal = withReactContent(Swal)

    const [contador,setContador] = useState(-1)
    const [total,setTotal] = useState(0)
    let totall =0;

    const item = useContext(CarritoContext)

    console.log(item.productosCarrito)
    //poner un usefect que se ejecute cuando cambie item.productosCarrito

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  useEffect(()=>{
    setContador(contador+1)
    item.productosCarrito.forEach(element => {
        totall += (element.precio*21)/100+element.precio
    });
    setTotal(totall)

  },[item.productosCarrito])

  function comprar(){
    MySwal.fire({
        title: <p>Comprado</p>,
        didOpen: () => {
          MySwal.showLoading()
        },
      }).then(() => {
        return MySwal.fire(<p>Tu compra no pudo realizarse</p>)
      })
  }


    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            <img className="carrito" style={{height:50,width:50}}src="https://www.ubolosoft.com/Carrito/images/carrito.png"></img>
            <span style={{padding:6,backgroundColor:"red",borderRadius:30}}>{contador}</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Tu carrito</Modal.Title>
        </Modal.Header>
        <div className="modal-content">
            <div className="modal-body">
            <table className="table table-image">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total + Impuestos</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                {
                    item.productosCarrito.map((producto)=><ProductoCarrito nombre={producto.nombre} foto={producto.foto} desc={producto.descripcion} precio={producto.precio}></ProductoCarrito>)

                }
            </table>
                <h5>Total: <span className="price text-success">${total}</span></h5>
                <div className="d-flex justify-content-end">
                <button className="btn btn-success irAComp" onClick={()=>comprar()}>Ir a comprar</button>
                </div>
            </div>
        </div>
      </Modal>
           
        </>
    )
}