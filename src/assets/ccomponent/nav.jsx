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
            <button>
                  <button>Sin In</button>
                 <button>Sin Up</button>
            </button>
        </div>
        
    )

 }
 export default navbar ;