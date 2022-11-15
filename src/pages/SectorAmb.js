import CherryTech from "../components/Cherry/CherryTech2";
import NavBar from "../components/NavBar";
function SectorAmb() {
    return ( 
        <section className="SectorAmb"> 
            <NavBar/>
            <div className="contHeader">
                <div className="contCardSec">
                     <h2>Sector Ambiental</h2>
                     <div className="contBtns">
                        <div className="btn">
                            <a href="#afterParty2">Weed Life</a>
                        </div>
                     </div>
                </div>
            </div>
            <CherryTech/>
        </section>
     );
}

export default SectorAmb;