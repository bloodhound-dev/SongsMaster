import "./App.css";
import  React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function App(){
  const [user,setUser]=useState([])
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e373b4f19amsh97a1da6a0a6c91fp1d4d82jsnb27e27cbba37',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
    
    fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
      .then(response => response.json())
      .then(response => setUser(response.tracks))
  },[])
  console.log(user)
  return (
    <div className="App">
      <Navbar/>
    <div className="mainCard">

    
      {user.map((data)=>{
        return(
          
       
          <div className="card">
      <div className="card-img">
        
          <img src={data.share.avatar}/>
        
      </div>
      <div className="card-detail">
        <b>{data.subtitle}</b>
        <p>Song: {data.title}</p>
        <i>{data.share.text}</i>

      </div>
     </div>            
        )
      })}
      </div>
      </div>
);}

export default App;
/*
fetch("https://reqres.in/api/users?delay=3")
.then((respo)=>respo.json())
.then((Data)=> setUser(Data.data))*/