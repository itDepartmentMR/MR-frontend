import { AiOutlineUser, AiOutlineFundProjectionScreen, AiFillPlusCircle } from "react-icons/ai";
import Store from "./Store";
import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import ModalCreate from "./ModalCreate";
import Cookies from "universal-cookie";

function PanelAdmin(dataUserCat, reload) {
    const cookies = new Cookies();
    const [userID] = useState(cookies.get('id'));
    const [modal, setModal] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const data = useState(dataUserCat.dataUserCat);
    const [select, setSelect] = useState([]);
    const [nameCompany, setNameCompany] = useState("");
    const [numberCompany, setNumberCompany] = useState("");
    
    useEffect(() => {
        connet()
        async function connet() {
            let urlUser = `https://mr-backend-misionriqueza.herokuapp.com/users${userID}`;
            await fetch(urlUser)
                .then((response) => response.json())
                .then((data) => {
                    setNameCompany(data.name)
                    setNumberCompany(data.number)
                });
        }
    }, [])
    

    function safePosition(db) {
        setModal(true)
        setSelect(db)
    }

    function closeModal() {
        setModal(false)
    }
    function modalCreateAdd() {
        setModalCreate(true)
    }
    async function deleteServices() {
        let urlIdCat = `https://mr-backend-misionriqueza.herokuapp.com/catalogue${select._id}`;
        await fetch(urlIdCat, {
            method: "DELETE",
        })
        setModal(false)
    }
    return ( 
        <section className="contPanelAdmin">
            <div className="contHead">
                <div className="contTaskBar">
                    <div className="contOptions">
                        <AiFillPlusCircle className="icon" onClick={()=> modalCreateAdd()}/>
                    </div>
                    <div className="contOptions">
                        <AiOutlineFundProjectionScreen className="icon"/>
                    </div>
                    <div className="contOptions">
                        <AiOutlineUser className="icon"/>
                    </div>
                </div>
            </div>
            <div className="contBody">
            {reload?
                <>
                    <div className="contSafeHead">
                        <h2>Panel de Administración de Servicios y Productos || <b>{nameCompany}</b> </h2>
                    </div>    
                    <div className="contSafeBody">
                        {
                            
                            data[0].map(data => (
                                <Store key={data._id} safePosition={safePosition} data={data} int={0} name="products"/>
                            )) 
                        }
                    </div>
                </>:
                <>
                    <p>Cargando...</p>
                </>}
            </div>
            {modal?<div className="contModal">
                <div className="contBtnHead">
                    <AiFillCloseCircle className="icon" onClick={()=> closeModal() }/>
                </div>
                <section className="form">
                    <div className="contRow">
                        <h2>Más Informacion del {select.type}</h2>
                    </div>
                    <div className="contRow">
                        <p>{select.name}</p>
                    </div>
                    <div className="contRow">
                        <p>{select.details}</p>
                    </div>
                    <div className="contRow price">
                        <p>Precio:</p>
                        <b>${select.price}</b>
                    </div>
                    <div className="contRow rating">
                        <div className="contIcons">
                            <AiFillStar className={ parseInt(select.rating)>=1?"iconPerfect":"icon"}/>
                            <AiFillStar className={ parseInt(select.rating)>=2?"iconPerfect":"icon"}/>
                            <AiFillStar className={ parseInt(select.rating)>=3?"iconPerfect":"icon"}/>
                            <AiFillStar className={ parseInt(select.rating)>=4?"iconPerfect":"icon"}/>
                            <AiFillStar className={ parseInt(select.rating)>=5?"iconPerfect":"icon"}/>
                        </div>
                        <div className="contBtn">
                           { /*<button>Saber Más<AiOutlineDoubleRight/> </button>*/}
                            
                        </div>
                    
                    </div>
                    <div className="contOptionsForm">
                        <button id="delete" onClick={()=> deleteServices() }>Eliminar</button>
                    </div>
                </section>
            </div>:<></>}
            {modalCreate?
                <ModalCreate setModalCreate={setModalCreate} numberCompany={numberCompany}/>:
                <></>
            }
        </section>
     );
}

export default PanelAdmin;