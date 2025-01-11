// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"; // Ensure this path is correct
import About from "./components/About";
import Delivery from "./Services/Delivery";
import Shipping from "./Services/Shipping";
import Warehousing from "./Services/Warehousing";
import ContactUs from "./ContactUs/ContactUs";
import Tracking from "./tracking/Tracking";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/warehousing" element={<Warehousing/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/tracking" element={<Tracking/>}/>
      </Routes>
    </>
  );
}

export default App;
