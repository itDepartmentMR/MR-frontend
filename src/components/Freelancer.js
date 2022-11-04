import ApiBitcoins from "./ApiBitcoins";
import CardPreset from "./CardsPreset";
import imgLogo from "../img/LogoCherryTech.svg";
import React, { useState } from 'react';
import {useForm } from'react-hook-form';
function Freelancer() {
    const {register, handleSubmit} = useForm();
    const [wait, setWait] = useState(false);
    const [modal, setModal] = useState(false);
    const [formM, setFormM] = useState(true);
    const [fails, setFails] = useState(false);
    let url = 'https://mr-backend-misionriqueza.herokuapp.com/userEmpre';
    async function conexionDb(db) {
        setWait(true)
        if (db.telef.length===9) {

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(db)
            });
            setWait(false)
            setModal(true)
            setFormM(false)
        }else{
            setFails(true)
            setWait(false)
        }
        
    }
    return ( 
        <section className="Freelancer">
            <div className="contEmprende">
                {modal?<div className="contModal">
                    <div className="contBtn" onClick={()=> setModal(false)}/>
                    <b>Enviado Correctamente</b>
                </div>:<></>}
                <div className="contBody">
                    <h2>Trabaja como Freelancer</h2>
                    <p>Te buscamos vacantes donde puedas fortalecer tus habilidades y ser Autónomo en tus <b>Proyectos</b>.</p>
                    <div className="contHelpers">
                        <img src={imgLogo} alt="cherry"/>
                    </div>
                </div>
                {formM?<div className="contForm">
                    
                    <form onSubmit={handleSubmit(conexionDb)}>
                        <h4>Envianos tus datos y nos pondremos en contacto</h4>
                        <label>Nombre Completo:</label>
                        <input type="text" {...register('nameComp',{required:true})}/>
                        
                        <label>Correo Electronico:</label>
                        <input type="email" {...register('email',{required:true})}/>
                        <label>Telefono:</label>
                        <input type="number" id="tele" {...register('telef',{required:true})}/>
                        {fails?<p id="fails">Tiene que ser de 10 Digitos</p>:<></>}
                        <label>Habilidades:</label>
                        <select id="tele" {...register('skills',{required:true})}>
                            <option value="Programador Frontend">Programador Frontend</option>
                            <option value="Diseñador Grafico">Diseñador Grafico</option>
                            <option value="Diseñador de Interfaces">Diseñador UI/UX</option>
                            <option value="Programador Backend">Programador Backend</option>
                            <option value="Deseñador de Hardaware">Diseñador de Hardware</option>
                            <option value="Desarrollador de aplicaciones mobiles">Desarrollador de Aplicaciones Mobiles</option>
                            <option value="Desarrollador de Software">Desarrollador de Software</option>
                            <option value="Publicista">Publicista</option>
                            <option value="Comunicador social">Comunicador Social</option>
                        </select>
                        <button type="submit" id={wait?"loading":"load"}>{wait?"Cargando...":"Enviar"}</button>
                    </form>
                </div>:<></>}
                
            </div>
            
            <div className="contWebinnars">
                <div className="contHeader">
                    <h1>Webbinars</h1>
                </div>
                <div className="contBody">
                    <CardPreset img="LogoCherryTech"
                                type="Tecnología"
                                tittle="Ciber seguridad y protección digital "
                                body="Conferencia virtual"
                                perfilImg="Donald Herrera"
                                footer="Donald Herrera"
                                fecha="15/11/2022"
                                rol="Ingeniero en Seguridad"
                    />
                    <CardPreset img="LogoCherryTech"
                                type="Biotecnología"
                                tittle="Prótesis de apoyo y mejoramiento motriz"
                                body="Conferencia virtual"
                                perfilImg="Jhan Aguirre"
                                footer="Jhan Aguirre"
                                fecha="20/11/2022"
                                rol="Ingeniero Biomédico"
                    />
                    <CardPreset img="LogoCherryTech"
                                type="Tecnología"
                                tittle="Diseño de experiencias"
                                body="Conferencia virtual"
                                perfilImg="Daniela Atehortúa"
                                footer="Daniela Atehortúa"
                                fecha="30/11/2022"
                                rol="Diseñadora Gráfica"
                    />
                </div>
                
            </div>
            <div className="contHeader">
                <h1>Criptomonedas Estado Actual</h1>
            </div>
            <ApiBitcoins/>
        </section>
     );
}

export default Freelancer;