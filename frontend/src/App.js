// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { Warehouse } from "./Warehouse";
import { Inventory } from "./Inventory";
import { Navigation } from "./Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

function App() {
  return (
    <div className="center1">
      <ButtonToolbar>
        <BrowserRouter>
          <div className="container">
            <Navigation />

            <Routes>
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/warehouse" element={<Warehouse />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ButtonToolbar>
    </div>
  );
}

export default App;
