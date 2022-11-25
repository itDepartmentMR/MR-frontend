import ApiBitcoins from "../components/ApiBitcoins";
import NavBar from "../components/NavBar";
import React, { useEffect, useState } from 'react';
import TrmApi from "trm-api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function News() {
    const [dataDolar, setDataDolar] = useState([]);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dolar el Ultimo Mes',
            },
        },
    };
    const precioDolar=dataDolar.slice(9);
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dolar',
                data: precioDolar,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    //datos de la moneda
   


    useEffect(() => {
        const trm = new TrmApi();
        const fecha = new Date();
        let dia = fecha.getDate()
        let mes = fecha.getMonth()
        let año = fecha.getFullYear()
        const fechaActual = `${año}-${mes + 1}-${dia}`;
        const fechaPasada = `${año}-${mes-1}-${dia}`;

        trm
            .between({startAt: fechaPasada, endAt: fechaActual})
            .then((data) => {
                setDataDolar(data.map(Element => Element.valor))
                
            })
            .catch((error) => console.log(error));
    }, [])
    return (
        <section className="News">
            <NavBar />
            <div className="contNews">
                <h1>Seguimiento del TRM</h1>
                <div className="contBody">
                    <div className="contGraphD">
                        <div className="contBody">
                            <Line options={options} data={data} />
                        </div>

                    </div>
                </div>
            </div>
            <ApiBitcoins />
        </section>
    );
}

export default News;