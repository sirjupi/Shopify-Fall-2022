// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { Home } from "./Home";
import { Warehouse } from "./Warehouse";
import { Inventory } from "./Inventory";
import { Navigation } from "./Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Inventory Management
        </h3>

        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/warehouse" element={<Warehouse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
