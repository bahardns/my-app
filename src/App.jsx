 import React, { useEffect, useState } from 'react';
import './App.css';
import Formvalidate from './components/customersform/index.jsx';
import Tables from './components/tables/index.jsx';
import Header from './components/header/index.jsx'
import SwiperC from './components/swiper';




function App() {
  return (
    <div className="App">
      <Header/>
      <Formvalidate/>
      <Tables type='customers'/>
      <Tables type='invoice'/> 
      
 
    </div>
  );
}

export default App;
