import { NavLink } from "react-router-dom";
import { AiOutlineBell} from "react-icons/ai";
function ModalSimple({setModalCof}) {
    return ( 
        <div className="modalSimple" onClick={()=>setModalCof(false)}>
            <div className="contModalBody" onClick={()=>setModalCof(false)}>
                <AiOutlineBell className="icon"/>
                <b>Inicia Sesión Antes de Anvanzar</b>
                
                <NavLink to="/login" className="btnlogin">
                    Inicia Sesión
                </NavLink>
                <b>O Registrate Gratis</b>
                <NavLink to="/register" className="btn">
                    Registrate
                </NavLink>
            </div>
        </div>
     );
}

export default ModalSimple;