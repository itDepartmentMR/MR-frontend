
import Somos from "./Somos";
import media from "../img/mediaQuery.mp4";
import Footer from './Footer';

function Home() {
    return ( 
        <div className="home">
            <div className="contWelcome">
                <div className="text">
                    <h1>MISIÓN RIQUEZA</h1>
                    <p>Nos encargamos de los problemas de los demás, para que Dios se encargue de los nuestros.</p>
                </div>
                
                <div className="img">
                    
                </div>
            </div>
            <div className="contInfo">
                <div className="cards">
                    <video src={media} width="1080px" height="500px" loop  muted autoPlay className="media">
                        
                    </video>
                </div>
                <div className="line">
                    <h2>Misión Riqueza</h2>
                    <p>Te brinda la mejor calidad en servicios y en la información, accede a operar en el mundo de una manera más clara, obtén resultados más rápidos y efectivos.</p>
                </div>
            </div>
            <div className="visMis">
                    <div className="cardM">
                        <b>Misión</b>
                        <p>Tenemos como misión contribuir al progreso de la sociedad, creando soluciones integrales, desarrollando proyectos que generen inversión con un sentido social y empresarial, utilizando los mejores recursos humanos con la intervención de nuevas tecnologías como lo son el sistema Cuántico, Big Data, y Blockchain.</p> 
                    </div>
                    <div className="cardM">
                        <b>Visión</b>
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

export default Home;