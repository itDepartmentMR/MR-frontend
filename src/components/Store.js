

const storeImg = require.context('../img', true);

function Store({safePosition, data, name, business}) {
    
    return (
        <>
        <div className="contStorePro" onClick={ () => safePosition(data)}>
            <div className="contImgs">
                <img src={storeImg(`./${name}.png`)} alt="tema" className="contImg"/>
            </div>
            <div className="contDes">
                <p id="pname">{data.name}</p>
                <p id="pdesc">{data.desc}</p>
                <b>{business}</b>
            </div>
        </div>
        </> 
        
     );
}

export default Store;