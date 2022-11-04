
import imgone from '../img/10.png';
import imgTwo from '../img/11.png';
import imgFor from '../img/9.png';
function Icons() {
    return ( 
        <div className="icons">
             <img className="icon" src={imgFor} alt="ins"/>
            <img className="icon" src={imgone} alt="ink"/>
            <img className="icon" src={imgTwo} alt="face"/>
        </div>
     );
}

export default Icons;