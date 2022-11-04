
const storeImg = require.context('../img', true);
function CardPreset({img,type, tittle,rol, fecha, body, perfilImg, footer}) {
    return ( 
        <section className="contCardPreste">
            <div className="contImg">
                <img src={storeImg(`./${img}.svg`)} alt={img}/>
            </div>
            <div className="contBody">
                    <b className={type}>{type}</b>
                    <h4>{tittle}</h4>
                    <p>{body}</p>
                    <p id="fecha">{fecha}</p> 
                    <div className="contPerfil">
                        <img src={storeImg(`./${perfilImg}.png`)} alt={footer}/>
                        <div className="contP">
                            <p>{footer}</p>
                            <p id="fecha">{rol}</p>
                        </div>
                       
                    </div>
                    
            </div>
        </section>
     );
}

export default CardPreset;