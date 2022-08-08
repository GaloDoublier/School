import React from 'react'
import Swal from 'sweetalert2'


export default function Error(){
    Swal.fire({
        icon: 'error',
        title: 'Ese horario esta ocupado',
        text: 'Prueba ingresando otra fecha',
        footer: '<a href="https://www.argentina.gob.ar/servicio/inscribirse-en-el-programa-de-apoyos-tecnicos-para-personas-con-discapacidad">Si tenes problemas, te sugerimos visitar esta página</a>'
        })  
    
}