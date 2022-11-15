import { FcLandscape, FcServices } from "react-icons/fc";
import imgR from '../../img/Jhan Aguirre.png'
function CherryTech() {
    return ( 
        <section id="afterParty2">
            <div className='contHeaderImg'>
                <div className='contBodyImg'>
                    <div className='contCardImg' id='top'>
                    
                    </div>
                    <div className='contCardImg' id='down'>
                        
                    </div>
                </div>
                <div className='contFooter'>
                    
                    <button className='btn'>
                        Ir
                    </button>
                    <div className='contIcons'>
                         
                    </div>
                </div>
            </div>
            <div className='contBody'>
                <div className='contCard'>
                    <div className='contCardImg'>
                        <FcLandscape className="icon"/>
                    </div>
                    <div className='contCardTitle'>
                        <b>Weed Life</b>
                        <p>Nuevo</p>
                    </div>
                    <div className='contCardText'>
                        <p>Lanzamiento Alfa Abierta Enero 30 2023</p>
                    </div>
                </div>
                <div className='contCard'>
                    <div className='contCardImg'>
                        <FcServices className="icon"/>
                    </div>
                    <div className='contCardTitle'>
                        <b>Principales Desarrolladores</b>
                    </div>
                    <div className='contCardText'>
                        <img src={imgR} alt="jhan"/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CherryTech;