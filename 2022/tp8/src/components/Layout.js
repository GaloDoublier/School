import react from "react"
import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
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
        <div className="container">
            <Outlet />
        </div>
        <footer style={{bottom:0,height:"150px",width:"100%",background:"#000",marginTop: "auto"}}>

        </footer>
        </>
    )
}