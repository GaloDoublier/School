import { React } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito"
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <a className="navbar-brand" href="#"><img className="TamanioImagen" src="img/logo.png" alt="Campana"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div  className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav derecha" >
                  <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                  <Link to="/quienes-somos" className="nav-link active">Quienes somos</Link>
                  <Link to="/productos" className="nav-link active">Productos</Link>
                  <Link to="/contacto" className="nav-link active">Contacto</Link>
                </div>
              </div>
              <Carrito/>
            </div>
          </nav>
    )

}
