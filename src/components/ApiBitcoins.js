import React, { useEffect, useState } from 'react';
import TableBit from './TableBit';

function ApiBitcoins() {
    const [dataB, setDataB] = useState([]);
    const [wait, setWait] = useState(false);

    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=false";
        getData()
        async function getData() {
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setDataB(data)
                    setWait(true)
                });
        }
     
    }, [])
    
        
        
    
    return ( 
        <section className="ApiBitcoins">
            {wait?<TableBit data={dataB}/>:<>Cargando...</>}
        </section>
     );
}

export default ApiBitcoins;