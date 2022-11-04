
import { AiFillCloseCircle } from "react-icons/ai";
import {useForm } from'react-hook-form';
import Cookies from 'universal-cookie';
import React, { useState } from 'react';

function ModalCreate({setModalCreate, numberCompany}) {
    const url = "https://mr-backend-misionriqueza.herokuapp.com/catalogue";
    const cookies = new Cookies(); 
    const {register, handleSubmit} = useForm();
    const [userID] = useState(cookies.get('id'));
    function closeModal() {
        setModalCreate(false)
    }
    async function postDb(db){
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(db)
        });
        closeModal()
    }
    return ( 
        <div className="modalCreate">
            <div className="contBtn">
                <AiFillCloseCircle className="icon" onClick={()=> closeModal() }/>
            </div>
            <form className="form" onSubmit={handleSubmit(postDb)}>
                <h2>Crea un Nuevo Servicio o Producto</h2>
                <div className="contInputs">
                    
                    <input type="text" placeholder="Nombre del Producto o Servicio" {...register('name',{required:true})}/>
                    
                    <input type="text" placeholder="Precio" {...register('price',{required:true})}/>
                    
                    <input type="text" placeholder="Descripcion Corta"{...register('desc',{required:true})}/>
                    
                    <input type="text" placeholder="Detalles" {...register('details',{required:true})}/>
                    <p>Tipo: <select name="services" {...register('type',{required:true})}>
                        <option value="Servicio">Servicio</option>
                        <option value="Producto">Producto</option>
                    </select></p>
                    
                    <input type="hidden" value={userID} {...register('idCompany',{required:true})}/>
                    <input type="hidden" value={numberCompany} {...register('companyNumber',{required:true})}/>
                </div>
                <div className="contBtns">
                    <button>Agregar</button>
                </div>
            </form>
        </div>
     );
}

export default ModalCreate;