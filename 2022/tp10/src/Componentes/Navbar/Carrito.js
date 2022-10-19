import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Carrito(){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            <img className="carrito" style={{height:50,width:50}}src="https://www.ubolosoft.com/Carrito/images/carrito.png"></img>
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
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="w-25">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" className="img-fluid img-thumbnail" alt="Sheep"/>
                    </td>
                    <td>Vans Sk8-Hi MTE Shoes</td>
                    <td>89$</td>
                    <td>178000000000$</td>
                    <td>
                        <a href="#" className="btn btn-danger btn-sm">
                        <p>X</p>
                        </a>
                    </td>
                    </tr>
                </tbody>
                </table> 
                <div className="d-flex justify-content-end">
                <h5>Total: <span className="price text-success">178000000089$</span></h5>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button className="btn btn-success irAComp">Ir a comprar</button></a>
                </div>
            </div>
        </div>
      </Modal>
           
        </>
    )
}