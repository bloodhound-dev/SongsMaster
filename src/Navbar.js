import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ERROR_page from './erroe';
import About from "./About"
import Login from './Login';
import App from './App';
function Navbar(){
  return(
    <>
    <div className='Navbar1'>
      
    <Routes>
         <Route  path="/ABOUT" element={<About/>}/>
        <Route  path="/LOGIN" element={<Login/>}/>
        <Route path="*" elements={<ERROR_page/>}/>
    </Routes>
    <div className="Navbar">
    <Link className="navElement" to='/'>HOME</Link>
    <br></br>
    <Link className="navElement" to="/ABOUT">ABOUT</Link>
    <br></br>
    <Link className="navElement" to="/LOGIN">LOGIN</Link>
    </div>
    <p className="Font-p">Most Famous Songs</p>
    </div>
    </>
  );
}

export default Navbar;