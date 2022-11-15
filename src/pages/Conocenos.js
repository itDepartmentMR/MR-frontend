
import Somos from "../components/Somos";
//import media from "../img/mediaQuery.mp4";
import Footer from '../components/Footer';
import NavBar from "../components/NavBar";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

function Conocenos() {
    return ( 
        <div className="home">
            <NavBar/>
            <div className="contWelcome">
                <div className="text">
                    <h1>MISIÓN RIQUEZA</h1>
                    <p>Nos encargamos de los problemas de los demás, para que Dios se encargue de los nuestros.</p>
                </div>
                
                <div className="img">
                    
                </div>
            </div>
            <div className="visMis">
                <div className="cardM">
                    <b>Misión <AiOutlineHeart/></b>
                    <p>Tenemos como misión contribuir al progreso de la sociedad, creando soluciones integrales, desarrollando proyectos que generen inversión con un sentido social y empresarial, utilizando los mejores recursos humanos con la intervención de nuevas tecnologías como lo son el sistema Cuántico, Big Data, y Blockchain.</p> 
                </div>
                <div className="cardM">
                    <b>Visión <AiOutlineEye/></b>
                    <p>Para el 2025 ser un grupo empresarial líder en Colombia y consolidarnos a nivel global como el principal grupo empresarial que apoya la sostenibilidad eficaz del medio ambiente, creando proyectos con impactos positivos para la sociedad con bases tecnológicas.</p>
                </div>
            </div>
            <div className="contSomos">
                <Somos/>
            </div>
            <Footer/>
        </div>
     );
}

export default Conocenos;