
import {useForm } from'react-hook-form';
import React, { useState, useEffect } from 'react';
import media from '../img/video.mp4';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';
import ModalRegister from '../components/ModalRegister';


function Login() {
    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    const [modalLogin, setModalLogin] = useState(false);
    const [fails, setFails] = useState(false);
    //let url = 'http://localhost:5000/users';
    let url = 'https://mr-backend-misionriqueza.herokuapp.com/userLogin';
    //let url = 'http://localhost:5000/userLogin';
   
    async function conexionDb(db) {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(db)
        })
            .then((response) => response.json())
            .then((data) => {
                cookies.set('email', data.email, {path:"/"});
                cookies.set('id', data._id, {path:"/"})
                cookies.set('rol', data.rol, {path:"/"})
                setModalLogin(true)
            })
            .catch(setFails(true))
    }
    //authec if get users
    //const userState = useSelector(state => state.user);
    useEffect(() => { 
        const cookies = new Cookies();
        if(cookies.get('id')) {
            setModalLogin(true)
        }
    },[])
    //funtion to back an next for the form
    return ( 
        <div className="login">
            <div className='contImg'>
                <video loop  muted autoPlay>
                    <source src={media} type="video/mp4"/>
                </video>
            </div>
            <div className="form">
                <div className='header'>
                    <h1>Misión Riqueza</h1>
                    <p>Para el Mundo</p>
                </div>
                <form onSubmit={handleSubmit(conexionDb)} className="contForms">
                    <div className='contForm'>
                       <div className='contInputs'>
                            <p>Correo</p>
                            <input type="email"
                                {...register('email',
                                {required:true
                                })}/>
                                <p>Contraseña</p>
                            <input type="password"
                                {...register('password',
                                {required:true})} />
                        </div>
                        
                            
                            {/*<div className='reCaptha'>  
                                <ReCAPTCHA
                                    sitekey="6LcMXHciAAAAAMWpmVMizLLL7V1CzFrtVseWsRvI"
                                    onChange={onChange}
                                />
                            </div>*/}
                    </div>
                    <div className='contBtn'>     
                        <NavLink className="btn v" to="/">Volver</NavLink>
                       <button className='btn i' type='submit'>Iniciar Sesion</button> 
                       
                    </div>
                    {fails?<p id='error'>Contraseña Incorrecta o Usuario no registrado</p>:<></>}
                </form>
                    <NavLink className="btnR" to="/register">
                        Registrate
                    </NavLink> 
            </div>
            {
                modalLogin?<ModalRegister name="Bienvenido"/>:<></>
            }
            
        </div>
     );
}

export default Login;