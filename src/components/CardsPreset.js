import { AuthContext } from '../app/AutContext';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";  
import { NavLink } from 'react-router-dom';
const storeImg = require.context('../img', true);
//img,type, tittle,rol, fecha, body, perfilImg, footer, setModalCof, hora
function CardPreset({data, perfilImg, img}) {
    const {setSelectCurs} = useContext(AuthContext)
    function goCurs() {
        setSelectCurs(data)
    }
    return ( 
        <NavLink className="contCardPreste" to="/cursos" onClick={()=> goCurs()}>
            <div className="contImg">
                <img src={data.urlImg} alt={img}/>
            </div>
            <div className="contBodydes">
                    <h4>{data.name}</h4>
                    <p>{data.details}</p>
                    <p id="fecha">{data.dura}</p> 
                    <b>33.500 COP</b>
                    <p id="fecha">{data.laguange}</p>
                    <div className="contPerfil">
                        <img src={storeImg(`./${img}.svg`)} alt={data.name}/>           
                    </div>
                    
            </div>
        </NavLink>
     );
}

export default CardPreset;