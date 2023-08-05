import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";

function App() {
    return (
      <BrowserRouter>
        <Routes>  
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes> 
      </BrowserRouter>
    );
}

export default App;