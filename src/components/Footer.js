
import imgS from '../img/logoOficial.png'
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
function Footer() {
    return ( 
        <div className='footer'>
            <div className='contOne'>
                <img src={imgS} alt="logo"/>
            </div>
            <div className='contTwo'>
                <p>Redes Sociales</p>
                <p>Todos los derechos reservados 2022</p>
            </div>
            <div className='contThree'>
                <div className="contRedes">
                    <AiFillInstagram className="icon"/>
                    
                </div>
                <div className="contRedes">
                 <AiFillFacebook className="icon"/>
                </div>
                <div className="contRedes">
                    <p>departamento.it@misionriqueza.com</p>
                </div>
                <div className="contRedes">
                    <p>+57 3243915434</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;
