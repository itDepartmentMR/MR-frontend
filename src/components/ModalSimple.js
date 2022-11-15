import { NavLink } from "react-router-dom";
import { AiOutlineBell} from "react-icons/ai";
function ModalSimple({text, setModalCof}) {
    return ( 
        <div className="modalSimple" onClick={()=>setModalCof(false)}>
            <div className="contModalBody" onClick={()=>setModalCof(false)}>
                <AiOutlineBell className="icon"/>
                <b>{text}</b>
                <NavLink to="/register" className="btn">
                    Registrarme
                </NavLink>
            </div>
        </div>
     );
}

export default ModalSimple;