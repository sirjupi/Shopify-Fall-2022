// import logo from "./logo.svg";
import "./App.css";
import React from 'react';

import {Home} from './Home';
import {Warehouse} from './Warehouse';
import {Inventory} from './Inventory';
import {Navigation} from './Navigation';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>
    
{/* This one works for React 18 */}
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
      {/* <Route path='/employee' element={<Employee/>}/> */}
      <Route path='/warehouse' element={<Warehouse/>}/>
      
    </Routes>

{/* Bottom works for OLD REACT */}
     {/* <Routes>
       <Route path='/' component={Home} exact/>
       <Route path='/department' component={Department}/>
       <Route path='/employee' component={Employee}/>
     </Routes> */}


    </div>
    </BrowserRouter>
  );
}

export default App;