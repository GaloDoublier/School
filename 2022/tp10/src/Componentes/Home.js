import React from "react";
import Carousel from "./Carousel/Carousel";
import ProductosDestacados from "./productos/PorductosDestacados";

export default function Home(){
    return(
        <>
            <Carousel/>
            <ProductosDestacados />
        </>
    )
}