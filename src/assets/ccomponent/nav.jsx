import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
 function navbar(){
    return(
        <div className="nav-bar">
            <h1>Desgy Solutions</h1>
            <ul>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/fqa">FQA</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/docs">Docs</NavLink>
            </ul>
            <div className="nav-buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
        </div>
        
    )

 }
 export default navbar ;