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
         <h3>Featured works.
         </h3>
         <section className="container">
        <section className="images">
         <img src ="bland.png"></img>
         <img src="pink.png"></img>
        </section>
         </section>
        </div>
    )
}
export default Team;