const storeImg = require.context('../img', true);
function Panel() {
    return ( 
        <>
            <div className="contImg">
                <img src={storeImg(`./b3.png`)} alt=""/>
            </div>
        </>
     );
}

export default Panel;