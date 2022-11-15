import { NavLink } from 'react-router-dom';
import imgB from '../img/b3.png'
import { FcMindMap, FcPositiveDynamic, FcDiploma1, FcIpad } from "react-icons/fc";
function PanelStart() {
    return ( 
        <section className="contPanelStart">
            <div className="contPanelImg">
                <img src={imgB} alt="panel"/>
            </div>
            <div className="contPanelInfo">
                <NavLink to="/register" className="contCards">
                    <div className='contHeader'>
                        <FcMindMap className='icon'/>
                    </div>
                    <p>Posiciona tus Servicios</p>
                </NavLink>
                <NavLink to="/noticias" className="contCards">
                    <div className='contHeader'>
                        <FcPositiveDynamic className='icon'/>
                    </div>
                    <p>Informate</p>
                </NavLink>
                <NavLink to="/conferencias" className="contCards">
                    <div className='contHeader'>
                        <FcDiploma1 className='icon'/>
                    </div>
                    <p>Participa en Conferencias</p>
                </NavLink>
                <NavLink to="/conocenos/sectortecnologico" className="contCards">
                    <div className='contHeader'>
                        <FcIpad className='icon'/>
                    </div>
                    <p>Utiliza Nuestras Apps</p>
                </NavLink>
            </div>
        </section>
     );
}

export default PanelStart;