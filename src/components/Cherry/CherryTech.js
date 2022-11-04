import imgOne from '../../img/bx-code.svg'
import imgTwo from '../../img/bx-microchip.svg'
import imgThree from '../../img/bx-shield.svg'
import imgFor from '../../img/bx-chat.svg'
function CherryTech() {
    return ( 
        <section className="cherryTech">
            
            <div className="contServices Software">
                <h2>Desarrollo de Software</h2>
                <div className="contBtn">
                    <img src={imgOne} alt="software"/>
                    <div className='contBody'>
                        <p>- Desarrollo de Aplicaciones</p>
                        <p>- Desarrollo de Páginas Web</p>
                        <p>- Soluciones con Industria 4.0</p>
                    </div>
                </div>    
            </div>
            <div className="contServices Hardware">
                <h2>Desarrollo de Hardware</h2>
                <div className="contBtn">
                    <img src={imgTwo} alt="hardware"/>
                    <div className='contBody'>
                        <p>- Hardware Personalizado</p>
                        <p>- Diseño e Implementación de Cámaras de Seguridad</p>
                        <p>- Módulos GPS</p>
                    </div>
                </div>  
            </div>
            <div className="contServices Security">
                <h2>Seguridad y Testing</h2>
                <div className="contBtn">
                    <img src={imgThree} alt="security"/>
                    <div className='contBody'>
                        <p>- Pruebas de Pentesting</p>
                        <p>- Pruebas de Ingeniería Social</p>
                        <p>- Pruebas de Redes Inalámbricas</p>
                        <p>- Pruebas de Circuitos Cerrados</p>
                    </div>
                </div>  
            </div>
            <div className="contServices Queries">
                <h2>Consultoría y Cursos </h2>
                <div className="contBtn">
                    <img src={imgFor} alt="curs"/>
                    <div className='contBody'>
                        <p>- Curso de Cyber Seguridad</p>
                        <p>- Consulta de Cyber Seguridad</p>
                    </div>
                </div>  
            </div>
        </section>
     );
}

export default CherryTech;