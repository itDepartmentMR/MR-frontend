import ReactDOM from "react-dom";
import React, { useState } from 'react';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function ModalContact({ number, closeNumerModal}) {
    const [price] = useState(number.toString(10));
    console.log(price)
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

    return ( 
        <div className="contModalN">
            <div className="contBody">
                <div className="contHead">
                    <h3>Realizar el Pago</h3>
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                </div>
                <div className="contBtns">
                    <button onClick={closeNumerModal} className="btnCerrar">Cerrar</button>
                    
                </div>
            </div>
        </div>
     );
}

export default ModalContact;