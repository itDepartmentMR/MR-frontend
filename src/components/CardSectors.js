import { NavLink } from "react-router-dom";

const storeImg = require.context('../img', true);
function CardSectors({imgUrl, title}) {
    const ruta = `/conocenos/${title.split(/\s+/).join('').toLowerCase()}`
    return ( 
        <NavLink to={ruta} className="contCardSomos">
            <img src={storeImg(`./${imgUrl}.png`)} alt={imgUrl}/>
            <b>{title}</b>
        </NavLink>
     );
}

export default CardSectors;