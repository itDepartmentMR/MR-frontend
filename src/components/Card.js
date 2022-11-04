
function Card({name, info}) {
    const storeImg = require.context('../img', true);
    return ( 
        <div className="img">
            <img src={storeImg(`./${name}.png`)} alt="tema" className="contImg"/>
        </div>
     );
}

export default Card;