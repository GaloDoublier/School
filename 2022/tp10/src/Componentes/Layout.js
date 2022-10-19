import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Marcas from "./Marcas/Marcas"
import Navbar from "./Navbar/Navbar";
import { CarritoContext } from "../App";
import { useContext } from "react";

export default function Layout(){
    const item = useContext(CarritoContext)
    //poner un usefect que se ejecute cuando cambie item.productosCarrito
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Marcas/>
            <Footer/>  
        </>
    )
}