import React from "react";
import Slider from "./slider";


import "./team.css";
function Team(){
    return (
        <div className="team">
            <Slider/>
         <h1>Our team belives you deserve only the best.</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
         <img src="teach.png" alt="team" />
        </div>
    )
}
export default Team;