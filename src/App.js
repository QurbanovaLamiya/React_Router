import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sweets } from "./Pages/Sweets";
import { Candy } from "./Pages/Candy";
import { IceCream } from "./Pages/IceCream";
import { MenuList } from "./Pages/MenuList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Link to="/"></Link>
      <Link to="/Sweets" className="text-danger m-5">Sweets</Link>
      <Link to="/Candy" className=" text-warning m-5">Candy</Link>
      <Link to="/IceCream" className=" text-info m-5">IceCream</Link>

      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/Sweets" element={<Sweets />} />
        <Route path="/Candy" element={<Candy />} />
        <Route path="/IceCream" element={<IceCream />} />
      </Routes>

    </Router>
  );
}

export default App;
