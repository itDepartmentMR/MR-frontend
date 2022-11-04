import { AiFillInstagram, AiFillFacebook, AiFillGoogleSquare, AiFillPhone } from "react-icons/ai";
//import Footer from './Footer';
const storeImg = require.context('../img', true);

function Contacto() {
    return ( 
        <div className="contacto">
            <section className="noticias">
                <h1>Descubrenos</h1>
                <div className="contMedia">
                    <div className="contSvg one">
                        <img src={storeImg(`./imgHome.svg`)} alt='we'/>
                    </div>
                </div>
            </section>
            <h3>Redes Sociales</h3>
            <section className="redes">
                <div className="contRedes">
                    <AiFillInstagram className="icon"/>
                    <p>@misionriqueza</p>
                </div>
                <div className="contRedes">
                    <AiFillFacebook className="icon"/>
                    <p>@misionriqueza</p>
                </div>
                <div className="contRedes">
                    <AiFillGoogleSquare className="icon"/>
                    <p>departamento.it@misionriqueza.co</p>
                </div>
                <div className="contRedes">
                    <AiFillPhone className="icon"/>
                    <p>+57 3243915434</p>
                </div>
            </section>
            
        </div>
     );
}

export default Contacto;