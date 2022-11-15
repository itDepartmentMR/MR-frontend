import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Freelancer from '../pages/Freelancer';
import Catalogue from '../pages/Catalogue';
import Conocenos from '../pages/Conocenos';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import News from '../pages/News';
import SectorTec from '../pages/SectorTec';
import SectorAmb from '../pages/SectorAmb';
import SectorCom from '../pages/SectorCom';
import SectoLog from '../pages/SectorLog';

function Router() {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    <Route exact path='/' element={<Catalogue/>}/>
                    <Route exact path='/conocenos' element={<Conocenos/>}/>
                    <Route exact path='/noticias' element={<News/>}/>
                    <Route exact path='/conferencias' element={<Freelancer/>}/>
                    <Route exact path='/conocenos/sectortecnologico' element={<SectorTec/>}/>
                    <Route exact path='/conocenos/sectorambiental' element={<SectorAmb/>}/>
                    <Route exact path='/conocenos/sectorlogistico' element={<SectoLog/>}/>
                    <Route exact path='/conocenos/sectorcomercial' element={<SectorCom/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default Router;