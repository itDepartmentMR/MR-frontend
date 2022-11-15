
import Home from './components/Home';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import Contact from './components/Contact';
import Catalogue from './pages/Catalogue';
import CherryTech from './components/Cherry/CherryTech';
import Freelancer from './components/Freelancer';
import img from './img/whatsapp.svg';

function App() { 
    var [page, setPage] = useState(0);
    
    function changeHome() {
        setPage(0)
    }
    function changeContact() {
        setPage(1)
    }
    function changeProductos() {
        setPage(2)
    }
    function changeCherry() {
      setPage(4)
    }
    function changeFreelancer() {
      setPage(5)
    }
    
    
  return (
    <div className="App">
      <div className='contWhat'>
        <a href=" https://wa.me/573243915434" target="_black" >
          <img src={img} alt="whatsapp"/>
        </a>
        
      </div>
      <div className='header'>
        <NavBar changeContact={changeContact}
                changeHome={changeHome}
                changeProductos={changeProductos}
                changeCherry={changeCherry}
                changeFreelancer={changeFreelancer}/>
      </div>
      <div className='body'>
        {page===0?<Home/>:<></>}
        {page===1?<Contact/>:<></>}
        {page===2?<Catalogue/>:<></>}
        {page===4?<CherryTech/>:<></>}
        {page===5?<Freelancer/>:<></>}
      </div>
      
    </div>
  );
}

export default App;
