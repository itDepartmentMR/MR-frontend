import ReactDOM from "react-dom";
import React, { useState } from 'react';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function ModalContact({ number, closeNumerModal, dataM}) {
    const [price] = useState(number.toString(10));  
    function createOrder(data, actions){
        return actions.order.create({
            purchase_units: [
                {
                amount: {
                    value: price
                }
                }
            ]
            });
    }
    function onApprove(data, actions){
        return actions.order.capture();
    }
    async function getBinance() {
        let url = `http://localhost:5000/pasarelaCrypto/prices`
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(dataM)
        })
        .then((res) => res.json())
        .then((data) => {
           console.log(data.hosted_url)
           window.location.href = data.hosted_url
        })
    }
    return ( 
        <div className="contModalN">
            <div className="contBody">
                <div className="contHead">
                    <h3>Realizar el Pago</h3>
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                    <button onClick={()=> getBinance()} className="btnBinance">Binance
                    <img src="https://play-lh.googleusercontent.com/T1_WHAGs5WZePQejNSqqrxZah4uhBvYr698nTCFhXMjMZo5oSCoko5yW2wtmeO1ClRU" alt="binance"/>
                    </button>
                </div>
                <div className="contBtns">
                    <button onClick={closeNumerModal} className="btnCerrar">Cerrar</button>
                    
                </div>
            </div>
        </div>
     );
}

export default ModalContact;