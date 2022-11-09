let contador= Math.round(Math.random()*71000)
let imagen = document.createElement("img")
let divImagen = document.querySelector(".divImagenes")

function pasar(){
    divImagen.innerHTML=""
    imagen.src="https://campus.ort.edu.ar/static/archivos/usuarioperfil/"+contador
    imagen.onerror=()=>{
        pasar()
    }
    imagen.setAttribute("class","imagen")
    divImagen.appendChild(imagen)
    contador++
}
