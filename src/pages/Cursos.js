import { AuthContext } from "../app/AutContext";
import React, { useContext, useLayoutEffect, useState } from 'react';
import ModalContact from "../components/ModalContact";
import { AiFillSecurityScan, AiFillAppstore } from "react-icons/ai";

import Cookies from 'universal-cookie';
import ModalSimple from "../components/ModalSimple";
const storeImg = require.context('../img', true);


function Cursos() {
    const cookies = new Cookies();
    
    const [modal, setModal] = useState(false);
    const {selectCurs} = useContext(AuthContext)
    const [numerCom, setNumerCom] = useState(0);
    const [modalCof, setModalCof] = useState(false);

    useLayoutEffect(() => {
      if (!selectCurs) {
        window.location.pathname = "/conferencias"
      }
    }, [])
    function changeModal() {
        if (cookies.get('email')) { 
            setNumerCom(10)
            if (modal) {
                setModal(false)
            }else{
                
                setModal(true)
            }   
        }else{
            setModalCof(true)

        }
    }
    return (
        <>
        
       { selectCurs?<section className="Cursos">
            {
                modal?
                <ModalContact  closeNumerModal={changeModal} number={numerCom} dataM={selectCurs}/>:<></>
            }
            {
                modalCof?
                <ModalSimple setModalCof={setModalCof}/>:<></>
            }
            <div className="contHeader">
                <h1>{selectCurs.name}</h1>
                <p>{selectCurs.desc}</p>
                <b>Duracion del Curso {selectCurs.dura}</b>
            </div>
            <div className="contBody">
                <div  className="contImg">
                    <img src={storeImg(`./${selectCurs.img}.png`)}  alt=""/>
                </div>
            </div>
            {modal?<></>:<div className="contInfo">
                <div className="contHead">
                    <p>Precio</p>
                    <b>50.000 COP</b>

                    <h4>25.000 COP</h4>
                </div>
                <div className="contText">
                    <p>Despues de Efectuar la compra obtendras todo el contenido del curso, codigo, herramientas y los videos, para que puedas utilizarlos en el momento que deses</p>
                    <p>Por cada Curso Vendido Estamos dando Regalos de Navidad A los Niños de Manizales</p>
                    <p>Contactanos si tienes alguna duda o algun reclamo</p>
                    <b>+3244617966</b>
                    <b>Colombia - Manizales</b>
                    <b>2022</b>
                </div>
                <div className="contFooter">
                    <button onClick={() => changeModal()}>Comprar <AiFillAppstore/></button>
                    <p >Compra Protegida <AiFillSecurityScan/></p>
                </div>
            </div>}
        </section>:<></>}
        </>
     );
}

export default Cursos;