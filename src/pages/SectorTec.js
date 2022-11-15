import CherryTech from "../components/Cherry/CherryTech";
import NavBar from "../components/NavBar";
function SectorTec() {
    return ( 
        <section className="SectorTec">
            <NavBar/>
            <div className="contHeader">
                <div className="contCardSec">
                     <h2>Sector Tecnológico</h2>
                     <div className="contBtns">
                        <div className="btn">
                            <a href='#afterParty'>After Party</a>
                        </div>
                     </div>
                </div>
            </div>
            <CherryTech/>
        </section>
     );
}

export default SectorTec;