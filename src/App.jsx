 import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FormValidate from './components/customersform/index.jsx';
import Tables from './components/tables/index.jsx';
import Header from './components/header/index.jsx'
import Footer from "./components/Footer/index.jsx"
import Card from "./components/card/index.jsx"
// import {Container ,Col} from 'react-bootstrap';
import SwiperC from './components/swiper';

function App  () {
  const [userData, setUserData] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/customers`) 
    .then(function (response) {
    if(response.data.length > 0) {
      setUserData(response.data);
    } 
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {
    });

    axios.get('http://localhost:3000/invoice') 
    .then(function (response) {
      setInvoiceData(response.data);
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {
    });
    
}, [])

  return (
    <div className="App">
      <Header/>
      <SwiperC/>
      <FormValidate datas={userData}/>
      <Tables type='customers' data={userData}/>
      <Tables type='invoice' data={invoiceData}/> 
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
