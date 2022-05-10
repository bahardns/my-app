 import React, { useEffect, useState } from 'react';
import './App.css';
import Formvalidate from './components/customersform/index.jsx';
import Tables from './components/tables/index.jsx';


function App() {
  return (
    <div className="App">
      <Formvalidate/>
      <Tables type='customers'/>
      <Tables type='invoice'/> 
 
    </div>
  );
}

export default App;
