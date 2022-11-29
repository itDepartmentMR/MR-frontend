import ReactDOM from "react-dom";
import React, { useState } from 'react';

import Cookies from 'universal-cookie';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function ModalContact({ number, closeNumerModal, dataM}) {
    const cookies = new Cookies();
    const baseURL = process.env.REACT_APP_URIB;
    const [price] = useState(number.toString(10));
//prueba
//ht
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
    function onCancel(data) {
     alert("Tu orden ha Sido cancelada")   
    }
    function onApprove(data, actions){
        return actions.order.capture().then(function(orderData) {
            // Successful capture! For demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            alert('Compra con Exito A tu correo te llegara la factura');

            // Replace the above to show a success message within this page, e.g.
            const element = document.getElementById('paypal-confirm-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Gracias por tu compra</h3>';
            // Or go to another URL:  actions.redirect('thank_you.html');
            //Peticion para agregar el usuario a la base de datos
            let db = {}
            db.email = cookies.get('email')
            db.number = cookies.get('number')
            
            fetch(`${baseURL}/Pay`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(db)
            })
        });
    }
    
    async function getBinance() {
        let url = `${baseURL}/pasarelaCrypto/prices`
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(dataM)
        })
        .then((res) => res.json())
        .then((data) => {
           window.location.href = data.hosted_url
        })
    }
    return ( 
        <div className="contModalN">
            <div className="contBody">
                <div id="paypal-confirm-container">
                    
                </div>
                <div className="contHead">
                    <h3>Realizar el Pago</h3>
                    <a href="https://biz.payulatam.com/B0f053f4F963570">
                        <img src="https://ecommerce.payulatam.com/img-secure-2015/boton_pagar_grande.png" alt="PayU"/>
                    </a>
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                        onCancel={(data) => onCancel(data)}
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