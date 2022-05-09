// import React, { useEffect, useState } from 'react';
import Invoice from './components/invoice/index.jsx';
import Customers from './components/customers/index.jsx';
import './App.css';
import Formvalidate from './components/customersform/index.jsx';


function App() {
  return (
    <div className="App">
      <Invoice />
      <Customers />
      <Formvalidate/>
      {/* <Tables type='customers'/>
      <Tables type='invoice'/>  */}
 
    </div>
  );
}

export default App;
