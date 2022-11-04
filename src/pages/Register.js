import React, { useState, useEffect } from 'react';
import {useForm } from'react-hook-form';
import { NavLink } from 'react-router-dom';

import Cookies from 'universal-cookie';
import ModalRegister from '../components/ModalRegister';

function Register() {
    const url = "https://mr-backend-misionriqueza.herokuapp.com/users";
    const {register, handleSubmit} = useForm();
    const [int, setInt] = useState(0);
    const [modaReg, setModaReg] = useState(false);
    const [number, setNumber] = useState();
    const [fails, setFails] = useState(false);
    function nextP() {
        if (int===0) {
            if (number.length===10) {
                setInt(1)
                setFails(false)   
            } else {
                setFails(true)
            }
        }
        if (int===1) {
            setInt(2)
        }
    }
    function back() {
        if (int===1) {
            setInt(0)
        }
        if (int===2) {
            setInt(1)
        }
    }
    useEffect(() => { 
        const cookies = new Cookies();
        if(cookies.get('id')) {
            window.location.pathname="";
        }
    },[])
    async function postDb(db){
         await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(db)
        });
        setModaReg(true)
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setNumber(value)
    };
    
    return ( 
        <div className="register">
            <div className="contForm">
                <form className="form" onSubmit={handleSubmit(postDb)}>
                    <div className="header">
                        <h3>Registrate Gratis</h3>
                    </div>
                    <div className="contBody">
                        {
                            int===0?<div className="contInput">
                            <label>Nombre Completo</label>
                            <input type="text" {...register('name',{required:true})} />
                            <label>Numero Telefono</label>
                            <input type="number" {...register('number',{required:true})} onChange={handleChange}/>
                            {fails?<p id='fails'>Requiere un Numero de 10 digitos</p>:<></>}
                            </div>:<></>
                        }
                        {
                            int===1?<div className="contInput">
                            <label>Email</label>
                            <input type="email" {...register('email',{required:true})}/>
                            <label>Contraseña</label>
                            <input type="password" {...register('password',{required:true})}/>
                            <label>Tipo de Cuenta</label>
                            <select defaultValue="2" name="rol" {...register('rol',{required:true})}>
                                <option value="1" selected>Empresa</option>
                                <option value="2">Usuario</option>
                            </select>
                            <label>Tipo de servicios Preferidos</label>
                            <select defaultValue="1" name="services" {...register('services',{required:true})}>
                                <option value="1">Tecnologia</option>
                                <option value="2">Economico</option>
                                <option value="3">Ambiental</option>
                                <option value="4">Cultural</option>
                            </select>
                            </div>:<></>
                        }
                    </div>
                    <div className="contFooter">
                        {int===0?
                            <NavLink className="btnNav" to="/login">
                                Volver
                            </NavLink>:
                            <input type="button" onClick={back} value="Volver"></input>
                        }
                        
                        {int===1?
                        <button type="submit">Registrarme</button>
                        :
                        <input type="button" onClick={nextP} value="Siguiente"></input>}
                        
                    </div>
                </form>
            </div>
            {modaReg?<ModalRegister name="Usuario Registrado Correctamente"/>:<></>}
        </div>
     );
}

export default Register;