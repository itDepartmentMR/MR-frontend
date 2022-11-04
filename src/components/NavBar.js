
import React, { useState} from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import imgLogo from "../img/logoBlack.svg";
import imgUser from "../img/userLogin.svg";
function NavBar({changeHome, changeContact, changeProductos, changeCherry, changeFreelancer}) {
    const cookies = new Cookies();    
    const [userID] = useState(cookies.get('id'));
    const [menu, setMenu] = useState(0);
    function cerrarSesion() {
        cookies.remove('email', {path:"/"});
        cookies.remove('id', {path:"/"});
        cookies.remove('rol', {path:"/"});
        window.location.pathname="";
    }
    function menuRespos() {
        if (menu===0) {
            setMenu(1)
        }else{
            setMenu(0)
        }
    }
    return ( 
        <div className="navBar">
            <div className="title">
                <div className="contTitle">
                    <img src={imgLogo} alt="logo"/>
                </div>
            </div>
            <div className="btns">
                <div className="contBtn">
                    <button className="btn" onClick={changeFreelancer}>Freelancer</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeCherry}>Cherry Tech</button>
                </div>
                
                <div className="contBtn">
                    <button className="btn" onClick={changeHome}>Nosotros</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeProductos}>Productos</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeContact}>Contacto</button>
                </div>
                <div className="contBtn l">
                    {
                        userID===undefined?
                        <NavLink className="btnL" to="/login">
                            <img src={imgUser} alt="user"/>
                        </NavLink>
                        :
                        <button className="btnLc" onClick={cerrarSesion}>
                            Cerrar Sesión
                        </button>
                        
                    }
                </div>
                
            </div>
            <div className='menuRespons'>
                    <AiFillAppstore className='icon'  onClick={()=> menuRespos()}/>
            </div>
                {
                    menu===1?
                    <div className='btnRespons' onClick={()=> menuRespos()}>
                                <button className="btn" onClick={changeHome}>Nosotros</button>
                                <button className="btn" onClick={changeProductos}>Productos</button>
                                <button className="btn" onClick={changeContact}>Contacto</button>
                                <button className="btn" onClick={changeFreelancer}>Emprende</button>
                                <button className="btn" onClick={changeCherry}>Cherry Tech</button>
                            
                                {
                                    userID===undefined?
                                    <NavLink className="btn" to="/login">
                                        Iniciar Sesion
                                    </NavLink>
                                    :
                                    <button className="btn" onClick={cerrarSesion}>
                                        Cerrar Sesion
                                    </button>
                                    
                                }
                    </div>:
                    <></>
                }
        </div>
     );
}

export default NavBar;