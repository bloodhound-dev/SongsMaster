import React from 'react';
import {Link} from 'react-router-dom'

function Main() {
    return (
      <>
      
      
      <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">about</Link>
        <br></br>
        <Link to="/contact">contact</Link>
      </>
      
      
    );
  }


  export default Main;