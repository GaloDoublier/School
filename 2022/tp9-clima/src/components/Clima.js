
export default function Clima(props){
    return(
        <>
        <div className='col-6 clima'>
            <div className="row">
                <div className="col">
                    <h3>Temperatura:</h3>
                    <h2>{props.temp}</h2>
                    <h4></h4>
                </div>
                <div className="col">
                    <h3>mínima:</h3>
                    <h2>{props.tempMin}</h2>
                </div>
                <div className="col">
                    <h3>máxima:</h3>
                    <h2>{props.tempMax}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Humedad</h3>
                    <h4>{props.humedad}</h4>
                    <h3>descripcion</h3>
                    <h4>{props.clima}</h4>
                </div>
                <div className="col">
                <div id="icon"><img class="icon" src={props.foto} alt="Weather icon"/></div>
                </div>
            </div>



        </div>
        </>
    )
}