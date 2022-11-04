
import Icons from './Icons';
import imgS from '../img/logoOficial.png'
function Footer() {
    return ( 
        <div className='footer'>
            <div className='contOne'>
                <img src={imgS} alt="logo"/>
            </div>
            <div className='contTwo'>
                <p>2022 - Version Beta 1.0</p>
            </div>
            <div className='contThree'>
                <Icons/>
            </div>
        </div>
     );
}

export default Footer;
