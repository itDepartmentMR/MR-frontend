import { NavLink } from "react-router-dom";
import { AiOutlineBell} from "react-icons/ai";
function ModalSimple({setModalCof}) {
    return ( 
        <div className="modalSimple" onClick={()=>setModalCof(false)}>
            <div className="contModalBody" onClick={()=>setModalCof(false)}>
                <AiOutlineBell className="icon"/>
                <b>Inicia Sesion Antes de Anvanzar</b>
                <NavLink to="/register" className="btn">
                    Registrate
                </NavLink>
            </div>
        </div>
     );
}

export default ModalSimple;