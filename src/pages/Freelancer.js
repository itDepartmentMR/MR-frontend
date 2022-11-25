//import ApiBitcoins from "../components/ApiBitcoins";
import CardPreset from "../components/CardsPreset";
import imgLogo from "../img/LogoCherryTech.svg";
import React, { useState } from 'react';
import {useForm } from'react-hook-form';
import NavBar from "../components/NavBar";
import ModalSimple from "../components/ModalSimple";
function Freelancer() {
    const baseURL = process.env.REACT_APP_URIB;
    const {register, handleSubmit} = useForm();
    const [wait, setWait] = useState(false);
    const [modal, setModal] = useState(false);
    const [formM, setFormM] = useState(true);
    const [fails, setFails] = useState(false);
    const [modalCof, setModalCof] = useState(false);
    let url = `${baseURL}/userEmpre`;

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
            {modalCof?<ModalSimple text="Esta conferencia aún no ha iniciado, sin embargo te invitamos a registrate para recibir las notificaciones de todas nuestras conferencias" setModalCof={setModalCof}/>:<></>}
            <NavBar/>
            <div className="contWebinnars">
                <div className="contHeader">
                    <h1>Webbinars</h1>
                    <p>Conferencias y Cursos virtuales o presenciales por nuestros profesionales</p>
                </div>
                <div className="contBody">

                    <CardPreset img="LogoCherryTech"
                                type="Tecnología"
                                tittle="Ciber seguridad y protección digital "
                                body="Conferencia virtual"
                                perfilImg="Donald Herrera"
                                footer="Donald Herrera"
                                fecha="15/12/2022"
                                rol="Ingeniero en Seguridad"
                                setModalCof={setModalCof}
                    />
                    <CardPreset img="LogoCherryTech"
                                type="Biotecnología"
                                tittle="Prótesis de apoyo y mejoramiento motriz"
                                body="Conferencia virtual"
                                perfilImg="Jhan Aguirre"
                                footer="Jhan Aguirre"
                                fecha="20/12/2022"
                                rol="Ingeniero Biomédico"
                                setModalCof={setModalCof}
                    />
                    <CardPreset img="LogoCherryTech"
                                type="Tecnología"
                                tittle="Programacion Orientada a Objetos"
                                body="Curso virtual"
                                perfilImg="Donald Herrera"
                                footer="Donald Herrera"
                                fecha="15/01/2022"
                                rol="Ingeniero en Seguridad"
                                setModalCof={setModalCof}
                    />
                    <CardPreset img="LogoCherryTech"
                                type="Tecnología"
                                tittle="Primeros Pasos en Linux"
                                body="Curso virtual"
                                perfilImg="Donald Herrera"
                                footer="Donald Herrera"
                                fecha="5/01/2022"
                                rol="Ingeniero en Seguridad"
                                setModalCof={setModalCof}
                    />
                </div>
                
            </div>
            <section className="contEmprende" id="emprende">
                {modal?<div className="contModal">
                    <div className="contBtn" onClick={()=> setModal(false)}/>
                    <b>Enviado Correctamente</b>
                </div>:<></>}
                <div className="contBody">
                    <h2>Inscribete en Cursos</h2>
                    <p>Cursos de Introducción en Ciberseguridad, Programación, Java, Linux. Tambien <b>Cursos Virtuales para Niños</b>.</p>
                    <div className="contHelpers">
                        <img src={imgLogo} alt="cherry"/>
                    </div>
                </div>
                {formM?<div className="contForm">
                    
                    <form onSubmit={handleSubmit(conexionDb)}>
                        <h4>Envianos tus datos para participar</h4>
                        <label>Nombre Completo:</label>
                        <input type="text" {...register('nameComp',{required:true})}/>
                        
                        <label>Correo Electronico:</label>
                        <input type="email" {...register('email',{required:true})}/>
                        <label>Telefono:</label>
                        <input type="number" id="tele" {...register('telef',{required:true})}/>
                        {fails?<p id="fails">Tiene que ser de 10 Digitos</p>:<></>}
                        
                        {/*<select id="tele" {...register('skills',{required:true})}>
                            <option value="Programador Frontend">Programador Frontend</option>
                            <option value="Diseñador Grafico">Diseñador Grafico</option>
                            <option value="Diseñador de Interfaces">Diseñador UI/UX</option>
                            <option value="Programador Backend">Programador Backend</option>
                            <option value="Deseñador de Hardaware">Diseñador de Hardware</option>
                            <option value="Desarrollador de aplicaciones mobiles">Desarrollador de Aplicaciones Mobiles</option>
                            <option value="Desarrollador de Software">Desarrollador de Software</option>
                            <option value="Publicista">Publicista</option>
                            <option value="Comunicador social">Comunicador Social</option>
    </select>*/}
                        <button type="submit" id={wait?"loading":"load"}>{wait?"Cargando...":"Enviar"}</button>
                    </form>
                </div>:<></>}
                
            </section>
            {/* 
            <div className="contHeader">
                <h1>Criptomonedas Estado Actual</h1>
            </div>
            <ApiBitcoins/>
            */}
        </section>
     );
}

export default Freelancer;