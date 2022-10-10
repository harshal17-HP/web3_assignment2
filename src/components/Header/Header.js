import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation,useNavigate } from "react-router-dom";
import logo from "./logo.png";
export default function Header() {
  const location = useLocation();
  const [active,setActive]=useState({
    "home":"",
    "contact":"",
    "games":"",
    "about":"", 

  })

  const navigate = useNavigate();
  
  const onHome = ()=>{
    navigate("/");
    }

  const onContact = ()=>{
      navigate("/contact");
    } 

  const onGames = ()=>{
        navigate("/games");
      
        } 
  const onAbout = ()=>{
      navigate("/about");
      }
  
  useEffect(() => {
    console.log(location);
    if(location.pathname==="/")
      {
        console.log("running")
        setActive({...active,"home":"underline"})

      }
      
     else if(location.pathname==="/contact")
     {
       console.log("running")
       setActive({...active,"contact":"underline"})
     }

     else if(location.pathname==="/games")
     {
       console.log("running")
       setActive({...active,"games":"underline"})
     } 
     else if(location.pathname==="/about")
     {
       console.log("running")
       setActive({...active,"about":"underline"})
      

     } 
  }, [location]);
  
    
  
  return (
    <div className="head">
      <img src={logo} className="logohead"  alt="" onClick={onHome}/>
      <div className="elements">
        
        <button onClick={onHome} className={"navlink " + active.home}>
          Home
        </button>{" "}
        {" "}

        <button onClick={onContact} className={"navlink " + active.contact}>
          Contact Us
        </button>{" "}
        {" "}
        <button onClick={onGames } className={"navlink " + active.games}>
          Games
        </button>{" "}
        {" "}
        <button onClick={onAbout} className={"navlink " + active.about}>
          About Us
        </button>{" "}
      </div>
    </div>

  );
}
