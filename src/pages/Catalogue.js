import NavBar from "../components/NavBar";
import Store from "../components/Store";
import React, { useState } from 'react';

import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight, AiFillStar, AiOutlineReload } from "react-icons/ai";
import ModalContact from "../components/ModalContact";
import PanelStart from "../components/PanelStart";
import PostUsers from "../components/PostUsers";
import {useFetch} from "../app/useFetch";

function Catalogue() {
    const [search, setSearch] = useState("");
    const [modalSetPay, setModalSetPay] = useState(false);
    const [select, setSelect] = useState([]);
    const [modal, setModal] = useState(false);
    const [filterData, setFilterData] = useState();
    const [numerCom, setNumerCom] = useState(0);
    const baseURL = process.env.REACT_APP_URIB;
    let urlP =`${baseURL}/catalogue`;
    //peticion con hooks
    const {data, loading} = useFetch(urlP);

    function safePosition(db) {
        setModal(true)
        setSelect(db)
    }

    function searchChange() {
        setFilterData(data.filter(Element => {
            return (
                Element
                .name
                .toLowerCase()
                .includes(search.toLowerCase())
              );
        }))
    }

    //capturar el valor del input de search
    const handleChange = e => {
        setSearch(e.target.value);
        searchChange()
    };
    function closeNumerModal(price) {
        setNumerCom(price)
        if (modalSetPay) {
            setModalSetPay(false)
        }else{
            setModalSetPay(true)
        }
    }
    
    return ( 
        <section className="Catalogues">
            
            {modalSetPay?<ModalContact closeNumerModal={closeNumerModal} number={numerCom} dataM={select}/>:<></>}
            <NavBar/>
            <PanelStart/>
            <div className="contSearch">
                <h3>Servicios y Productos</h3>
                <div className="search">
                    <input type="text" onChange={handleChange} />
                    <AiOutlineSearch className="icon"  onClick={()=> searchChange()}/>
                </div>
            </div>
            <section className="contStore">
                <div className="contFilters">
                    <b></b>
                </div>
                <div className="contProducts">
                    {loading?<AiOutlineReload className="iconReload"/>:<></>}
                    {search?filterData.map(data => (
                            <Store key={data._id} safePosition={safePosition} data={data} business="CherryTech" name="products"/>
                        )):data.map(data => (
                            <Store key={data._id} safePosition={safePosition} data={data} business="CherryTech" name="products"/>
                        ))}
                </div>
            </section>
            <PostUsers/>
            {modal?<div className="contModal">
                <div className="contBtnHead">
                    <AiFillCloseCircle className="icon" onClick={()=> setModal(false) }/>
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
                        <b>${select.price}.00 USD</b>
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
                                setModal(false) 
                                }}>Ir a Comprar<AiOutlineArrowRight/> </button>
                        </div>
                    
                    </div>
                </section>
            </div>:<></>}
            
        </section>
     );
}

export default Catalogue;