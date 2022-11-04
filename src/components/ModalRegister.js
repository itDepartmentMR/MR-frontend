import { NavLink } from "react-router-dom";

function ModalRegister({name}) {
    return ( 
        <div className="contModal">
            <div className="contBody">
                <h3>{name}</h3>
                <NavLink to="/" className="btnAceptar">Aceptar</NavLink>
            </div>
        </div>
     );
}

export default ModalRegister;