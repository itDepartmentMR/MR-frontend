
import React, { useState} from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import imgLogo from "../img/logoBlack.svg";
import imgUser from "../img/userLogin.svg";
function NavBar() {
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
            {
                    menu===1?
                    <div className='btnRespons' onClick={()=> menuRespos()}>
                                <NavLink className="btn"  to="/noticias">
                                    <p>Noticias</p>
                                </NavLink>
                                <NavLink className="btn"  to="/conferencias">
                                    <p>Conferencias</p>
                                </NavLink>
                                <NavLink className="btn"  to="/conocenos">
                                    <p>Conocenos</p>
                                </NavLink>
                            
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
            <div className="title">
                <NavLink className="contTitle" to="/">
                    <img src={imgLogo} alt="logo"/>
                </NavLink>
            </div>
            <div className="btns">
                <div className="contBtn">
                    <NavLink className="btn"  to="/">
                        <p>Inicio</p>
                    </NavLink>
                </div>
                <div className="contBtn">
                    <NavLink className="btn"  to="/noticias">
                        <p>Noticias</p>
                    </NavLink>
                </div>
                <div className="contBtn">
                    <NavLink className="btn"  to="/conferencias">
                        <p>Conferencias</p>
                    </NavLink>
                </div>
                <div className="contBtn">
                    <NavLink className="btn"  to="/conocenos">
                        <p>Conocenos</p>
                    </NavLink>
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
                
        </div>
     );
}

export default NavBar;