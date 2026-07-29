import React from "react";
import "./nav.css";
 function navbar(){
    return(
        <div className="nav-bar">
            <h1>Desgy Solutions</h1>
            <ul>
                <a href="#">About</a>                  
             <a href="#">Team</a>
             <a href="#">FQA</a>
             <a href="#">Blog</a>
               <a href="#">Docs</a>
            </ul>
            <div className="nav-buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
        </div>
        
    )

 }
 export default navbar ;