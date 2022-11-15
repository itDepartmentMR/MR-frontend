
import TableBit from './TableBit';
//importacion de mi custom hocks
import {useFetch} from "../app/useFetch";

function ApiBitcoins() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=false";
    //obtencion de la data
    const {data, loading} = useFetch(url);
    return ( 
        <section className="ApiBitcoins">
            {loading?<>Cargando...</>:<TableBit data={data}/>}
        </section>
     );
}

export default ApiBitcoins;