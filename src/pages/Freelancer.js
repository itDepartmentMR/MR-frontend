//import ApiBitcoins from "../components/ApiBitcoins";
import CardPreset from "../components/CardsPreset";
//import imgLogo from "../img/LogoCherryTech.svg";
import React, { useState } from 'react';
//import {useForm } from'react-hook-form';
import NavBar from "../components/NavBar";

import Cookies from 'universal-cookie';
import ModalSimple from "../components/ModalSimple";
import { useFetch } from "../app/useFetch";
function Freelancer() {
    
    const cookies = new Cookies();
    const baseURL = process.env.REACT_APP_URIB;
    //const {register, handleSubmit} = useForm();
    //const [wait, setWait] = useState(false);
    //const [modal, setModal] = useState(false);
    //const [formM, setFormM] = useState(true);
    //const [fails, setFails] = useState(false);
    const [modalCof, setModalCof] = useState(false);
    //let url = `${baseURL}/userEmpre`;
    
    const emailUser = useState(cookies.get('email'));
    let url = `${baseURL}/cursos`
    const {data, loading} = useFetch(url)
    return ( 
        <section className="Freelancer">
            {modalCof?<ModalSimple text="Esta conferencia aún no ha iniciado, sin embargo te invitamos a registrate para recibir las notificaciones de todas nuestras conferencias" setModalCof={setModalCof} emailUser={emailUser}/>:<></>}
            <NavBar/>
            <div className="contWebinnars">
                <div className="contHeader">
                    <h1>Webbinars</h1>
                    <p>Conferencias y Cursos virtuales o presenciales por Nuestros profesionales</p>
                    <p>Con los Cursos Estamos Ayudando a los niños para que todos tengan un bonito regalo de <b>Navidad</b></p>
                </div>
                <div className="contBody">
                    {data?data.map((data) => (
                        <CardPreset key={data._id} data={data} perfilImg="Donald Herrera" img="LogoCherryTech"/>
                    )):<></>}
                </div>
                
            </div>
        </section>
     );
}

export default Freelancer;