import Store from "./Store";
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import PanelAdmin from "./PanelAdmin";
import imgServices from "../img/tituloservicios.png";
import imgProducts from "../img/tituloProduct.png";
import ModalContact from "./ModalContact";
function Catalogue() {
    const cookies = new Cookies(); 
    const [userID] = useState(cookies.get('id'));
    const [dataP, setDataP] = useState([]);
    const [dataS, setDataS] = useState([]);
    const [dataUserCat, setDataUserCat] = useState(null);
    const [reload, setReload] = useState(null);
    const [modal, setModal] = useState(false);
    const [numerCom, setNumerCom] = useState(0);
    const [numberModal, setNumberModal] = useState(false);
    const [ifCompany] = useState(cookies.get('rol'));
    //Api for get all catalogue(product and services)
    useEffect(() => {

        let urlP = 'https://mr-backend-misionriqueza.herokuapp.com/catalogue/product';
        let urlS = 'https://mr-backend-misionriqueza.herokuapp.com/catalogue/service';
        fetch(urlP)
            .then((response) => response.json())
            .then((data) => setDataP(data));
        fetch(urlS)
            .then((response) => response.json())
            .then((data) => {
                setDataS(data)
                setReload(true)
            });
        getCompany()
    },[])

    //Select one service/Product
    const [select, setSelect] = useState([]);
    function safePosition(db) {
        setModal(true)
        setSelect(db)
    }
    function closeModal() {
        setModal(false)
    }
    function closeNumerModal(price) {
        setNumerCom(price)
        if (numberModal) {
            setNumberModal(false)
        }else{
            setNumberModal(true)
        }
    }
    async function getCompany() {
        if (userID!==undefined && ifCompany==="1") {
            let urlUserCat = `https://mr-backend-misionriqueza.herokuapp.com/users/cata${userID}`;
            await fetch(urlUserCat)
                .then((response) => response.json())
                .then((data) => setDataUserCat(data));
        } 
    }
    return ( 
        <div className="productos">
            {
                dataUserCat?
                <PanelAdmin dataUserCat={dataUserCat} reload={reload}/>:
                <section className="store">
                    {reload?<>
                        <div className="contContents">
                            <div className="contServices">
                                <div className="contBtnCat">
                                    <h2>Servicios</h2>
                                    <img src={imgServices} alt="services"/>
                                </div>
                                { 
                                    dataS.map(data => (
                                        <Store key={data._id} safePosition={safePosition} data={data} int={0} name="products"/>
                                    ))
                                }
                            </div>
                            <div className="contProduct">
                                <div className="contBtnCat">
                                    <img src={imgProducts} alt="services"/>
                                    <h2>Productos</h2>
                                </div>
                                {
                                    dataP.map(data => (
                                        <Store key={data._id} safePosition={safePosition} data={data} int={0} name="services"/>
                                    ))
                                }
                            </div>
                        </div>
                    </>:<>
                        <p>Cargando...</p>
                    </>}
                </section>
            }
            
            {modal?<div className="contModal">
                <div className="contBtnHead">
                    <AiFillCloseCircle className="icon" onClick={()=> closeModal() }/>
                </div>
                <section className="form">
                    <div className="contRow">
                        <h2>Informacion del {select.type}</h2>
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
                            <button onClick={()=>{
                                closeNumerModal(select.price)
                                closeModal() 
                                }}>Ir a Comprar<AiOutlineArrowRight/> </button>
                        </div>
                    
                    </div>
                </section>
            </div>:<></>}
            {numberModal?<ModalContact name="Ponte en Contacto con la Empresa por medio de WhatsApp: " closeNumerModal={closeNumerModal} number={numerCom} />:<></>}
        </div>
     );
}

export default Catalogue;