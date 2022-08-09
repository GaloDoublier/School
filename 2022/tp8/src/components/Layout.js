import react from "react"
import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark nabar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PersonFinder</a>
                <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/estadisticas">Estadisticas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/contacto">Contacto</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            <Outlet />
            <div style={{paddingTop:"200px"}}></div>
        </div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="my-auto" style={{color:"#fff"}}>Trabajo realizado por Galo D, Fabrizio M y Gero B</h2>
                    </div>

                </div>

            </div>
        </footer>
        </>
    )
}