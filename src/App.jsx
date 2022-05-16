//  import React, { useEffect, useState } from 'react';
import './App.css';
import Formvalidate from './components/customersform/index.jsx';
import Tables from './components/tables/index.jsx';
import Header from './components/header/index.jsx'
import Footer from "./components/Footer/index.jsx"
import Card from "./components/card/index.jsx"
// import {Container ,Col} from 'react-bootstrap';
import SwiperC from './components/swiper';

function App() {
  return (
    <div className="App">
      <Header/>
      <SwiperC/>
      <Formvalidate/>
      <Tables type='customers'/>
      <Tables type='invoice'/> 
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
