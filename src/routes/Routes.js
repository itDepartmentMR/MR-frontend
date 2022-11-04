import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';

function Router() {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    <Route exact path='/' element={<App/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default Router;