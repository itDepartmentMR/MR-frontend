

const storeImg = require.context('../img', true);

function Store({safePosition, data, int, name}) {
    return (
        <>
        <div className={int===0?"contStore":"contStore2"} onClick={ () => safePosition(data)}>
            <div className="contImgs">
                <img src={storeImg(`./${name}.png`)} alt="tema" className="contImg"/>
            </div>
            <div className="contDes">
                <p id="pname">{data.name}</p>
                <p id="pdesc">{data.desc}</p>
                <b>Recomendado</b>
            </div>
        </div>
        </> 
        
     );
}

export default Store;