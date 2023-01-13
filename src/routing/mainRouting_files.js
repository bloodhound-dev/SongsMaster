import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import Home from "../routing/routing_(home)"
import About from "../routing/routing_(about)"
import Contact from "../routing/routing_(contact)"
import Main from "../routing/routing_(main)";
function Mrf() {
  return (
    <>
    <div className="App">
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Main/>
      </div>
  </>
  )
}

export default Mrf
