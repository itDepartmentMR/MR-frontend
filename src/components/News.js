import ApiBitcoins from "./ApiBitcoins";
import CardPreset from "./CardsPreset";
import Panel from "./Panel";
import React, { useState, useEffect } from 'react';

function News() {
    const [dataB, setDataB] = useState([]);
    const [dataT, setDataT] = useState([]);
    const [wait, setWait] = useState(false);
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?pageSize=4&country=co&category=technology&apiKey=6514b99c4b6e4938b583eec70b077912";
        getData()
        
        const urlT = "https://newsapi.org/v2/top-headlines?pageSize=1&country=co&category=science&apiKey=6514b99c4b6e4938b583eec70b077912";
        async function getData() {
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setDataB(data.articles)
                });
        }
        getDataT()
        async function getDataT() {
            await fetch(urlT)
                .then((response) => response.json())
                .then((data) => {
                    setDataT(data.articles)
                    setWait(true)
                });
        }
    }, [])
    return ( 
        <section className="contNews">
            <div className="contPanel">
                <Panel/>
            </div>
            <div className="contBody">
                <div className="contPanelNews">
                    <div className="contNewsImport">
                        {dataT.map(data => (
                            <CardPreset key={data.publishedAt} img={data.urlToImage} 
                                tittle={data.title} 
                                fecha={data.publishedAt}
                                body={data.description}
                            />
                        ))}
                    </div>
                    <div className="contNewsWeek">
                        {dataB.map(data => (
                            <CardPreset key={data.publishedAt} img={data.urlToImage} 
                                tittle={data.title} 
                                fecha={data.publishedAt}
                            />
                        ))}
                    </div>
                </div>
                <div className="contBitCoin">
                    <ApiBitcoins/>
                </div>
            </div>
        </section>
     );
}

export default News;