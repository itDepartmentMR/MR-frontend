import CardSectors from "./CardSectors";
function Somos() {
    return ( 
        <>
            <div className="contHead">
                <h1>¿Quienes Somos?</h1>
                <p>Somos una empresa con experiencia en diferentes sectores, Durante este tiempo hemos logrado realizar alianzas y adquisiciones estratégicas con diferentes empresas con el objetivo de brindar soluciones a nuestros clientes.</p>
            </div>
            <div className="contBody">
                <CardSectors imgUrl="1" title="Sector Ambiental"/>
                <CardSectors imgUrl="3" title="Sector Logistico"/>
                <CardSectors imgUrl="4" title="Sector Comercial"/>
                <CardSectors imgUrl="5" title="Sector Tecnologico"/>
            </div>
        </>
     );
}

export default Somos;