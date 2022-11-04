const storeImg = require.context('../img', true);
function Somos() {
    return ( 
        <>
            <div className="contHead">
                <h1>¿Quienes Somos?</h1>
                <p>Somos una empresa con experiencia en diferentes sectores, Durante este tiempo hemos logrado realizar alianzas y adquisiciones estratégicas con diferentes empresas con el objetivo de brindar soluciones a nuestros clientes.</p>
            </div>
            <div className="contBody">
                <section className="contCardSomos">
                    <img src={storeImg(`./1.png`)} alt=""/>
                    <b>Sector Ambiental</b>
                </section>
                <section className="contCardSomos">
                    <img src={storeImg(`./2.png`)} alt=""/>
                    <b>Sector Farmaceutico</b>
                </section>
                <section className="contCardSomos">
                    <img src={storeImg(`./3.png`)} alt=""/>
                    <b>Sector Logistico</b>
                </section>
                <section className="contCardSomos">
                    <img src={storeImg(`./4.png`)} alt=""/>
                    <b>Sector Comercial</b>
                </section>
                <section className="contCardSomos">
                    <img src={storeImg(`./5.png`)} alt=""/>
                    <b>Sector Tecnologico</b>
                </section>
            </div>
        </>
     );
}

export default Somos;